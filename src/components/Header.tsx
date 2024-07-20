import { useWeather } from "../hooks/useWeather";
import { capitalizeFirstLetter, convertUTCToTime } from "../logic";

export const Header = () => {
	const { data } = useWeather();

	const tempCelsius = (data.main.temp - 273.15).toFixed(1);
	return (
		<header className="flex justify-between items-center m-3">
			<div>
				<p className="font-bold">
					{data.name}, {data.sys.country}
				</p>
				<div className="flex items-center">
					<img
						src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
						alt=""
						className="w-20 h-20 md:w-28 md:h-28"
					/>
					<h1 className="text-2xl font-bold md:text-3xl">{tempCelsius}°C</h1>
				</div>
			</div>
			<div>
				<p>Day {convertUTCToTime(data.dt, data.timezone)}</p>
				<p>{capitalizeFirstLetter(data.weather[0].description)}</p>
			</div>
		</header>
	);
};
