let enterCity = document.getElementById("enter-city");
let searchCity = document.getElementById("search-city");
const getCurrentData = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e02a9a7f8d52c66794a09c113a6baca5&units=metric`)
        .then((response) => response.json())
        .then((response) => {
            var sunrise = new Date(response.sys.sunrise)
            var sunset = new Date(response.sys.sunset)
            document.querySelector(".current-temperature").innerText = Math.ceil(response.main.temp) + "°C";

            document.querySelector(".current-main").innerText = response.weather[0].main;
            function backgroundChange(weather) {
                if (weather === "Clouds") {
                    document.querySelector(".weather-container").style.cssText = ` background : url(../assets/images/cloud.jpg);    background-repeat: no-repeat;
                    background-size: cover;`;
                    // var clear = new Audio('../assets/audio/natural-thunder.mp3');
                    // clear.loop = true;
                    // clear.play();
                } else if (weather === "Clear") {
                    document.querySelector(".weather-container").style.cssText = `background:url('../assets/images/clear.jpg');    background-repeat: no-repeat;
                    background-size: cover;`
                }
                else if (weather === "Haze") {
                    document.querySelector(".weather-container").style.cssText = `background:url('../assets/images/haze.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;`
                } else if (weather === "Rain") {
                    document.querySelector(".weather-container").style.cssText = `background:url('../assets/images/rain.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;`
                } else if (weather === "Snow") {
                    document.querySelector(".weather-container").style.cssText = `background:url('../assets/images/snow.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;`
                } else if (weather === "Thunderstorm") {
                    document.querySelector(".weather-container").style.cssText = `background:url('../assets/images/thunderstorm.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;`
                }
            }
            backgroundChange(document.querySelector(".current-main").innerHTML);

            document.querySelector(".sunrise-time").innerText = "Sunrise: " + sunrise.toLocaleTimeString();
            document.querySelector(".sunset-time").innerText = "Sunset: " + sunset.toLocaleTimeString();
            document.querySelector(".location").innerText = "Location: " + response.name;
            document.querySelector(".weather-min-temp span").innerText = Math.ceil(response.main.pressure);
            document.querySelector(".weather-max-temp span").innerText = response.visibility;
            document.querySelector(".weather-humidity span").innerText = Math.ceil(response.main.humidity) + "%";
            document.querySelector(".wind-speed span").innerText = Math.ceil(response.wind.speed) + " km/h";
            document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;

        })
}
searchCity.addEventListener("click", () => {
    getCurrentData(enterCity.value);
    // backgroundChange(document.querySelector(".current-main").innerHTML);
})
enterCity.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        getCurrentData(enterCity.value);
    }
    return false;
});

// var clear = new Audio('../assets/audio/clear.mp3');
// clear.loop = true;
// clear.play();
// console.log(clear)