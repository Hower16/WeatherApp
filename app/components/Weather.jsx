var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
        isLoading: false
      }
  },
  handleSearch: function(location){
    //that variable declared because this gets lost inside nested function
    //now we can access this keyword even after new functionc created
    var that = this;

    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        //location passed in
        location: location,
        //temp coming back
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage){
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function() {
    var {isLoading, temp, location} = this.state;

    function renderMessage(){
      if (isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      }
      else if (temp && location){
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }
    return (
        <div>
          <h1 className="text-center">Get Weather</h1>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
        </div>
    );
  }
});

module.exports = Weather;
