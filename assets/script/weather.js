// let url = ("https://api.openweathermap.org/data/2.5/weather?q={city}&appid={e02a9a7f8d52c66794a09c113a6baca5}");
// console.log(url)

let enterCity = document.getElementById("enter-city");
let searchCity = document.getElementById("search-city");
const getCurrentData = (city) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e02a9a7f8d52c66794a09c113a6baca5&units=metric`)
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            var sunrise = new Date(response.sys.sunrise)
            var sunset = new Date(response.sys.sunset)
            document.querySelector(".current-temperature").innerText = Math.ceil(response.main.temp) + "°C";
            document.querySelector(".current-main").innerText = response.weather[0].main;
            document.querySelector(".sunrise-time").innerText = "Sunrise: " + sunrise.toLocaleTimeString();
            document.querySelector(".sunset-time").innerText = "Sunset: " + sunset.toLocaleTimeString();


        })
}
searchCity.addEventListener("click", () => {
    console.log(enterCity.value)

    getCurrentData(enterCity.value);
})

var time = new Date(1685925142)
var time1 = new Date(1685973508)
console.log(time.toLocaleTimeString(), "                                                       ", time1.toLocaleTimeString())