
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
  var requestUrl='https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=' + apiKey + '&units=imperial';
  fetch(requestUrl)

  .then(function (response) {
      console.log(response);
      return response.json();
   })
   .then(function (data) {
     console.log(data)
     //renderFiveDay(data)
   });
  
 saveHistory();
}

function saveHistory() {
   //user city value
  var cityName = $('#searchbar').val();
  //create seach history list
  var searchHistory = JSON.parse(localStorage.getItem('cityKey') )|| [];
  //creates array w cityName inside
  searchHistory.push(cityName);
  console.log(searchHistory);
  //saves array as a string
  localStorage.setItem('cityKey', JSON.stringify(searchHistory));
  
  console.log(cityName);
  //location
  //var cityKey = $('#searchbar');

  //localStorage.setItem(savedCities, cityName);

 // var savedCities = $("#saved-cities");
 // console.log(savedCities);

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