<h1>Activity 4 - Visualizing poverty differences in Bernalillo County</h1>

<h2>Intro:</h2>

In this activity we are going to color code the census block using a threshold value on the poverty rate.

Anything above the threshold will be red, anything below: green.

<h2>Getting to work:</h2>

Add a results div element in your index.html file to view the analysis results for step 5.

<ul>**Hint: add to the index.html file:</ul>

```
<div id="results"></div> <!-- activity 4: add the results div tag -->
```

Style that results div.

<ul>**Hint: add the following to your style.css file:

```
#results{
		float: left;
		width: 30%;
		padding-left: 20px;
	}
```

Add a style element to the success statement of your geojson creation that changes the color based on a threshold value.  

ul>**Hint: add inside the success statement before the onEachFeature:</ul>

```
  		style: function (feature) {
		  		if ((feature.properties.poverty)/(feature.properties.population) > threshold) {
		  				return {color: 'red'};
		  		}
		  		else {
		  			return {color: 'green'};
		  			
		  		}
        
    	},

```
Create a variable for change the threshold value.  

ul>**Hint: add above the ajax call added in activity 3:</ul>

```
var threshold = 0.15;
```

<h3>Want to see the end product now?  Or are you stuck? </h3> Check out the FinishedCode folder for what your end product should look like.

<h2>Going further:</h2>
Change your threshold value to see what changes on the map!