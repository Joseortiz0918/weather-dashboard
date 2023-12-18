var apiKey = "&appid=4f0caa1e03b1114f7e2701c7497f9f55";
var requestCurrent =
  "https://api.openweathermap.org/data/2.5/forecast?"+
  apiKey;
var requestWeather =
  "https://api.openweathermap.org/data/2.5/forecast?units=imperial" +
  apiKey+"&";
var requestLocation =
  "http://api.openweathermap.org/geo/1.0/direct?&limit=5"+ apiKey +'&q=';

var searchBtn = document.getElementById("searchBtn");
var searchText = document.getElementById("searchText");
var forecast = document.getElementById("forecast");
var cityName = document.getElementById("cityName");
var date = document.getElementById("date");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var fiveDayForecast = document.getElementById("5DayForecast");

function searchCity(city){
  var requestCity= requestLocation + city
  fetch(requestCity)
  .then(function(response){
    return response.json()
  
  })
  .then(function(data){
    var lon= data[0].lon
    var lat= data[0].lat
    console.log(lon)
    console.log(lat)
    searchForecast(lon,lat)
  })

  
}

function searchForecast(lon,lat){
  var requestCity = requestCurrent + "&lon="+lon + "&lat="+lat
  fetch(requestCity)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data)
  })

}


// function to make search form equal search text on click. if nothing is in search text error will pop up
function formSubmitHandler(event){
 event.preventDefault();
 var city = searchText.value.trim();
 if (city){
   console.log(city)
   searchCity(city);
   
 }
 else{
  alert("please enter a valid city name")
 }


}



searchBtn.addEventListener("click",formSubmitHandler)