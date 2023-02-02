
$(function () {
  const apiKey = 'cbdea56a1f81e18a6f96468b0cb42f80';

  var todaysDate = dayjs().format('dddd, M/D/YYYY');
  $('#date').text(todaysDate);

  //city search function

  function searchCity() {
    //user city input value
    var city = $("#searchbar").val();
    console.log(city);
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + apiKey + '&units=imperial';
    fetch(requestUrl)

      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        renderFiveDay(data);
      });

    var todaysUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=imperial'
    fetch(todaysUrl)

      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        //renderToday(data);
      });
    saveHistory();
  }

  function saveHistory() {
    //user city value
    var cityName = $('#searchbar').val();
    //create search history array
    var searchHistory = JSON.parse(localStorage.getItem('cityKey')) || [];
    //pushes city name value into array
    searchHistory.push(cityName);
    console.log(searchHistory);

    var savedCities = $('#saved-cities');
    // TODO: APPEND ARRAY by ID "#saved-cities"
    for (i = 0; i < searchHistory.length; i++) {
      var cityLi = searchHistory[i];
      console.log(cityLi);
      var li = $("<li>").addClass("info");
      li.text(cityLi);
      li.attr("data-index", i);

      // var button = document.createElement("button");
      // button.textContent = "Check Weather";

      // li.appendChild(button);
      savedCities.append(li);
      console.log(savedCities);
    }

    //saves array as a string
    localStorage.setItem('cityKey', JSON.stringify(searchHistory));

    console.log(cityName);

  }

  
  var cityNameEl = $('#city-name');
  //function renderToday(weather) {
  //  var cityName = $('#searchbar').val();
  //  cityNameEl.addClass(".info");
    //cityNameEl.append(cityName);
   
    //tempEl.textContent = "Temp: " + weather.list[0].main.temp + "°F";
    //tempEl.textContent = "Temp: " + weather.list[0].main.temp + "°F";
    //tempEl.textContent = "Temp: " + weather.list[0].main.temp + "°F";

  //}

  var fiveDayEl = $('.icons-container');
  var cardDay1 = $("#day-1");
  var cardDay2 =$('#day-2');
  var cardDay3 = $('#day-3');
  var cardDay4 = $('#day-4');
  var cardDay5 = $('#day-5');

  function renderFiveDay(weather) {
    console.log(weather);

    //create for loop of weather list;
    for (i = 0; i < weather.list.length; i= i + 8) {
      console.log(weather.list[i]);

      var tempEl1 = $('p');
      console.log(tempEl1);
      var tempEl2 = $('p');
      var tempEl3 = $('p');
      var tempEl4 = $('p');
      var tempEl5 = $('p');

      var humEl1 = $('p');
      var humEl2 = $('p');
      var humEl3 = $('p');
      var humEl4 = $('p');
      var humEl5 = $('p');

      var windEl1 = $('p');
      var windEl2 = $('p');
      var windEl3 = $('p'); 
      var windEl4 = $('p');
      var windEl5 = $('p');
      //put 5day forecast into div class: icons
      tempEl1.text("Temp: " + weather.list[0].main.temp + "°F");
      console.log(tempEl1);
      humEl1.text("Humidity: " + weather.list[0].main.humidity);
      windEl1.text("Winds: " + weather.list[0].wind.speed + "mph");
      //day 2
      tempEl2.text("Temp: " + weather.list[8].main.temp + "°F");
      
      humEl2.text("Humidity: " + weather.list[8].main.humidity);
      windEl2.text("Winds: " + weather.list[8].wind.speed + "mph");
      //day3
      tempEl3.text("Temp: " + weather.list[16].main.temp + "°F");
      
      humEl3.text("Humidity: " + weather.list[16].main.humidity);
      windEl3.text("Winds: " + weather.list[16].wind.speed + "mph");
      //day 4
      tempEl4.text("Temp: " + weather.list[32].main.temp + "°F");
      
      humEl4.text("Humidity: " + weather.list[32].main.humidity);
      windEl4.text("Winds: " + weather.list[32].wind.speed + "mph");
      // day 5
      tempEl5.text("Temp: " + weather.list[39].main.temp + "°F");
      humEl5.text("Humidity: " + weather.list[39].main.humidity);
      windEl5.text("Winds: " + weather.list[39].wind.speed + "mph");

      
      
      cardDay1.append(tempEl1);
      cardDay1.append(humEl1);
      cardDay1.append(windEl1);

      
      cardDay2.append(tempEl2);
      cardDay2.append(humEl2);
      cardDay2.append(windEl2);

      
      cardDay3.append(tempEl3);
      cardDay3.append(humEl3);
      cardDay3.append(windEl3);

      
      cardDay4.append(tempEl4);
      cardDay4.append(humEl4);
      cardDay4.append(windEl4);

      
      cardDay5.append(tempEl5);
      cardDay5.append(humEl5);
      cardDay5.append(windEl5);

  }
}
  //assign local storage to searched cities
  $('#searchbtn').on('click', searchCity);





  $('<ul>').children(localStorage.getItem("saved-cities"));



 
  //dt = eval(data.dt * 1000)
  //today = new Date(dt).toLocaleDateString('en-US')

});