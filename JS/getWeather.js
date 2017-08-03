function getWeather() {
  /* Resets City Temp */
  $('.weatherResponse').html('');
  var cityName = $('#cityName').val();
  var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=4a90aee1c5a6a311869b8fa68d87623d';
  $.getJSON(apiCall, weatherCallback);
  
  /* Sends in Weather */
  function weatherCallback(weatherData) {
    var weatherName = weatherData.name;
    var weatherCountry = weatherData.sys.country;
    var weatherDescription = weatherData.weather[0].description;
    var weatherTemperature = Math.round((weatherData.main.temp - 273.15) * 9/5 + 32);
    $('.weatherResponse').append("The weather in " + weatherName + "," + weatherCountry + " is " + weatherTemperature + " degrees and " + weatherDescription);
  }
}
