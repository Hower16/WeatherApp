var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b1b1252312e6dabf351308691052d8af&units=imperial';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    //return allows us to chain our Promises calling .then twice
    //first time we are parsing out info and looking for temp
    return axios.get(requestUrl).then(function(response){
      //this will catch all errors
      if(response.data.cod && response.data.message){
        throw new Error(response.data.message)
      }
      else{
        //this will return the temperature
        return response.data.main.temp;
      }
    }, function(response){
      throw new Error(response.data.message);
    });
  }
}
