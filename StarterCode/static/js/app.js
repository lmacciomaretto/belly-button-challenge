// Start Code by LMM //
// Get the endpoint
const dataurl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(dataurl).then(function(data) {
  console.log(data);
});

var data = [{
  type: 'bar',
  values: data.sample_values,
  labels: data.otu_ids,
  orientation: 'h'
}];

Plotly.newPlot('bar', data);