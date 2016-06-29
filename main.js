var apiKey = "7da3aefac316b92615bb35ec67dbd21b" ;
var city = "moscow";


$(document).ready(function() {
	$("body").css("display","none").fadeIn("slow");	
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?apikey="+apiKey+"&q="+city+"&units=metric", function(json) {
		var temp = -2;
		var city = json.name;
		var icon = json.weather[0].icon;
		
		// view
		$("#city_name").html(city);
		$("#weather_output").html(plus_sign(temp) + Math.round(temp) +"&nbsp;&deg;C");

	});   
})

function plus_sign(t){
	if (t>0)
		return "+";
	return "";
};
