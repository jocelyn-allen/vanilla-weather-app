function displayTemperature(response) {
console.log(response.data.wind.speed);
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
}



let apiKey = "7f0e26ebcc0056eeecaacb8107edefb1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Liverpool&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);