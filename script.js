const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f8f675e88msh7253e113d39c1c7p197cfcjsn74597b0657a2',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) =>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault();
	getWeather(city.value);
});

getWeather("Kolkata");

const getWeatherlondon = (city) =>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)
		lontemp.innerHTML = response.temp
		lonhumidity.innerHTML = response.humidity
		lonwind_speed.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));
}

getWeatherlondon("London");

const getWeathercal = (city) =>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)
		caltemp.innerHTML = response.temp
		calhumidity.innerHTML = response.humidity
		calwind_speed.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));
}

getWeathercal("California");

const getWeathersyd = (city) =>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)
		sydtemp.innerHTML = response.temp
		sydhumidity.innerHTML = response.humidity
		sydwind_speed.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));
}

getWeathersyd("Sydney");

const getWeatherkol = (city) =>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)
		koltemp.innerHTML = response.temp
	})
	.catch(err => console.error(err));
}

getWeatherkol("Kolkata");

const getWeatherdel = (city) =>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)
		deltemp.innerHTML = response.temp
	})
	.catch(err => console.error(err));
}

getWeatherdel("Delhi");

const getWeathermum = (city) =>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)
		mumtemp.innerHTML = response.temp
	})
	.catch(err => console.error(err));
}

getWeathermum("Mumbai");