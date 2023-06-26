let enterCity = document.getElementById("enter-city");
let searchCity = document.getElementById("search-city");
const getCurrentData = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}e02a9a7f8d52c66794a09c113a6baca5&units=metric`)
        .then((response) => response.json())
        .then((response) => {
            var sunrise = new Date(response.sys.sunrise)
            var sunset = new Date(response.sys.sunset)
            document.querySelector(".current-temperature").innerText = Math.ceil(response.main.temp) + "°C";
            document.querySelector(".current-main").innerText = response.weather[0].main;
            document.querySelector(".sunrise-time").innerText = "Sunrise: " + sunrise.toLocaleTimeString();
            document.querySelector(".sunset-time").innerText = "Sunset: " + sunset.toLocaleTimeString();
            document.querySelector(".location").innerText = "Location: " + response.name;
            document.querySelector(".weather-min-temp span").innerText = Math.ceil(response.main.temp_min);
            document.querySelector(".weather-max-temp span").innerText = Math.ceil(response.main.temp_max);
            document.querySelector(".weather-humidity span").innerText = Math.ceil(response.main.humidity) + "%";
            document.querySelector(".wind-speed span").innerText = Math.ceil(response.wind.speed) + " km/h";
        })
}
searchCity.addEventListener("click", () => {
    getCurrentData(enterCity.value);
})