
function getApi(){

  var requestUrl='https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=a400645680064e572aa20f814a90c367';
  var city = $("#searchbar input").val();
  
  fetch(requestUrl)
  .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(city.value)
      renderFiveDay(data)
    });
  
}