// Start Code by LMM //
// Get the endpoint
const dataurl = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
let mydata = d3.json(dataurl).then(function(mydata) {
  console.log(mydata);
});

// Initialize all the graphs that will be populated later
function init() {
  // Dropdown menu
  let dropdownMenu = d3.select("#selDataset");

  // Assign the ids to the dropdown menu
  d3.json(dataurl).then((mydata) => {
    // Create a variable to hold the "names"
    let subjectNo = mydata.names;
    
    // Append to the menu
    subjectNo.forEach((id) => {
      
      // Log the key for each value
      console.log(id);
      
      dropdownMenu.append("option")
      .text(id)
      .property("value",id);
    });

    // Select one datapoint to build the graph functions
    let datapoint = mydata.names[0]; 

    // Create graph functions
    metadataPanel(datapoint);
    barChart(datapoint);
    gaugeChart(datapoint);
    bubbleChart(datapoint);
  });

  // Create the metadata variable
  let metaData = mydata.metaData;
  
  // Create the metadata panel function
  function metadataPanel(metaData) {
    for (let i = 0; i < metaData.length; i++) {
      let summaryData = {"id:" metaData.id,
                          "ethnicity": metaData.ethnicity,
                          "gender": i.gender,
                          "age": i.age,
                          "location": i.location,
                          "bbtype": i.bbtype,
                          "wfreq": i.wfreq
      };
      
      // // Display data in element
      // if subjectNo.id === i.id => {
      //   d3.select("#sample-metadata").append("h5").text(`$summaryData`);
      // }
      return summaryData;
    };
  };
  
};
// var data = [{
//   type: "bar",
//   values: data.sample_values,
//   labels: data.otu_ids,
//   orientation: "h"
// }];

// Plotly.newPlot('bardiv', data);


// Append values to the menu

init();