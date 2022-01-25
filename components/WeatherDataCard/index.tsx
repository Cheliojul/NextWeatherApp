import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useState } from 'react';
import { WeatherDataType } from '../../lib/types/entities';
import { toCamelCase } from '../../lib/utils/helpers';
type WeatherDataCardProps = {
  weatherData: WeatherDataType;
};
const WeatherDataCard: React.FC<WeatherDataCardProps> = ({ weatherData }) => {
  const { name, sys, main, weather } = weatherData;
  let { t } = useTranslation();
  const description = toCamelCase(weather[0].description);
  const [iconUrl, setIconUrl] = useState('ua');

  useEffect(() => {
    if (sys.country) setIconUrl(sys?.country?.toLowerCase());
  }, [weatherData.sys.country]);

  if (weatherData.name === 'Globe') return null;

  return (
    <div className="p-2 flex bg-blue-400 items-center rounded-xl shadow-xl border-gray-300 border-4">
      <div className="flex px-5">
        <p className="text-xl px-2">{name}</p>
        <img
          src={`https://flagcdn.com/${iconUrl}.svg`}
          width={30}
          height={30}
        />
        
        <p className="px-2">{sys?.country}</p>
      </div>
      <div className="flex-1 justify-center flex flex-col items-center px-5">
        <p className="text-3xl font-bold ">
          {`${Math.round(main?.temp - 273.15)} °C`}
        </p>
        <p className="whitespace-nowrap">
          {t('home:feels')}
          {` ${Math.round(main?.feels_like - 273.15)} °C`}
        </p>
      </div>
      <div className="flex-1 justify-center flex flex-col items-center px-5">
        {weather && (
          <img
            className="modal__content__icon align-baseline"
            width={50}
            height={50}
            src={`http://openweathermap.org/img/w/${weather[0]?.icon}.png`}
            alt="weather-icon"
          />
        )}
        <p className="text-center">{t(`home:${description}`)}</p>
      </div>

      <p className="flex-1 px-5 whitespace-nowrap">
        {t('home:pressure')}
        {`: ${Math.round(main?.pressure * 0.75)}`} {t('home:mm')}
      </p>
    </div>
  );
};

export default WeatherDataCard;
