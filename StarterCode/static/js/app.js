// Start Code //
// Step 1: define init() function: this contains instructions at page load/refresh
// Note: this function does not run until called
function init(){
  // Note: the next line checks that our initial function runs.
  console.log("The Init() function ran")

  // Our code will run once (only on page load or refresh - after the init() function has been called):

  // Step 2: Create a dropdown/select
  const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
  d3.json(url).then(data =>{

    // Step 3: Only need extract the names (ids) for the dropdown. Assign the array to a variable
    // We can check if this is the correct data before by uncommenting next line: 
    // console.log(data.names)
    let dropdownNames = data.names;
    // Step 4: Use d3 to select the html element where the dropdown will be located
    let dropdown = d3.select('#selDataset');

    // Step 5: loop through the whole array to obtain the ids and append to the dropdown menu
    for (i=0; i<dropdownNames.length; i++){
      dropdown.append("option").text(dropdownNames[i]).property('value',dropdownNames[i])
    };
  });
  // Step 6: run the functions that will generate plots with default id = 940
  createScatter('940')
  createBar('940')
  createSummary('940')
};

// Step 7: Define a function that runs whenever the selected id in the dropdown is changed
// Note: this function is written in the HTML and is called with an input called 'this.value'
// 'this.value' comes from the select element (the dropdown)
function optionChanged(newID){
  // Step 8: create a code that updates graphics
  // Note: one (this) way is to recall each function
  createScatter(newID)
  createBar(newID)
  createSummary(newID)
};

// Step 9: Define the function that creates the bubble chart with the selected id in the dropdown
function createScatter(id){
  // Step 10: code that makes scatter plot at id='bubblediv'
  const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
  d3.json(url).then(data => {
    let idData = data.samples.filter(i => i.id == id)
    console.log(idData[0])
    let otuIds = idData[0].otu_ids
    let otuLabels = idData[0].otu_labels
    let sampleValues = idData[0].sample_values

    let scatterData = [
      {
        y: sampleValues,
        x: otuIds,
        text: otuLabels,
        type: 'scatter',
        mode: 'markers',
        marker: {
          size: sampleValues,  // Use the sample values for the size
                sizemode: 'diameter', // Set the size mode to 'diameter'
                sizeref: 1.5, // Adjust this value to control the bubble size scaling
                sizemin: 1, // Set the minimum size of the bubbles
                color: otuIds, // Optionally, you can also assign colors based on otuIds
                colorscale: 'YlGnBu' // Set the color scale
                }
      }
    ];

    let layout = {
      title: "All OTUs - My Bellybutton Bacteria",
      xaxis: {
        title: "OTU ID"
      },
      yaxis: {
        title: "Sample Values"
      }
    };

    Plotly.newPlot("bubblediv", scatterData, layout);
    });
  // Note: next line checks the function is running.
  // console.log(`This function generates scatter plot of ${id} `)
}

// Step 11: Define the function that creates the bar chart with the selected id in the dropdown
function createBar(id){
  // Step 12: code that makes bar chart at id='bardiv'
  const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
  d3.json(url).then(data =>{
    let idData = data.samples.filter(i => i.id == id) 
    // console.log(idData[0])
    // console.log(idData[0].sample_values.slice(0,10).reverse())
    let otuIds = idData[0].otu_ids.slice(0,10)
    let otuLabels = idData[0].otu_labels.slice(0,10)
    let sampleValues = idData[0].sample_values.slice(0,10)
    let otuIds_text = otuIds.map(i => `OTU ${i}`)
    let chartData = [
      {
        y: otuIds_text.reverse(),
        x: sampleValues.reverse(),
        text: otuLabels.reverse(),
        type: 'bar',
        orientation: 'h'
      }
    ];

    let layout = {
      title: "My top 10 OTUs - bellybutton bacteria"
    };
      
    Plotly.newPlot("bardiv", chartData, layout);
  });
  // Note: next line checks the function is running.
  // console.log(`This function generates bar chart of ${id} `)
};
// Step 13: Define the function that creates the summary of the selected id in the dropdown
function createSummary(id){
  // Step 14: code that makes list, paragraph, text/linebreaks at id='sample-meta'
  const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
  d3.json(url).then(data =>{
      let idData = data.metadata.filter(i => i.id == id)
      console.log(idData[0])
      let demographics = d3.select('#sample-metadata');

      demographics.html("")
      demographics.append("p").text(`ID: ${idData[0].id}`)
      demographics.append("p").text(`Ethnicity: ${idData[0].ethnicity}`)
      demographics.append("p").text(`Gender: ${idData[0].gender}`)
      demographics.append("p").text(`Age: ${idData[0].age}`)
      demographics.append("p").text(`Location: ${idData[0].location}`)
      demographics.append("p").text(`Bbtype: ${idData[0].bbtype}`)
      demographics.append("p").text(`Wfreq: ${idData[0].wfreq}`)
  });
  // Note: next line checks the function is running.
  // console.log(`This function generates summary info of ${id} `)
};
// Step 15: Call init function, to run the instructions
// Note: this function runs only on load and refresh of browser page
init()