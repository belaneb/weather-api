var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?q=minneapolis&appid=2cdf56fba24e5428b2510f796c899aec"
console.log("test")

fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    })
  var searchButton = $(".searchBtn") [0]
  var InputField = $(".inputField") [0]

  searchButton.addEventListener("click", function(){
  var InputValue = InputField.value
  var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${InputValue}&appid=2cdf56fba24e5428b2510f796c899aec`
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("city name: "+data.city.name)
      console.log("date: "+data.list[0].dt_txt)
      console.log("weather: "+data.list[0].weather[0].main)
      console.log("description: "+data.list[0].weather[0].description)
      console.log("wind speed : "+data.list[0].wind.speed)
      console.log("Humidity : "+data.list[0].main.humidity)

      console.log(data)
      // set the values
      $('#cityName')[0].innerHTML = "City Name: "+ data.city.name
      $('#date')[0].innerHTML = "Date: "+ data.list[0].dt_txt
      $('#weather')[0].innerHTML = "Weather: "+ data.list[0].weather[0].main
      $('#windSpeed')[0].innerHTML = "Wind Speed: "+ data.list[0].wind.speed
      $('#humidity')[0].innerHTML = "Humidity: "+ data.list[0].main.humidity
      
      let weatherIcon = data.list[0].weather[0].icon

      let imageEl = document.createElement("img")
    imageEl.setAttribute("src", `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`)
      let imageContainer = document.querySelector(".imageContainer")

      imageContainer.innerHTML = ""

      imageContainer.appendChild(imageEl)
      console.log(data.list[0].weather[0].icon)

    
    //5 day forecast  
      displayFiveDayForecast(data)


      // add history to localstorage
      if(localStorage.getItem("searchHistory")!=null){
        localStorage.setItem("searchHistory", localStorage.getItem("searchHistory") + InputValue +",") 
      } else {
        localStorage.setItem("searchHistory",  InputValue +",")
      }
      let searchHistory = localStorage.getItem("searchHistory").split(",")
      $("#searchHistory")[0].innerHTML = ""
      searchHistory.forEach(element => {
        $("#searchHistory")[0].innerHTML += `<a>${element}</a><br>`
      });
    })
    console.log(InputField.value)
  })

    //5 day forecast
    function displayFiveDayForecast(weatherData) {
    //create an empty div on html for 5 day forecast (similar to img tag)
    //will append that similarly to img
    //create a for loop which loops through data.list array
  }