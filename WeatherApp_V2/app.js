var request = require('request')

var location = [ "Delhi", "London", "Chicago", "Perth", "Amsterdam" ]
var randomLocation = Math.floor(Math.random()*Math.floor(location.length));
console.log( randomLocation );

// Make a request to the OpenWeatherMap API. This needs a key which can be obtained after registering with them.
request( 'http://api.openweathermap.org/data/2.5/weather?q='+location[randomLocation]+'&appid=db087298b61dfda3a475a731fa825e17&units=metric', function(err, res, body ){

    if( err || ( res && res.statusCode != 200 ) ){
        // Throw an exception if we get an unsatisfactory response.
        throw err;
    }

    // Parse the JSON Data obtained from the HTTP Request.
    var weatherData = JSON.parse( body );

    console.log( 'Country: ' + weatherData.sys.country );
    console.log( 'Location: ' + weatherData.name );
    console.log( 'Temperature: ' + weatherData.main.temp );
    console.log( 'Pressure: ' + weatherData.main.pressure );
    console.log( 'Humidity: ' + weatherData.main.humidity );
})
