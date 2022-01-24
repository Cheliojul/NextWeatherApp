import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { instance } from '../../lib/utils/axios';
import RegularMap from '../RegularMap';
import WeatherDataCard from '../WeatherDataCard';
const mock = {
  coord: {
    lon: 30.5589,
    lat: 50.4827,
  },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04d',
    },
  ],
  base: 'stations',
  main: {
    temp: 269.88,
    feels_like: 267.96,
    temp_min: 268.89,
    temp_max: 270.4,
    pressure: 1025,
    humidity: 83,
  },
  visibility: 10000,
  wind: {
    speed: 1.34,
    deg: 37,
    gust: 4.92,
  },
  clouds: {
    all: 75,
  },
  dt: 1643028258,
  sys: {
    type: 2,
    id: 2003742,
    country: 'UA',
    sunrise: 1643003021,
    sunset: 1643034935,
  },
  timezone: 7200,
  id: 691184,
  name: 'Trukhanov Island',
  cod: 200,
};
const HomePage: NextPage = () => {
  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0,
  });
  const [weatherData, setWeatherData] = useState(mock);
  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    console.log(e, 'map CLICK');
    const newCoords = e.latLng?.toJSON();
    if (newCoords) setCoords(newCoords);
  };
  const fetchNewCoords = async () => {
      const result = await instance.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );
      // console.log('fetched', result);
    setWeatherData(result.data);
  };
  useEffect(() => {
    fetchNewCoords();
  }, [coords]);
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-blue-500 text-xl font-bold p-2">
        Search city that you interested in , and click on it
      </p>
      <RegularMap onClick={handleMapClick} />
      <WeatherDataCard weatherData={weatherData} />
    </div>
  );
};
export default HomePage;
