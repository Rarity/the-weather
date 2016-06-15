var apiKey = "7da3aefac316b92615bb35ec67dbd21b" ;
var city = "moscow";


$(document).ready(function() {
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?apikey="+apiKey+"&q="+city+"&units=metric", function(json) {
		var temp = json.main.temp;
		var city = json.name;
		var icon = json.weather[0].icon;

		$("#weather_output").html("<span class='temp'>"+ plus_sign(temp) + Math.round(temp) + "</temp><br>" +
			'<img src="http://openweathermap.org/img/w/'+icon+'.png">'
			);
	});   
})

function plus_sign(t){
	if (t>0){
		return "+";
	}
	return "";
};
