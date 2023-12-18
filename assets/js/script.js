var apiKey = "&appid=4f0caa1e03b1114f7e2701c7497f9f55";
var requestCurrent =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial"+
  apiKey;
var requestWeather =
  "https://api.openweathermap.org/data/2.5/forecast?units=imperial" +
  apiKey+"&";
var requestLocation =
  "http://api.openweathermap.org/geo/1.0/direct?&limit=5"+ apiKey +'&q=';

var searchBtn = document.getElementById("searchBtn");
var searchText = document.getElementById("searchText");
var forecast = document.getElementById("forecast");
var cityNameEl = document.getElementById("cityName");
var dateEl = document.getElementById("date");
var tempEl = document.getElementById("temp");
var windEl = document.getElementById("wind");
var humidityEl = document.getElementById("humidity");
var fiveDayForecast = document.getElementById("5DayForecast");
var descriptionEl= document.getElementById("description");
var iconEl=document.getElementById("icon")

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
    todayForecast(lon,lat)
  })

  
}

function todayForecast(lon,lat){
  var requestCity = requestCurrent + "&lon="+lon + "&lat="+lat
  fetch(requestCity)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data)
    
    var feelsLike =data.main.feels_like
    var name=data.name
    var humidity =data.main.humidity
    var wind= data.wind.speed
    var temp= data.main.temp
    var description = data.weather[0].description
    var iconId=data.weather[0].icon
    console.log(iconId)
    propagateForecast(name,feelsLike,humidity,wind,temp,description,iconId)
  })

}

function day () {
  //sets current date and time 
  var currentTime = dayjs().format("hh:mm a");
  var currentDay = dayjs().format("MMM DD YYYY");
  dateEl.append(currentDay)
  timeEl.append(currentTime)

}
day()


function propagateForecast(name,feelsLike,humidity,wind,temp,description,iconId){
   
  iconEl.setAttribute("src","https://openweathermap.org/img/wn/"+ iconId+"@2x.png")
  cityNameEl.append(name)
  humidityEl.append(humidity+"%")
  windEl.append(wind+"MPH")
  tempEl.append(temp+"°F")
  descriptionEl.append(description)
  console.log(feelsLike)

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