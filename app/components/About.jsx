var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a Weather App built on React.</p>
      <p>Here are some of the tools I used</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the
          JavaScript framework used
        </li>
        <li>
          <a href="https://openweathermap.org">Open Weather App</a> - I used
          Open Weather Map to search for weather data by cit name
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
