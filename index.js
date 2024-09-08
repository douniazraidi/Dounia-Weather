const cityName = document.getElementById('city');
const temprature = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const weatherIcon = document.getElementById('icon');


const API_KEY = '7b628d0b115561e41df1a3f47cc4c769';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';


const icons = {
    Clear: 'images/clear.png',
    Clouds: 'images/clouds.png',
    Drizzle: 'images/drizzle.png',
    Mist: 'images/mist.png',
    Rain: 'images/rain.png',
    Snow: 'images/snow.png',
}

async function checkWeather(city) {
    const response = await fetch(
        `${API_URL}q=${city}&units=metric&appid=${API_KEY}`
    );

    const data = await response.json();
    
    if(data.cod == 404){
        document.getElementById('error-message').style.display = 'block';
    }
    else{
        weatherIcon.setAttribute('src', 
            icons[data.weather[0].main]
        );

        document.getElementById('error-message').style.display = 'none';
        cityName.innerText = data.name;
        temprature.innerText = data.main.temp;
        humidity.innerText = data.main.humidity + "%";
        windSpeed.innerText = data.wind.speed + " Km/h";
    
        document.getElementById('results').style.display = 'flex';
    }
}


const form = document.getElementById('search');
const input = document.getElementById('search-input');

form.addEventListener("submit", event =>{
    event.preventDefault();
    checkWeather(input.value);
});


