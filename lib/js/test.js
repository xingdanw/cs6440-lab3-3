// vvv
var width = document.getElementById('weight').offsetWidth;
let svg_height = d3.select("#height").append("svg").attr("class", "inner_svg")
                  .attr("width", width).attr("height", 280);
let svg_weight = d3.select("#weight").append("svg").attr("class", "inner_svg")
                  .attr("width", width).attr("height", 280);
let svg_bmi = d3.select("#bmi").append("svg").attr("class", "inner_svg")
                  .attr("width", width).attr("height", 280);
let svg_bp = d3.select("#bp").append("svg").attr("class", "inner_svg")
                  .attr("width", width).attr("height", 280);
let svg_cholesterol = d3.select("#cholesterol").append("svg").attr("class", "inner_svg")
                  .attr("width", width).attr("height", 280);
let svg_triglycerides = d3.select("#triglycerides").append("svg").attr("class", "inner_svg")
                  .attr("width", width).attr("height", 280);

function updateWindow(){
  width = document.getElementById('weight').offsetWidth;
  svg_height.attr("height", width);
  svg_weight.attr("width", width);
  svg_bmi.attr("bmi", width);
  svg_bp.attr("bp", width);
  svg_cholesterol.attr("cholesterol", width);
  svg_triglycerides.attr("triglycerides", width);
  updateDraw();
}
d3.select(window).on('resize.updatesvg', updateWindow);

// let weight_data = [{time: "2018-11-29T06:06:44-05:00", value: "73.48", unit: "kg"},
//               {time: "2017-11-23T06:06:44-05:00", value: "73.48", unit: "kg"},
//               {time: "2016-11-17T06:06:44-05:00", value: "72.48", unit: "kg"},
//               {time: "2015-11-12T06:06:44-05:00", value: "71.48", unit: "kg"},
//               {time: "2014-11-06T06:06:44-05:00", value: "72.48", unit: "kg"},
//               {time: "2013-10-31T07:06:44-04:00", value: "74.48", unit: "kg"},
//               {time: "2012-10-25T07:06:44-04:00", value: "73.48", unit: "kg"},
//               {time: "2011-10-20T07:06:44-04:00", value: "75.48", unit: "kg"},
//               {time: "2010-10-14T07:06:44-04:00", value: "72.48", unit: "kg"},
//               {time: "2009-10-08T07:06:44-04:00", value: "71.48", unit: "kg"}];

// let height_data =[{time: "2018-11-29T06:06:44-05:00", value: "162.11", unit: "cm"},
//               {time: "2017-11-23T06:06:44-05:00", value: "161.11", unit: "cm"},
//               {time: "2016-11-17T06:06:44-05:00", value: "160.11", unit: "cm"},
//               {time: "2015-11-12T06:06:44-05:00", value: "162.11", unit: "cm"},
//               {time: "2014-11-06T06:06:44-05:00", value: "163.11", unit: "cm"},
//               {time: "2013-10-31T07:06:44-04:00", value: "164.11", unit: "cm"},
//               {time: "2012-10-25T07:06:44-04:00", value: "162.11", unit: "cm"},
//               {time: "2011-10-20T07:06:44-04:00", value: "161.11", unit: "cm"},
//               {time: "2010-10-14T07:06:44-04:00", value: "162.11", unit: "cm"},
//               {time: "2009-10-08T07:06:44-04:00", value: "163.11", unit: "cm"}];

// let systolicbp_data = [{time: "2018-11-29T06:06:44-05:00", value: "185.81", unit: "mm[Hg]"},
//               {time: "2017-11-23T06:06:44-05:00", value: "162.51", unit: "mm[Hg]"},
//               {time: "2016-11-17T06:06:44-05:00", value: "190.02", unit: "mm[Hg]"},
//               {time: "2015-11-12T06:06:44-05:00", value: "153.02", unit: "mm[Hg]"},
//               {time: "2014-11-06T06:06:44-05:00", value: "169.42", unit: "mm[Hg]"},
//               {time: "2013-10-31T07:06:44-04:00", value: "178.86", unit: "mm[Hg]"},
//               {time: "2012-10-25T07:06:44-04:00", value: "187.73", unit: "mm[Hg]"},
//               {time: "2011-10-20T07:06:44-04:00", value: "162.40", unit: "mm[Hg]"},
//               {time: "2010-10-14T07:06:44-04:00", value: "151.04", unit: "mm[Hg]"},
//               {time: "2009-10-08T07:06:44-04:00", value: "194.06", unit: "mm[Hg]"}];

// let diastolicbp_data = [{time: "2018-11-29T06:06:44-05:00", value: "106.80", unit: "mm[Hg]"},
//               {time: "2017-11-23T06:06:44-05:00", value: "107.54", unit: "mm[Hg]"},
//               {time: "2016-11-17T06:06:44-05:00", value: "106.27", unit: "mm[Hg]"},
//               {time: "2015-11-12T06:06:44-05:00", value: "107.06", unit: "mm[Hg]"},
//               {time: "2014-11-06T06:06:44-05:00", value: "94.52", unit: "mm[Hg]"},
//               {time: "2013-10-31T07:06:44-04:00", value: "113.45", unit: "mm[Hg]"},
//               {time: "2012-10-25T07:06:44-04:00", value: "101.16", unit: "mm[Hg]"},
//               {time: "2011-10-20T07:06:44-04:00", value: "98.73", unit: "mm[Hg]"},
//               {time: "2010-10-14T07:06:44-04:00", value: "101.04", unit: "mm[Hg]"},
//               {time: "2009-10-08T07:06:44-04:00", value: "115.69", unit: "mm[Hg]"}];

// let hdl_data = [{time: "2018-10-13T07:06:44-04:00", value: "44.40", unit: "mg/dL"},
//               {time: "2017-10-13T07:06:44-04:00", value: "57.40", unit: "mg/dL"},
//               {time: "2016-11-17T06:06:44-05:00", value: "79.05", unit: "mg/dL"},
//               {time: "2016-10-13T07:06:44-04:00", value: "50.96", unit: "mg/dL"},
//               {time: "2015-10-14T07:06:44-04:00", value: "67.86", unit: "mg/dL"},
//               {time: "2014-10-14T07:06:44-04:00", value: "60.77", unit: "mg/dL"},
//               {time: "2013-10-31T07:06:44-04:00", value: "65.35", unit: "mg/dL"},
//               {time: "2013-10-14T07:06:44-04:00", value: "51.04", unit: "mg/dL"},
//               {time: "2012-10-14T07:06:44-04:00", value: "41.81", unit: "mg/dL"},
//               {time: "2011-10-15T07:06:44-04:00", value: "54.24", unit: "mg/dL"},
//               {time: "2010-10-15T07:06:44-04:00", value: "52.36", unit: "mg/dL"},
//               {time: "2010-10-14T07:06:44-04:00", value: "63.82", unit: "mg/dL"},
//               {time: "2009-10-15T07:06:44-04:00", value: "42.85", unit: "mg/dL"}];

// let ldl_data = [{time: "2018-10-13T07:06:44-04:00", value: "131.16", unit: "mg/dL"},
//               {time: "2017-10-13T07:06:44-04:00", value: "109.69", unit: "mg/dL"},
//               {time: "2016-11-17T06:06:44-05:00", value: "92.77", unit: "mg/dL"},
//               {time: "2016-10-13T07:06:44-04:00", value: "130.05", unit: "mg/dL"},
//               {time: "2015-10-14T07:06:44-04:00", value: "91.41", unit: "mg/dL"},
//               {time: "2014-10-14T07:06:44-04:00", value: "99.06", unit: "mg/dL"},
//               {time: "2013-10-31T07:06:44-04:00", value: "97.11", unit: "mg/dL"},
//               {time: "2013-10-14T07:06:44-04:00", value: "134.30", unit: "mg/dL"},
//               {time: "2012-10-14T07:06:44-04:00", value: "120.45", unit: "mg/dL"},
//               {time: "2011-10-15T07:06:44-04:00", value: "143.71", unit: "mg/dL"},
//               {time: "2010-10-15T07:06:44-04:00", value: "138.76", unit: "mg/dL"},
//               {time: "2010-10-14T07:06:44-04:00", value: "121.90", unit: "mg/dL"},
//               {time: "2009-10-15T07:06:44-04:00", value: "145.37", unit: "mg/dL"}];

// let triglycerides_data = [{time: "2018-10-13T07:06:44-04:00", value: "149.35", unit: "mg/dL"},
//               {time: "2017-10-13T07:06:44-04:00", value: "167.42", unit: "mg/dL"},
//               {time: "2016-11-17T06:06:44-05:00", value: "116.74", unit: "mg/dL"},
//               {time: "2016-10-13T07:06:44-04:00", value: "139.38", unit: "mg/dL"},
//               {time: "2015-10-14T07:06:44-04:00", value: "169.36", unit: "mg/dL"},
//               {time: "2014-10-14T07:06:44-04:00", value: "112.19", unit: "mg/dL"},
//               {time: "2013-10-31T07:06:44-04:00", value: "145.17", unit: "mg/dL"},
//               {time: "2013-10-14T07:06:44-04:00", value: "198.12", unit: "mg/dL"},
//               {time: "2012-10-14T07:06:44-04:00", value: "180.76", unit: "mg/dL"},
//               {time: "2011-10-15T07:06:44-04:00", value: "134.24", unit: "mg/dL"},
//               {time: "2010-10-15T07:06:44-04:00", value: "113.00", unit: "mg/dL"},
//               {time: "2010-10-14T07:06:44-04:00", value: "142.85", unit: "mg/dL"},
//               {time: "2009-10-15T07:06:44-04:00", value: "165.97", unit: "mg/dL"}];

let parseUTCDate = d3.utcParse("%Y-%m-%d");
weight_data.forEach((d,i) => {d.time = parseUTCDate(d.time.slice(0,10))});
height_data.forEach((d,i) => {d.time = parseUTCDate(d.time.slice(0,10))});
systolicbp_data.forEach((d,i) => {
  d.time = parseUTCDate(d.time.slice(0,10));
  d.value2 = diastolicbp_data[i].value;
});
let bp_data = systolicbp_data;
hdl_data.forEach((d,i) => {
  d.time = parseUTCDate(d.time.slice(0,10));
  d.value2 = ldl_data[i].value;
});
let cholesterol_data = hdl_data;
triglycerides_data.forEach((d,i) => {d.time = parseUTCDate(d.time.slice(0,10))});

let unit_weight = weight_data[0].unit;
let unit_height = height_data[0].unit;
let unit_bp = bp_data[0].unit;
let unit_cholesterol = cholesterol_data[0].unit;
let unit_triglycerides = triglycerides_data[0].unit;
let bmi_data=[];
for(let i=0;i<weight_data.length;i++){
  bmi_data.push({
    time: weight_data[i].time,
    value: 10000*(+weight_data[i].value)/((+height_data[i].value)*(+height_data[i].value)),
  });
}

var extents_weight = d3.extent(weight_data, function(d){return +d.value});
var extents_height = d3.extent(height_data, function(d){return +d.value});
var extents_bmi = d3.extent(bmi_data, function(d){return +d.value});

var extents_bp = [200,0];
bp_data.forEach(d => {
  if(+d.value < extents_bp[0])
    extents_bp[0] = +d.value;
  if(+d.value2 < extents_bp[0])
    extents_bp[0] = +d.value2;
  if(+d.value > extents_bp[1])
    extents_bp[1] = +d.value;
  if(+d.value2 > extents_bp[1])
    extents_bp[1] = +d.value2;
})
var extents_cholesterol = [1000,0];
cholesterol_data.forEach(d => {
  if(+d.value < extents_cholesterol[0])
  extents_cholesterol[0] = +d.value;
  if(+d.value2 < extents_cholesterol[0])
  extents_cholesterol[0] = +d.value2;
  if(+d.value > extents_cholesterol[1])
  extents_cholesterol[1] = +d.value;
  if(+d.value2 > extents_cholesterol[1])
  extents_cholesterol[1] = +d.value2;
})
var extents_triglycerides = d3.extent(triglycerides_data, function(d){return +d.value});


let x_weight = d3.scaleTime().range([50,width-40]).domain(d3.extent(weight_data, function(d){return d.time}));
let y_weight = d3.scaleLinear().range([250,20]).domain([extents_weight[0]*0.9, extents_weight[1]*1.1]);
let x_height = d3.scaleTime().range([50,width-40]).domain(d3.extent(height_data, function(d){return d.time}));
let y_height = d3.scaleLinear().range([250,20]).domain([extents_height[0]*0.9, extents_height[1]*1.1]);
let x_bmi = d3.scaleTime().range([50,width-40]).domain(d3.extent(bmi_data, function(d){return d.time}));
let y_bmi = d3.scaleLinear().range([250,20]).domain([extents_bmi[0]*0.9, extents_bmi[1]*1.1]);
let x_bp = d3.scaleTime().range([50,width-40]).domain(d3.extent(bp_data, function(d){return d.time}));
let y_bp = d3.scaleLinear().range([250,20]).domain([extents_bp[0]*0.9, extents_bp[1]*1.1]);
let x_cholesterol = d3.scaleTime().range([50,width-40]).domain(d3.extent(cholesterol_data, function(d){return d.time}));
let y_cholesterol = d3.scaleLinear().range([250,20]).domain([extents_cholesterol[0]*0.9, extents_cholesterol[1]*1.1]);
let x_triglycerides = d3.scaleTime().range([50,width-40]).domain(d3.extent(triglycerides_data, function(d){return d.time}));
let y_triglycerides = d3.scaleLinear().range([250,20]).domain([extents_triglycerides[0]*0.9, extents_triglycerides[1]*1.1]);

updateDraw();

$('#submit').click(function(){
  let risk = 0;

  //bmi
  let bmi_risk = +bmi_data[0].value;
  if (bmi_risk >= 25 && bmi_risk < 30) risk += 0.06;
  if (bmi_risk >= 30 && bmi_risk < 40) risk += 0.08;
  if (bmi_risk >= 40) risk += 0.1;
  //trig
  let triglycerides_risk = +triglycerides_data[0].value;
  if (triglycerides_risk >= 151 && triglycerides_risk <= 200) risk += 0.05;
  if (triglycerides_risk > 200) risk += 0.1;
  // hdl
  let hdl_risk = +hdl_data[0].value;
  if (hdl_risk >= 40 && hdl_risk < 60) risk += 0.05;
  if (hdl_risk >= 60) risk += 0.1;
  // ldl
  let ldl_risk = +ldl_data[0].value;
  if (ldl_risk >= 100 && ldl_risk < 130) risk += 0.05;
  if (ldl_risk >= 130 && ldl_risk < 160) risk += 0.07;
  if (ldl_risk >= 160 && ldl_risk < 190) risk += 0.09;
  if (ldl_risk >= 190) risk += 0.1;
  // bp
  let sys_risk = +systolicbp_data[0].value;
  let dia_risk = +diastolicbp_data[0].value;
  if ((sys_risk >= 140 && sys_risk < 160) || (dia_risk >= 90 && dia_risk < 100)) risk += 0.07;
  if ((sys_risk >= 160 && sys_risk < 180) || (dia_risk >= 100 && dia_risk < 110)) risk += 0.08;
  if ((sys_risk >= 180 && sys_risk < 210) || (dia_risk >= 110 && dia_risk < 120)) risk += 0.09;
  if ((sys_risk >= 210) || (dia_risk >= 120)) risk += 0.1;

  if (document.getElementById('q1_yes').checked) {
    risk += 0.1;
  } else if (document.getElementById('q1_no').checked) {
  } else {
    alert('Please answer question#1');
    return;
  }

  if (document.getElementById('q2_yes').checked) {
  } else if (document.getElementById('q2_no').checked) {
    risk += 0.06;
  } else {
    alert('Please answer question#2');
    return;
  }

  if (document.getElementById('q3_yes').checked) {
    risk += 0.1;
  } else if (document.getElementById('q3_no').checked) {
    risk += 0.06;
  } else {
    alert('Please answer question#3');
    return;
  }
  
  if (document.getElementById('q4_1').checked) {
  } else if (document.getElementById('q4_2').checked) {
  } else if (document.getElementById('q4_3').checked) {
    if (patient_gender === 'female') risk += 0.1;
  } else if (document.getElementById('q4_4').checked) {
    risk += 0.1;
  } else {
    alert('Please answer question#4');
    return;
  }

  console.log('submit');
  alert("Your risk is "+(risk * 100).toFixed(2) + '%');
});

function updateDraw() {
  svg_height.selectAll('*').remove();
  svg_weight.selectAll('*').remove();
  svg_bmi.selectAll('*').remove();
  svg_bp.selectAll('*').remove();
  svg_cholesterol.selectAll('*').remove();
  svg_triglycerides.selectAll('*').remove();

  setTimeout(function(){
    x_weight.range([50,width-40]);
    x_height.range([50,width-40]);
    x_bmi.range([50,width-40]);
    x_bp.range([50,width-40]);
    x_cholesterol.range([50,width-40]);
    x_triglycerides.range([50,width-40]);

    //weight
    svg_weight.append('g').attr("class", "axis").attr("transform", "translate(0,250)")
    .call(d3.axisBottom(x_weight).tickFormat(d3.timeFormat("%Y-%m-%d")));
    svg_weight.append('g').attr("class", "axis").attr("transform", "translate(50,0)")
    .call(d3.axisLeft(y_weight));
    svg_weight.append('g').append('path').data([weight_data]).attr("class",'line').attr('d',d3.line().curve(d3.curveMonotoneX)
      .x(function(d){return x_weight(d.time)}).y(function(d){return y_weight(+d.value)}));
    svg_weight.append('g').append('text').attr("class", "unit").attr("x",50).attr("y",20)
    .text(unit_weight).attr('text-anchor','end').attr('dominant-baseline','ideographic')

    //height
    svg_height.append('g').attr("class", "axis").attr("transform", "translate(0,250)")
    .call(d3.axisBottom(x_height).tickFormat(d3.timeFormat("%Y-%m-%d")));
    svg_height.append('g').attr("class", "axis").attr("transform", "translate(50,0)")
    .call(d3.axisLeft(y_height));
    svg_height.append('g').append('path').data([height_data]).attr("class",'line').attr('d',d3.line().curve(d3.curveMonotoneX)
      .x(function(d){return x_height(d.time)}).y(function(d){return y_height(+d.value)}));
    svg_height.append('g').append('text').attr("class", "unit").attr("x",50).attr("y",20)
    .text(unit_height).attr('text-anchor','end').attr('dominant-baseline','ideographic')

    //bmi
    svg_bmi.append('g').attr("class", "axis").attr("transform", "translate(0,250)")
      .call(d3.axisBottom(x_bmi).tickFormat(d3.timeFormat("%Y-%m-%d")));
    svg_bmi.append('g').attr("class", "axis").attr("transform", "translate(50,0)")
      .call(d3.axisLeft(y_bmi));
    svg_bmi.append('g').append('line')
      .attr('x1', x_bmi(x_bmi.domain()[0])).attr('x2', x_bmi(x_bmi.domain()[1]))
      .attr('y1', y_bmi(30)).attr('y2', y_bmi(30))
      .attr('stroke', 'white').attr('stroke-opacity', 0.5).attr('stroke-dasharray',5,5);
    svg_bmi.append('g').append('path').data([bmi_data]).attr("class",'line').attr('d',d3.line().curve(d3.curveMonotoneX)
      .x(function(d){return x_bmi(d.time)}).y(function(d){return y_bmi(+d.value)}));
    svg_bmi.append('g').append('text').attr("class", "unit").attr("x",51).attr("y",y_bmi(30))
      .text('Over Weight').attr('text-anchor','start').attr('dominant-baseline','ideographic')

    //bp
    svg_bp.append('g').attr("class", "axis").attr("transform", "translate(0,250)")
    .call(d3.axisBottom(x_bp).tickFormat(d3.timeFormat("%Y-%m-%d")));
    svg_bp.append('g').attr("class", "axis").attr("transform", "translate(50,0)")
    .call(d3.axisLeft(y_bp));
    svg_bp.append('g').append('path').data([bp_data]).attr("class",'line').attr('d',d3.line().curve(d3.curveMonotoneX)
      .x(function(d){return x_bp(d.time)}).y(function(d){return y_bp(+d.value)}));
    svg_bp.append('g').append('path').data([bp_data]).attr("class",'line').attr('d',d3.line().curve(d3.curveMonotoneX)
      .x(function(d){return x_bp(d.time)}).y(function(d){return y_bp(+d.value2)}));
    svg_bp.append('g').append('text').attr("x",x_bp(+bp_data[0].time)).attr("y",y_bp(+bp_data[0].value))
      .text('Sys').attr('text-anchor','start').attr('dominant-baseline','middle').attr('fill','orange');
    svg_bp.append('g').append('text').attr("x",x_bp(+bp_data[0].time)).attr("y",y_bp(+bp_data[0].value2))
      .text('Dia').attr('text-anchor','start').attr('dominant-baseline','middle').attr('fill','orange');
    svg_bp.append('g').append('line')
      .attr('x1', x_bp(x_bp.domain()[0])).attr('x2', x_bp(x_bp.domain()[1]))
      .attr('y1', y_bp(90)).attr('y2', y_bp(90))
      .attr('stroke', 'white').attr('stroke-opacity', 0.5).attr('stroke-dasharray',5,5);
    svg_bp.append('g').append('line')
      .attr('x1', x_bp(x_bp.domain()[0])).attr('x2', x_bp(x_bp.domain()[1]))
      .attr('y1', y_bp(140)).attr('y2', y_bp(140))
      .attr('stroke', 'white').attr('stroke-opacity', 0.5).attr('stroke-dasharray',5,5);
    svg_bp.append('g').append('text').attr("class", "unit").attr("x",51).attr("y",y_bp(140))
      .text('High').attr('text-anchor','start').attr('dominant-baseline','ideographic')
    svg_bp.append('g').append('text').attr("class", "unit").attr("x",51).attr("y",y_bp(90))
      .text('Low').attr('text-anchor','start').attr('dominant-baseline','ideographic')
    svg_bp.append('g').append('text').attr("class", "unit").attr("x",50).attr("y",20)
      .text(unit_bp).attr('text-anchor','end').attr('dominant-baseline','ideographic')

    //bp
    svg_cholesterol.append('g').attr("class", "axis").attr("transform", "translate(0,250)")
    .call(d3.axisBottom(x_cholesterol).tickFormat(d3.timeFormat("%Y-%m-%d")));
    svg_cholesterol.append('g').attr("class", "axis").attr("transform", "translate(50,0)")
    .call(d3.axisLeft(y_cholesterol));
    svg_cholesterol.append('g').append('path').data([cholesterol_data]).attr("class",'line').attr('d',d3.line().curve(d3.curveMonotoneX)
      .x(function(d){return x_cholesterol(d.time)}).y(function(d){return y_cholesterol(+d.value)}));
    svg_cholesterol.append('g').append('text').attr("x",x_cholesterol(+cholesterol_data[0].time)).attr("y",y_cholesterol(+cholesterol_data[0].value))
      .text('HDL').attr('text-anchor','start').attr('dominant-baseline','middle').attr('fill','orange');
    svg_cholesterol.append('g').append('path').data([cholesterol_data]).attr("class",'line').attr('d',d3.line().curve(d3.curveMonotoneX)
      .x(function(d){return x_cholesterol(d.time)}).y(function(d){return y_cholesterol(+d.value2)}));
    svg_cholesterol.append('g').append('text').attr("x",x_cholesterol(+cholesterol_data[0].time)).attr("y",y_cholesterol(+cholesterol_data[0].value2))
      .text('LDL').attr('text-anchor','start').attr('dominant-baseline','middle').attr('fill','orange');

    svg_cholesterol.append('g').append('line')
      .attr('x1', x_cholesterol(x_cholesterol.domain()[0])).attr('x2', x_cholesterol(x_cholesterol.domain()[1]))
      .attr('y1', y_cholesterol(160)).attr('y2', y_cholesterol(160))
      .attr('stroke', 'white').attr('stroke-opacity', 0.5).attr('stroke-dasharray',5,5);
    svg_cholesterol.append('g').append('line')
      .attr('x1', x_cholesterol(x_cholesterol.domain()[0])).attr('x2', x_cholesterol(x_cholesterol.domain()[1]))
      .attr('y1', y_cholesterol(100)).attr('y2', y_cholesterol(100))
      .attr('stroke', 'white').attr('stroke-opacity', 0.5).attr('stroke-dasharray',5,5);
    svg_cholesterol.append('g').append('text').attr("class", "unit").attr("x",51).attr("y",y_cholesterol(160))
      .text('LDL - High').attr('text-anchor','start').attr('dominant-baseline','ideographic')
    svg_cholesterol.append('g').append('text').attr("class", "unit").attr("x",51).attr("y",y_cholesterol(100))
      .text('LDL - Low').attr('text-anchor','start').attr('dominant-baseline','ideographic')
    svg_cholesterol.append('g').append('line')
      .attr('x1', x_cholesterol(x_cholesterol.domain()[0])).attr('x2', x_cholesterol(x_cholesterol.domain()[1]))
      .attr('y1', y_cholesterol(60)).attr('y2', y_cholesterol(60))
      .attr('stroke', 'white').attr('stroke-opacity', 0.5).attr('stroke-dasharray',5,5);
    svg_cholesterol.append('g').append('line')
      .attr('x1', x_cholesterol(x_cholesterol.domain()[0])).attr('x2', x_cholesterol(x_cholesterol.domain()[1]))
      .attr('y1', y_cholesterol(40)).attr('y2', y_cholesterol(40))
      .attr('stroke', 'white').attr('stroke-opacity', 0.5).attr('stroke-dasharray',5,5);
    svg_cholesterol.append('g').append('text').attr("class", "unit").attr("x",51).attr("y",y_cholesterol(60))
      .text('HDL - High').attr('text-anchor','start').attr('dominant-baseline','ideographic')
    svg_cholesterol.append('g').append('text').attr("class", "unit").attr("x",51).attr("y",y_cholesterol(40))
      .text('HDL - Low').attr('text-anchor','start').attr('dominant-baseline','ideographic')
    svg_cholesterol.append('g').append('text').attr("class", "unit").attr("x",50).attr("y",20)
    .text(unit_cholesterol).attr('text-anchor','end').attr('dominant-baseline','ideographic')

    //triglycerides
    svg_triglycerides.append('g').attr("class", "axis").attr("transform", "translate(0,250)")
    .call(d3.axisBottom(x_triglycerides).tickFormat(d3.timeFormat("%Y-%m-%d")));
    svg_triglycerides.append('g').attr("class", "axis").attr("transform", "translate(50,0)")
    .call(d3.axisLeft(y_triglycerides));
    svg_triglycerides.append('g').append('path').data([triglycerides_data]).attr("class",'line').attr('d',d3.line().curve(d3.curveMonotoneX)
      .x(function(d){return x_triglycerides(d.time)}).y(function(d){return y_triglycerides(+d.value)}));
    svg_triglycerides.append('g').append('line')
      .attr('x1', x_triglycerides(x_triglycerides.domain()[0])).attr('x2', x_triglycerides(x_triglycerides.domain()[1]))
      .attr('y1', y_triglycerides(150)).attr('y2', y_triglycerides(150))
      .attr('stroke', 'white').attr('stroke-opacity', 0.5).attr('stroke-dasharray',5,5);
    svg_triglycerides.append('g').append('line')
      .attr('x1', x_triglycerides(x_triglycerides.domain()[0])).attr('x2', x_triglycerides(x_triglycerides.domain()[1]))
      .attr('y1', y_triglycerides(200)).attr('y2', y_triglycerides(200))
      .attr('stroke', 'white').attr('stroke-opacity', 0.5).attr('stroke-dasharray',5,5);
    svg_triglycerides.append('g').append('text').attr("class", "unit").attr("x",51).attr("y",y_triglycerides(200))
      .text('High').attr('text-anchor','start').attr('dominant-baseline','ideographic')
    svg_triglycerides.append('g').append('text').attr("class", "unit").attr("x",51).attr("y",y_triglycerides(150))
      .text('Low').attr('text-anchor','start').attr('dominant-baseline','ideographic')
    svg_triglycerides.append('g').append('text').attr("class", "unit").attr("x",50).attr("y",20)
    .text(unit_triglycerides).attr('text-anchor','end').attr('dominant-baseline','ideographic')

  }, 100);
}
// ^^^