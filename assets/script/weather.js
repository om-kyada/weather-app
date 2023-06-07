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
                if (weather == "Rain") {
                    document.body.style.backgroundImage =
                        "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cac950bd-8f59-4376-8597-52366358d12e/d9wvf1t-b8eec3f5-b88b-4b1f-8aac-36bc21e06a92.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvY2FjOTUwYmQtOGY1OS00Mzc2LTg1OTctNTIzNjYzNThkMTJlXC9kOXd2ZjF0LWI4ZWVjM2Y1LWI4OGItNGIxZi04YWFjLTM2YmMyMWUwNmE5Mi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.WYDWFRtXw1BslrbVksftWlGdI6xCc0wHMhKMMx-NEuM')";
                } else if (weather == "Clouds") {
                    document.body.style.backgroundImage = "url(cloud.gif)"; // give proper url for the image or gif here
                } else if (weather == "Clear") {
                    document.body.style.backgroundImage =
                        "url('https://image.freepik.com/free-photo/panorama-sky-sunrise-sunset-beautiful-view-dark-blue-clouds-lit-by-bright-orange-yellow-sun-clear-sky-beauty-power-nature-meteorology-climate-changing-concept_127089-8097.jpg')";
                } else if (weather == "Haze") {
                    document.body.style.backgroundImage =
                        "url(https://www.pixelstalk.net/wp-content/uploads/2016/06/Dark-Woods-HD-Wallpaper.jpg)";
                } else {
                    document.body.style.backgroundImage = "url(background.gif)";  // give proper url for the image or gif here
                }
            }

            backgroundChange(document.querySelector(".current-main").innerText);
            document.querySelector(".sunrise-time").innerText = "Sunrise: " + sunrise.toLocaleTimeString();
            document.querySelector(".sunset-time").innerText = "Sunset: " + sunset.toLocaleTimeString();
            document.querySelector(".location").innerText = "Location: " + response.name;
            document.querySelector(".weather-min-temp span").innerText = Math.ceil(response.main.temp_min);
            document.querySelector(".weather-max-temp span").innerText = Math.ceil(response.main.temp_max);
            document.querySelector(".weather-humidity span").innerText = Math.ceil(response.main.humidity) + "%";
            document.querySelector(".wind-speed span").innerText = Math.ceil(response.wind.speed) + " km/h";
            document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;

        })
}
searchCity.addEventListener("click", () => {
    getCurrentData(enterCity.value);
})
enterCity.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        getCurrentData(enterCity.value);
    }
    return false;
});

