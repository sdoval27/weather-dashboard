
$(function () { 
const apiKey = 'cbdea56a1f81e18a6f96468b0cb42f80';
console.log(apiKey);
//user city input value


var todaysDate = dayjs().format('dddd, M/D/YYYY');
$('#date').text(todaysDate);
//5day forecast

//assign local storage to searched cities
$('#searchbtn').on('click', function(){
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
  //user city value
  var cityName = $('#searchbar').val();
  console.log(cityName);
  //location
  var cityKey = $('#searchbar');
  localStorage.getItem(cityKey,cityName);
  
  var savedCities = $("#saved-cities");
  console.log(savedCities);
  localStorage.setItem(savedCities, cityName);

})

$('<ul>').children(localStorage.getItem("saved-cities"));




  
//TODOsearch function with city copulation
//TODO weather widgets appended to #forecast
});