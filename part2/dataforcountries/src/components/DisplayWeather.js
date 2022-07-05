import axios from "axios";
import { useEffect, useState } from "react";

const DisplayWeather = ({ country }) => {
  const [weather, setWeather] = useState({});
  const api_key = process.env.REACT_APP_API_KEY;

  // Work for cases where country doesn't have capital
  if (!("capital" in country)) {
    country.capital = country.name.common;
  }
  let lat, lng;
  if (country.capitalInfo.length > 0) {
    lat = country.capitalInfo.latlng[0];
    lng = country.capitalInfo.latlng[1];
  } else {
    lat = country.latlng[0];
    lng = country.latlng[1];
  }

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  if (Object.keys(weather).length > 0) {
    const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    const temp = (weather.main.temp - 273.15).toFixed(2);

    return (
      <div>
        <h1>Weather in {country.capital}</h1>

        <p>temperature {temp} Celcius</p>
        <img src={icon}></img>
        <p>wind {weather.wind.speed} m/s</p>
      </div>
    );
  }
};

export default DisplayWeather;
