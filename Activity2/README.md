<h1>Activity 2 - Put ABQ’s grocery stores on the map</h1>
<h2>Intro:</h2>

In this activity, we'll continue using <a href="http://leafletjs.com/">Leaflet</a> to add a grocery store geojson layer onto your Open Street Map basemap.

The grocery store dataset weas pre-processed (called 'retail_grocery.geojson' in the data folder) for you by taking the following steps:
<ul>
<li>Downloaded the business permits from the <a href="http://www.cabq.gov/abq-data/">city site</a>
<li>Open the data and filtered for grocery stores
<li>Geocoded 
<li><a href="http://togeojson.com/">Converted</a> to geojson 
</ul>

<h3>Wondering how a grocery store was defined?</h3>

The <a href="http://data.cabq.gov/business/busregistration/MetaData.pdf">metadata</a> was reviewed to understand the DESCRIPTION and STATUS columns.  The following requirements were set in order for a business to be a grocery store:
<ul><li>STATUS had to be an active business
<li>DESCRIPTION  had to be 'Retail-Grocery'
</ul>


<h2>Getting to work:</h2>

We'll make an ajax call to display the grocery stores, create a geojson layer from the result, and add the layer to our map.

<ul>**Hint: add the following code to your script.js file:</ul>

```
    var url = "../../data/retail_grocery.geojson";
    $.ajax({
        url: url,
        dataType: 'json',
        success: function (data) {
            groceryGeoJson = data;

            geojson = new L.GeoJSON(data, {

                onEachFeature: function(feature, layer){
                    layer.bindPopup(feature.properties.Name);

                }
            });
            geojson.addTo(map);

        }

    });
```

<h3>Want to see the end product now?  Or are you stuck? </h3> Check out the FinishedCode folder for what your end product should look like.

<h2>Going further:</h2>
<ul><li>Use the Chrome dev tools to look at the attributes of the grocery stores and add other attributes to the popups
<li>Think you can define a grocery store better?  Not interested in grocery stores?  Use the raw-ish data to define your own dataset and pre-process it using the steps under ("Grocery stores were pre-rendered for you”)
<li>Marker style offend you?  Make a custom one
</ul>



