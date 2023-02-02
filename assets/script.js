
$(function () {
  const apiKey = 'cbdea56a1f81e18a6f96468b0cb42f80';

  var todaysDate = dayjs().format('dddd, M/D/YYYY');
  $('#date').text(todaysDate);
  //5day forecast

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

  var fiveDayEl = $('.icons-container');
  var cardDays = $(".icons");
  var cityNameEl = $('<h2>');
  
  function renderFiveDay(weather){
    console.log(weather);
    
    //create for loop of weather list;
    //weather:calls api data List: calls the list array w weather info
    //and skips by weather info per day (this is the +8)
    for(i=0; i < weather.list.length; i = i + 8){
      console.log(weather.list[i]);
      var tempEl = document.querySelector('#temp-'+i);

      var humEl = document.querySelector('#hum-'+i);
      var windEl =document.querySelector('#speed-'+i); //call by id and i
      //put 5day forecast into div class: icons
      tempEl.textContent= "Temp: " + weather.list[i].main.temp + "°F";
      console.log(tempEl);
      humEl.textContent= "Humidity: " + weather.list[i].main.humidity;
      windEl.textContent= "Winds: " + weather.list[i].wind.speed + "mph";
      
     //fiveDayEl.text(cardDays);
     tempEl.innerText;
     humEl.innerText;
     windEl.innerText;
     //cardDays.text(humEl);
     //cardDays.text(windEl);
    }
      
    
  }
  //assign local storage to searched cities
  $('#searchbtn').on('click', searchCity);





  $('<ul>').children(localStorage.getItem("saved-cities"));



  //gift from sinclair
  //dt = eval(data.dt * 1000)
  //today = new Date(dt).toLocaleDateString('en-US')

  //TODOsearch function with city copulation
  //TODO weather widgets appended to #forecast
});