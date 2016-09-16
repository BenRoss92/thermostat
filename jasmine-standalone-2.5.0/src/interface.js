
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
  // var icon =
  $.get(url + city + units + apiKey, function(data) {
    $('#openweather').text(data.main.temp);
    var icon = (data.weather[0].icon);
    console.log(icon);
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
    // function checkTemperature() {
    //   $('#temperature').text(thermostat.temperature);
    // }

//     function checkTemperature() {
//   $('#temperature').text(thermostat.temperature);
//   if(thermostat.energyChecker() === 'green') {
//     $('#temperature').css('color', 'green')
//   } else if(thermostat.energyChecker() === 'yellow') {
//     $('#temperature').css('color', 'yellow')
//   } else {
//     $('#temperature').css('color', 'red')
//   }
// }


});

//   // document.getElementById("increasetemp").innerHTML = thermostat.increaseTemperature;
//
//   // $( "button" ).addClass( "test" );
//
//   $( "#increasetemp" ).click(function( event ) {
//
//     event.preventDefault();
//
//     $( this ).hide( "slow" );
//
//
// });
//
// $( "#decreasetemp" ).click(function( event ) {
//
//   event.preventDefault();
//
//   $( this ).hide( "slow" );
//
//
// });
//
// });
//
// // window.onload = function() {
// //
// //     alert( "welcome" );
// //
// // };
