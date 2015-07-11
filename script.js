// Activity #5

$(document).ready(function() {


	// Activity 1

	var map = L.map('map').setView([35.104602, -106.628414], 11);

	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a>',
	    maxZoom: 18,
	   
	}).addTo(map);


	// Activity 2

	var url = "data/retail_grocery.geojson";
	var groceryGeoJson, tractGeoJson;
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

		// Activity 3 - see the alternate_citysdk_ajax _call.js for the request used to grab the census.geojson data below


	var threshold = 0.40;	//activity 4

	var abovePointCount = 0;  //activity 5
	var abovePolygonCount = 0; //activity 5
	var belowPointCount = 0;  //activity 5
	var belowPolygonCount = 0; //activity 5

	var avgAbove = 0; //activity 5
	var avgBelow = 0; //activity 5

	var percentAbove = 0; //activity 5
	var percentBelow = 0; //activity 5

	var url = "data/census.geojson";
	
	$.ajax({
	    url: url,
	    dataType: 'json',
	    success: function (data) {
	    	blockCount = data.features.length;
	    	count = turf.count(data, groceryGeoJson, 'pt_count'); //activity 5: count the number of grocery stores and add as an attribute to blocks
	    	filtered = turf.remove(count, 'pt_count', 0);  //activity 5: get rid of all blocks that dont have a grocery store in them
	    	geojson = new L.GeoJSON(filtered, {

	    	/////// Activity 4 - add the style	element
	    		style: function (feature) {
		  			if ((feature.properties.poverty)/(feature.properties.population) > threshold) {
		  				abovePolygonCount = abovePolygonCount  + 1; //activity 5
		  				abovePointCount = abovePointCount + feature.properties.pt_count; //activity 5
		  				return {color: 'red'};
		  		}
		  		else {
		  			belowPolygonCount = belowPolygonCount  + 1; //activity 5
		  			belowPointCount = belowPointCount + feature.properties.pt_count; //activity 5
		  			return {color: 'green'};
		  			
		  		}
        
    	},
    	////////
	    		onEachFeature: function(feature, layer){
	    			layer.bindPopup("poverty: " + Math.floor(100*parseInt(feature.properties.poverty)/(feature.properties.population)) + "%");

	    		}
	    	});
	    	geojson.addTo(map);
	    	
	    	//Activity 5 - Calculate the average number of points (grocery stores) in each of the block group categories (above, below threshold)
	    	avgAbove = Math.round(abovePointCount/abovePolygonCount);
	    	avgBelow = Math.round(belowPointCount/belowPolygonCount);

	    	//Activity 5 - Calculate the percent of grocery stores in each of the block group categories (above, below threshold)
	    	percentAbove = Math.floor(100*abovePointCount/(abovePointCount + belowPointCount));
	    	percentBelow = Math.floor(100*belowPointCount/(abovePointCount + belowPointCount));


	    	//activity 5: display results
	      	$('#results').html("<ul><li>\"High poverty neighborhoods\" contain " + percentAbove + "% of ABQ's grocery stores and have an average of " + avgAbove + " stores in them</li><br><li>" + "\"Low poverty neighborhoods\" contain " + percentBelow + "% of ABQ's grocery stores and have an average of " + avgBelow + " stores in them.</li></ul>");

	    }

	    
	});

	//// the end section you'd replace if making the call directly to the citySDK servers

	   


});

