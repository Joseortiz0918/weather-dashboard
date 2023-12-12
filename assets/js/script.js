var apiKey = "3723571894b255f187674886d84d9da2"
var requestCurrent = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + apiKey
var requestWeather = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=" + apiKey;
var requestLocation = "https://api.openweathermap.org/geo/1.0/direct?limit=1&appid=" + apiKey + "&";


var searchBtn =document.getElementById("searchBtn");
var searchText =document.getElementById("searchText");
var forecast =document.getElementById("forecast");
var cityName =document.getElementById("cityName");
var date =document.getElementById("date");
var temp =document.getElementById("temp");
var wind =document.getElementById("wind");
var humidity =document.getElementById("humidity");
var fiveDayForecast =document.getElementById("5DayForecast");


function (param) {  }