//adapted from the cerner smart on fhir guide. updated to utalize client.js v2 library and FHIR R4

// helper function to process fhir resource to get the patient name.
function getPatientName(pt) {
  if (pt.name) {
    var names = pt.name.map(function(name) {
      return name.given.join(" ") + " " + name.family;
    });
    return names.join(" / ")
  } else {
    return "anonymous";
  }
}

// display the patient name gender and dob in the index page
function displayPatient(pt) {
  document.getElementById('patient_name').innerHTML = getPatientName(pt);
  document.getElementById('gender').innerHTML = pt.gender;
  document.getElementById('dob').innerHTML = pt.birthDate;
}

//function to display list of medications
// function displayMedication(meds) {
//   med_list.innerHTML += "<li> " + meds + "</li>";
// }

//helper function to get quanity and unit from an observation resoruce.
// function getQuantityValueAndUnit(ob) {
//   if (typeof ob != 'undefined' &&
//     typeof ob.valueQuantity != 'undefined' &&
//     typeof ob.valueQuantity.value != 'undefined' &&
//     typeof ob.valueQuantity.unit != 'undefined') {
//     return Number(parseFloat((ob.valueQuantity.value)).toFixed(2)) + ' ' + ob.valueQuantity.unit;
//   } else {
//     return undefined;
//   }
// }

// helper function to get both systolic and diastolic bp
function getBloodPressureValue(BPObservations, typeOfPressure) {
  var formattedBPObservations = [];
  BPObservations.forEach(function(observation) {
    var BP = observation.component.find(function(component) {
      return component.code.coding.find(function(coding) {
        return coding.code == typeOfPressure;
      });
    });
    if (BP) {
      observation.valueQuantity = BP.valueQuantity;
      formattedBPObservations.push(observation);
    }
  });
  let retn = [];
  formattedBPObservations.forEach(d => {
    retn.push({
      'time': d.effectiveDateTime,
      'value': parseFloat((d.valueQuantity.value)).toFixed(2),
      'unit': d.valueQuantity.unit
    })
  })
  return retn;
}

// create a patient object to initalize the patient
function defaultPatient() {
  return {
    height: {
      value: ''
    },
    weight: {
      value: ''
    },
    sys: {
      value: ''
    },
    dia: {
      value: ''
    },
    ldl: {
      value: ''
    },
    hdl: {
      value: ''
    },
    note: 'No Annotation',
  };
}

//helper function to display the annotation on the index page
function displayAnnotation(annotation) {
  note.innerHTML = annotation;
}

//function to display the observation values you will need to update this
function displayObservation(obs) {
  console.log(obs)
  // hdl.innerHTML = obs.hdl;
  // ldl.innerHTML = obs.ldl;
  // sys.innerHTML = obs.sys;
  // dia.innerHTML = obs.dia;
  // weight.innerHTML = obs.weight;
  // height.innerHTML = obs.height;
}

//once fhir client is authorized then the following functions can be executed
FHIR.oauth2.ready().then(function(client) {
  let final_weight_id = null;
  // get patient object and then display its demographics info in the banner
  client.request(`Patient/${client.patient.id}`).then(
    function(patient) {
      displayPatient(patient);
      console.log(patient);
    }
  );

  // get observation resoruce values
  // you will need to update the below to retrive the weight and height values
  var query = new URLSearchParams();

  query.set("patient", client.patient.id);
  query.set("_count", 100);
  query.set("_sort", "-date");
  query.set("code", [
    'http://loinc.org|8462-4',
    'http://loinc.org|8480-6',
    'http://loinc.org|2085-9',
    'http://loinc.org|2089-1',
    'http://loinc.org|55284-4', // blood pressure
    'http://loinc.org|3141-9',
    'http://loinc.org|2571-8',
    'http://loinc.org|74774-1',
    'http://loinc.org|14647-2',
    'http://loinc.org|2093-3',
    'http://loinc.org|29463-7', // weight
    'http://loinc.org|3141-9' , // weight
    'http://loinc.org|8302-2' , // Body height
  ].join(","));

  // console.log(query);

  client.request("Observation?" + query, {
    pageLimit: 0,
    flat: true
  }).then(
    function(ob) {

      // console.log(ob);
      // group all of the observation resoruces by type into their own
      var byCodes = client.byCodes(ob, 'code');
      var systolicbp_list = getBloodPressureValue(byCodes('55284-4'), '8480-6');
      var diastolicbp_list = getBloodPressureValue(byCodes('55284-4'), '8462-4');
      var cholesterol = byCodes("14647-2", "2093-3");
      var hdl = byCodes('2085-9');
      var triglycerides = byCodes('2571-8');
      // var clucose = byCodes('74774-1');
      // var weight1 = byCodes('3141-9')
      var weight = byCodes('29463-7');
      var height = byCodes('8302-2');

      // create patient object
      var p = defaultPatient();

      let cholesterol_list = [];
      cholesterol.forEach(d => {
        cholesterol_list.push({
          'time': d.effectiveDateTime,
          'value': parseFloat((d.valueQuantity.value)).toFixed(2),
          'unit': d.valueQuantity.unit,
        });
      })

      let hdl_list = [];
      hdl.forEach(d => {
        hdl_list.push({
          'time': d.effectiveDateTime,
          'value': parseFloat((d.valueQuantity.value)).toFixed(2),
          'unit': d.valueQuantity.unit,
        });
      })

      let ldl_list = [];
      hdl_list.forEach(h => {
        cholesterol_list.forEach(a => {
          if (h.time === a.time && h.unit === a.unit) {
            ldl_list.push({
              'time': h.time,
              'value': parseFloat(a.value - h.value).toFixed(2),
              'unit': h.unit,
            });
          }
        })
      })

      let triglycerides_list = [];
      triglycerides.forEach(d => {
        triglycerides_list.push({
          'time': d.effectiveDateTime,
          'value': parseFloat((d.valueQuantity.value)).toFixed(2),
          'unit': d.valueQuantity.unit,
        });
      })

      let weights_list = [];
      weight.forEach(d => {
        weights_list.push({
          'time': d.effectiveDateTime,
          'value': parseFloat((d.valueQuantity.value)).toFixed(2),
          'unit': d.valueQuantity.unit,
        });
      })

      let heights_list = [];
      height.forEach(d => {
        heights_list.push({
          'time': d.effectiveDateTime,
          'value': parseFloat((d.valueQuantity.value)).toFixed(2),
          'unit': d.valueQuantity.unit,
        });
      })

      console.log(weights_list);
      console.log(heights_list);
      console.log(systolicbp_list)
      console.log(diastolicbp_list)
      console.log(cholesterol_list);
      console.log(hdl_list);
      console.log(ldl_list);
      console.log(triglycerides_list);
 
    });

  // dummy data for medrequests
  // var medResults = ["SAMPLE Lasix 40mg","SAMPLE Naproxen sodium 220 MG Oral Tablet","SAMPLE Amoxicillin 250 MG"]
  // client.request("/MedicationRequest?patient=" + client.patient.id, {
  //   resolveReferences: [ "medicationReference" ],
  // }).then(function(meds) {
  //   // console.log(meds);
  //   medResults = [];
  //   console.log(meds);
  //   meds.entry.forEach(d => {
  //     d.resource.medicationCodeableConcept.coding.forEach(i => {
  //       if(i.hasOwnProperty("userSelected")) {
  //         if(i.userSelected)
  //           medResults.push(i.display);
  //       } else {
  //         medResults.push(i.display);
  //       }
  //     })
  //   })
  //   medResults.forEach(function(med) {
  //     displayMedication(med);
  //   })
  // });


  // get medication request resources this will need to be updated
  // the goal is to pull all the medication requests and display it in the app. It can be both active and stopped medications
  // medResults.forEach(function(med) {
  //   displayMedication(med);
  // })

  //update function to take in text input from the app and add the note for the latest weight observation annotation
  //you should include text and the author can be set to anything of your choice. keep in mind that this data will
  // be posted to a public sandbox
  // function addWeightAnnotation() {
  //   var annotation = document.getElementById('annotation').value;
  //   var retnHtml = 'XW - '+new Date().toISOString("YYYY-MM-DDThh:mm:ss+zz:zz")+' - '+annotation;
  //   // client.update({
  //   //   type: "Observation",
  //   //   id: final_weight_id,
  //   //   resource: {
  //   //     note: retnHtml,
  //   //   }
  //   // client.request("Observation?id=" + final_weight_id)
  //   client.request({
  //     url: "Observation/"+final_weight_id,
  //     method: "PUT",
  //     json: { 
  //       resource: {
  //         note: retnHtml,
  //       }
  //     }
  //   })
  //   .catch(function(e){
  //       console.log('An error happened while updating: \n' + JSON.stringify(e));
  //       throw e;
  //   }).then(function(bundle){
  //       console.log('Updating note successed');
  //       return bundle;
  //   });
  //   displayAnnotation(retnHtml);

  // }

  //event listner when the add button is clicked to call the function that will add the note to the weight observation
  // document.getElementById('add').addEventListener('click', addWeightAnnotation);


}).catch(console.error);
