import type { NextPage } from 'next';
import { WeatherDataType } from '../../lib/types/entities';
type WeatherDataCardProps = {
  weatherData: WeatherDataType;
};
const WeatherDataCard: React.FC<WeatherDataCardProps> = ({ weatherData }) => {
  const { name, sys, main, weather } = weatherData;
  return (
    <div className="p-5 md:py-4 flex bg-cyan-500 flex-col items-center">
      <p className="text-xl">{name}</p>
      <div className="flex justify-center">
        <img
          src={`https://flagcdn.com/${sys?.country?.toLowerCase()}.svg`}
          width="30"
          height={30}
          alt="Country"
        ></img>
        <p className="px-2">{sys?.country}</p>
      </div>

      <p className="text-3xl font-bold">
        {`${Math.round(main?.temp - 273.15)} °C`}
      </p>
      <p>{`Feels like ${Math.round(main?.feels_like - 273.15)} °C`}</p>
      {weather && (
        <img
          className="modal__content__icon align-baseline"
          width={70}
          height={70}
          src={`http://openweathermap.org/img/w/${weather[0]?.icon}.png`}
          alt="weather-icon"
        />
      )}
      <p>{`${JSON.stringify(weather[0].description)}`}</p>
      <p>{`Pressure: ${Math.round(main?.pressure * 0.75)} mm`}</p>
    </div>
  );
};

export default WeatherDataCard;
