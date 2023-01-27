
fetch('api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=a400645680064e572aa20f814a90c367', {
    method: 'GET', //GET is the default.
    credentials: 'same-origin', // include, *same-origin, omit
    redirect: 'follow', // manual, *follow, error
})
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
