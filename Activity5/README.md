<h1>Activity 5 - Analysis</h1>

<h2>Intro:</h2>
In this activity, we are going to do some analysis using <a href="http://turfjs.org/">Turf</a>.  Specifically, we'll be calculating:

<ul>
<li>% of our points that are in block groups that are above threshold
<li>% of our points that are in block groups that are below threshold
<li>Average number of points in block groups above threshold
<li>Average number of points in block groups below threshold
</ul>

<h3>What is Turf?</h3>
It is a js library that allows you to do front end spatial analysis

<h2>Getting to work:</h2>

Add the Turf library to your project.
<ul>**Hint: add to the header in your index file:</ul>

```
<!-- #5 add turf -->
<script src="http://api.tiles.mapbox.com/mapbox.js/plugins/turf/v1.4.0/turf.min.js"></script>
```

Count the number of points (grocery stores) in each of the block groups using the count method in Turf.  How does the count method work? You feed it point geojson, polygon geojson, and the column name you’d like to call the “count” of points in each polygon, and it returns the polygon geoson you gave it with an extra column for the number of points inside that polygon.


<ul>**Hint: add the following to your script.js file:</ul>

```
count = turf.count(data, groceryGeoJson, 'pt_count'); //activity 5: count the number of grocery stores and add as an attribute to blocks
```

Filter all of the block groups that don’t have grocery store in them using the remove method in Turf.  How does the remove method work?  You feed it geojson, the name of the column, and the value that the column must be equal to in order for that element to be deleted.

<ul>**Hint: add the following to your script.js file:</ul>

```
filtered = turf.remove(count, 'pt_count', 0);  //activity 5: get rid of all blocks that dont have a grocery store in them
```

<h3>Calculations:</h3>

Declare some variables to calculate your percents and averages.

<ul>**Hint: add the following to your script.js file before the census geojson gets created:</ul>

```
	var abovePointCount = 0;  //activity 5
	var abovePolygonCount = 0; //activity 5
	var belowPointCount = 0;  //activity 5
	var belowPolygonCount = 0; //activity 5

	var avgAbove = 0; //activity 5
	var avgBelow = 0; //activity 5

	var percentAbove = 0; //activity 5
	var percentBelow = 0; //activity 5
```

Get the total number of points (grocery stores) that are in blocks groups that are above/below the threshold (poverty) & the total number of polygons (block groups) that are above/below the threshold while the geojson is being created.


<ul>**Hint: add the following to your script.js file inside the style element of the success statement inside the ajax call:</ul>

```
   abovePolygonCount = abovePolygonCount  + 1; //activity 5
                          abovePointCount = abovePointCount + feature.properties.pt_count; //activity 5


belowPolygonCount = belowPolygonCount  + 1; //activity 5
                      belowPointCount = belowPointCount + feature.properties.pt_count; //activity 5
                      return {color: 'green'};

```

Calculate the average number of points (grocery stores) inside each of the the block groups categories (above, below)

<ul>**Hint: add the following to your script.js file immediately after the census geojson is added to the map:</ul>

```
avgAbove = Math.round(abovePointCount/abovePolygonCount);
avgBelow = Math.round(belowPointCount/belowPolygonCount);
```

Calculate the percentage of points (grocery stores) inside each of the the block groups categories (above, below)

<ul>**Hint: add the following to your script.js file immediately after above calculations:</ul>
```
percentAbove = Math.floor(100*abovePointCount/(abovePointCount + belowPointCount));
            percentBelow = Math.floor(100*belowPointCount/(abovePointCount + belowPointCount));
```

Display the results to the user in the results div element you created in activity 4.

<ul>**Hint: add the following to your script file:</ul>

```
//activity 5: display results
	      	$('#results').html("<ul><li>\"High poverty neighborhoods\" contain " + percentAbove + "% of ABQ's grocery stores and have an average of " + avgAbove + " stores in them</li><br><li>" + "\"Low poverty neighborhoods\" contain " + percentBelow + "% of ABQ's grocery stores and have an average of " + avgBelow + " stores in them.</li></ul>");

```


All done!!

<h3>Want to see the end product now?  Or are you stuck? </h3> Check out the FinishedCode folder for what your end product should look like.

<h2>Going further:</h2>
What else can we calculate?

