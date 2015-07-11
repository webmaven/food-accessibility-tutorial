<h1>ABQ Food Accessibility Tutorial</h1>

This tutorial is meant to follow the 'Guided Tour of Albuquerque’s Open Data.'  Missed the presentation? No problem. We got you.  <a href="https://drive.google.com/a/smallmelo.com/file/d/0B_RbR6rkbxiCTWd3TDZCU01IVnc/view?usp=sharing">Here.</a> <a href="https://drive.google.com/a/smallmelo.com/file/d/0B_RbR6rkbxiCTkduT3dDaDdKcFU/view?usp=sharing">And here.</a>

<p>In this tutorial we are going to be doing a comparison of food accessibility in low and high poverty neighborhoods.  We'll do this by by mapping out and performing analysis on point data (grocery stores from CABQ Open Data) and polygon data (poverty rates from CitySDK data).

<h2>Project Variations:</h2>
If you aren't interested in food accessibility and grocery stores, you can either pick a different  business category or you can use your own point data (in geojson form).  Likewise, if you aren't interested in poverty, you can select your own variable from the CitySDK data.  Lastly, this project isn't specific to Albuquerque, you can use data from anywhere!</p>

<h2>Workshop breakdown:</h2>
We'll complete this through 6 activities:
<ul>
<li>Activity 0 - (see below) Download project folder from Github
<li>Activity 1 - Setup your first web map
<li>Activity 2 - Put ABQ's grocery stores on the map
<li>Activity 3 - Use CitySDK to add Bernalillo County census block groups -(neighborhoods) to the map
<li>Activity 4 - Visualizing poverty in Bernalillo County
<li>Activity 5 - Calculate the percent of ABQ's grocery stores in high vs. low poverty neighborhoods and the average number of grocery stores in high vs. low poverty neighborhoods
</ul>

<h2>Assumptions I'm making about you:</h2>
<li>you have read/write access to a web server (maybe you don't actually need this?)
<li>you have access to a text editor
<li>you know how to store javascript in a separate file rather in your header/body tags (or excited about learning)
<li>you feel ok with jquery (or excited about learning)
<li>you feel ok with json, geojson (or excited about learning)
<li>you feel ok with ajax (or excited about learning)

<h1>Activity 0:  Getting setup</h2>

<h2>Download or fork this repo</h2>

Use the link above or <a href="https://github.com/Smallmelo/food-accessibility-workshop/archive/master.zip">click here</a>

<h3>Get familiar with the folder structure</h3>
<li>The project has a data folder, a js (javascript) folder, and a then a folder for each of the activities. 
<li> Each activity folder has a readme.md file with instructions that will walk you through that activity's steps.  View each activities by opening the particular folder on Github.
<li>The files in each activity's “FinishedCode” folders are an example of what your project might look like at at the end of that particular activity. 
<li>The js folder contains the libraries that will be used in activities 3-5. 
<li>The data folder contains the points (grocery store locations), the polygons (census data), and CABQ's business permits data (geocoded).



