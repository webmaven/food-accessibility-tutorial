// Activity #4

$(document).ready(function() {


	// Activity 1

	var map = L.map('map').setView([35.104602, -106.628414], 11);

	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	    attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a>',
	    maxZoom: 18,
	   
	}).addTo(map);


	// Activity 2

	var url = "../../data/retail_grocery.geojson";
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


	var threshold = 0.25;	//activity 4

	var url = "../../data/census.geojson";
	
	$.ajax({
	    url: url,
	    dataType: 'json',
	    success: function (data) {
	    	blockCount = data.features.length;
	    	geojson = new L.GeoJSON(data, {

	    	/////// Activity 4 - add the style	element
	    		style: function (feature) {
		  		if ((feature.properties.poverty)/(feature.properties.population) > threshold) {
		  				return {color: 'red'};
		  		}
		  		else {
		  			return {color: 'green'};
		  			
		  		}
        
    	},

    	////////
	    		onEachFeature: function(feature, layer){
	    			layer.bindPopup("poverty: " + Math.floor(100*parseInt(feature.properties.poverty)/(feature.properties.population)) + "%");


	    		}
	    	});

	    	geojson.addTo(map);
	
	    }

	    
	});

	//// the end section you'd replace if making the call directly to the citySDK servers

	   


});


