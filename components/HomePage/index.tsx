import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { MockWeatherData } from './mock';
import { instance } from '../../lib/utils/api';
import RegularMap from '../RegularMap';
import WeatherDataCard from '../WeatherDataCard';
import { WeatherDataType } from '../../lib/types/entities';

const HomePage: NextPage = () => {
  const initialState = MockWeatherData;
  const { t } = useTranslation();
  const [weatherData, setWeatherData] = useState<WeatherDataType>(initialState);
  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0,
  });

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    const newCoords = e.latLng?.toJSON();
    if (newCoords) setCoords(newCoords);
  };
  const fetchNewCoords = async () => {
    const result = await instance.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    );
    setWeatherData(result.data);
  };

  useEffect(() => {
    fetchNewCoords();
  }, [coords]);

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-blue-500 text-xl font-bold p-2">
        {t('home:mapTitle')}
      </p>
      <RegularMap onClick={handleMapClick} />
      <WeatherDataCard weatherData={weatherData} />
    </div>
  );
};
export default HomePage;
