var request = require('request')

// Make a request to the OpenWeatherMap API. This needs a key which can be obtained after registering with them.
request( 'http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=db087298b61dfda3a475a731fa825e17', function(err, res, body ){

    if( err || ( res && res.statusCode != 200 ) ){
        // Throw an exception if we get an unsatisfactory response.
        throw err;
    }

    // Parse the JSON Data obtained from the HTTP Request.
    var weatherData = JSON.parse( body );

    console.log( weatherData.sys.country );
    console.log( weatherData.name );
    console.log( weatherData.main.temp );
    console.log( weatherData.main.pressure );
    console.log( weatherData.main.humidity );
})
