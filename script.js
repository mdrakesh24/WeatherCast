
const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const api_key = '4fbe35ff48db9d833d16bf4a4779f22b';


const getWeather = (city) =>{
	cityName.innerHTML = city
	fetch(`${url}${city}&appid=${api_key}&units=metric&lang=en`)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		cloud_pct.innerHTML = response.clouds.all
		temp.innerHTML = response.main.temp
		feels_like.innerHTML = response.main.feels_like
		humidity.innerHTML = response.main.humidity
		min_temp.innerHTML = response.main.temp_min
		max_temp.innerHTML = response.main.temp_max
		wind_speed.innerHTML = response.wind.speed
		wind_degrees.innerHTML = response.wind.deg
		sunrise.innerHTML = response.sys.sunrise
		sunset.innerHTML = response.sys.sunset
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault();
	getWeather(city.value);
});

getWeather("Kolkata");

const getWeatherlondon = (city) =>{
	fetch(`${url}${city}&appid=${api_key}&units=metric&lang=en`)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)
		lontemp.innerHTML = response.main.temp
		lonhumidity.innerHTML = response.main.humidity
		lonwind_speed.innerHTML = response.wind.speed
	})
	.catch(err => console.error(err));
}

getWeatherlondon("London");

const getWeathercal = (city) =>{
	fetch(`${url}${city}&appid=${api_key}&units=metric&lang=en`)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)
		caltemp.innerHTML = response.main.temp
		calhumidity.innerHTML = response.main.humidity
		calwind_speed.innerHTML = response.wind.speed
	})
	.catch(err => console.error(err));
}

getWeathercal("California");

const getWeathersyd = (city) =>{
	fetch(`${url}${city}&appid=${api_key}&units=metric&lang=en`)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)
		sydtemp.innerHTML = response.main.temp
		sydhumidity.innerHTML = response.main.humidity
		sydwind_speed.innerHTML = response.wind.speed
	})
	.catch(err => console.error(err));
}

getWeathersyd("Sydney");

const getWeatherkol = (city) =>{
	fetch(`${url}${city}&appid=${api_key}&units=metric&lang=en`)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)
		koltemp.innerHTML = response.main.temp
	})
	.catch(err => console.error(err));
}

getWeatherkol("Kolkata");

const getWeatherdel = (city) =>{
	fetch(`${url}${city}&appid=${api_key}&units=metric&lang=en`)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)
		deltemp.innerHTML = response.main.temp
	})
	.catch(err => console.error(err));
}

getWeatherdel("Delhi");

const getWeathermum = (city) =>{
	fetch(`${url}${city}&appid=${api_key}&units=metric&lang=en`)
	.then(response => response.json())
	.then(response => {
		
		console.log(response)
		mumtemp.innerHTML = response.main.temp
	})
	.catch(err => console.error(err));
}

getWeathermum("Mumbai");