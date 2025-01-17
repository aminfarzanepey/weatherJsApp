const cityInput = document.getElementById("inputCity");
const subBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const cityDisc = document.getElementById("cityDicript");
const degree = document.getElementById("degree");
const wind = document.getElementById("wind");

const apiKey = "3045dd712ffe6e702e3245525ac7fa38";

async function GetWeather() {
    var weatherResult = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}`)).json();
    setInfo(weatherResult);
}

function setInfo(data) {
    var city = data["name"];
    var description = data["weather"][0]["description"];
    var temp = data["main"]["temp"];
    var windSpeed = data["wind"]["speed"];

    cityName.innerHTML = `${city}  :شهر`;
    cityDisc.innerHTML = `${description}   :وضعیت`;
    degree.innerHTML = `${convertToCel(temp)} c  :دما`;
    wind.innerHTML = `${windSpeed} km/h  :سرعت باد`;
}

function convertToCel(value) {
    return (value - 273).toFixed();
}

subBtn.addEventListener("click", GetWeather);