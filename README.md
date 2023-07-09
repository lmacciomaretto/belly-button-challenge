# belly-button-challenge
This is the repo for Assignment #14: Belly-Button Challenge with JS

The code will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Inside this repository is a folder named BellyButton_Code, containing the index.html script for the dashboard, and 2 folders, named "static" and "data". Static holds the "js" folder with the script app.json inside of it. Data holds the samples.json file used for this analysis.

This repository:
1. Uses the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

2. Creates a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

![barchart](https://github.com/lmacciomaretto/belly-button-challenge/assets/126762600/39c24b6f-ad97-49bc-9845-4c7f273800e3)

3. Creates a bubble chart that displays each sample's OTUs

![bubblechart](https://github.com/lmacciomaretto/belly-button-challenge/assets/126762600/66220648-41c6-42b1-ba92-b3926539e898)

4. Displays the sample metadata, i.e., an individual's demographic information.
![dashboard_summary](https://github.com/lmacciomaretto/belly-button-challenge/assets/126762600/e7c89fdc-611f-4e0f-a4a2-99283d3d89e3)

5. Updates all the plots when a new sample is selected
![dashboard_summary_dropdownmenu](https://github.com/lmacciomaretto/belly-button-challenge/assets/126762600/643b67c4-1b2d-4d3b-984b-817d30b7563c)

### References

Hulcr, J. et al. (2012) *A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable*. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)used statistical measures like mean, median, variance, standard deviation, and SEM. We determined boundaries to find outliers in our data.

Plots in this script: Bar plot and Scatter (Bubble) plots.

The code was written based on class files, D3, JavaScript, and HTML documentation, and with the help of TA Erin Williams.
