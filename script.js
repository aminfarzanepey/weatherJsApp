cityInput = document.getElementById("inputCity");
subBtn = document.getElementById("submitBtn");
cityName = document.getElementById("cityName");
cityDisc = document.getElementById("cityDicript");
degree = document.getElementById("degree");
wind = document.getElementById("wind");

const apiKey = "3045dd712ffe6e702e3245525ac7fa38";

async function GetWeather() {
    var weatherResult = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`)).json();
}



subBtn.addEventListener("click", GetWeather);