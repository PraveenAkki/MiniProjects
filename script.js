const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'abff027061mshbccd6d91fb66fc8p113591jsn67764540c04c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city

	fetch(url + encodeURIComponent(city), options)
	.then(response=>response.json())
	.then(response=>{
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		mintemp.innerHTML = response.min_temp
		maxtemp.innerHTML = response.max_temp
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		feels.innerHTML = response.feels_like
		winddeg.innerHTML = response.wind_degrees
		windspeed.innerHTML = response.wind_speed
		windspeed2.innerHTML = response.wind_speed
		console.log(response)
		console.log(city)
	})
	.catch(err=>console.error(err));
	
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

// Attributes:-
// feels_like
// humidity
// max_temp
// min_temp
// sunrise
// sunset
// temp
// wind_degrees
// wind_speed