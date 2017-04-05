
$( document ).ready(function() {
  
  var thermostat = new Thermostat();
  checkTemperature();

  displayData('London');

  function displayData(city) {

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var units = '&units=metric';
    var apiKey = '&APPID=558cadeaf010d77fe5755f6f362b01bf';
    var source = "http://openweathermap.org/img/w/";
    var suffix = ".png";

    $.get(url + city + units + apiKey, function(data) {
      $('#openweather').text(data.main.temp);
      var icon = (data.weather[0].icon);
      $('#weather').attr("src", (source + icon + suffix));
    });

    $('#currentCity').text(city);
  }

  $('#increasetemp').click(function() {
    thermostat.increaseTemperature();
    checkTemperature();
  });

  $('#decreasetemp').click(function() {
    thermostat.decreaseTemperature();
    checkTemperature();
  });

  $('#powersaveon').click(function() {
    thermostat.powerSaveOn();
    $('#power-saving-status').text('on');
    checkTemperature();
  });

  $('#powersaveoff').click(function() {
    thermostat.powerSaveOff();
    $('#power-saving-status').text('off');
    checkTemperature();
  });

  $('#reset').click(function() {
    thermostat.resetTemp();
    checkTemperature();
  });

  $('#input-city').submit(function(event) {
    event.preventDefault();
    var city = $('#city').val();
    displayData(city);
  });

  function checkTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyChecker());
  }

});
