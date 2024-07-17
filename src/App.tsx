import { Item } from "./components/Item";
import {
	HotIcon,
	MoonIcon,
	SearchIcon,
	SunIcon,
	WindIcon,
	HumedityIcon,
} from "./Icons";
import { capitalizeFirstLetter, convertUTCToTime } from "./logic";
import mockData from "./mocks/data.json";
import { WeatherResponse } from "./types";

const data = mockData as WeatherResponse;

function App() {
	const tempCelsius = (data.main.temp - 273.15).toFixed(1);
	const feelsLikeCelsius = (data.main.feels_like - 273.15).toFixed(1);
	return (
		<div className="max-w-screen-md mx-auto mt-[5%]">
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
			<section className="relative flex items-center m-3">
				<input
					type="text"
					placeholder="Search city..."
					className="w-[100%] p-2 bg-blue-50 rounded-md focus:outline-blue-300"
				/>
				<SearchIcon />
			</section>
			<h1 className="text-center text-xl font-bold">More information</h1>
			<main className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-3 m-3">
				<section className="flex flex-col p-3 bg-blue-100 rounded-md">
					<Item
						title="Feels like"
						info={`${feelsLikeCelsius}°C`}
						Icon={HotIcon}
					/>

					<Item
						title="Humedity"
						info={`${data.main.humidity}%`}
						Icon={HumedityIcon}
					/>

					<Item
						title="Wind"
						info={`${(data.wind.speed * 3.6).toFixed(0)} km/h`}
						Icon={WindIcon}
					/>
				</section>
				<section className="flex flex-col items-center p-3 bg-blue-100 rounded-md">
					<div className="flex items-center gap-1">
						<h1>Sunrise</h1>
						<SunIcon />
						<h1 className="text-4xl font-bold">
							{convertUTCToTime(data.sys.sunrise, data.timezone)}
						</h1>
					</div>

					<div className="flex items-center gap-1">
						<h1>Sunset</h1>
						<MoonIcon />
						<h1 className="text-4xl font-bold">
							{convertUTCToTime(data.sys.sunset, data.timezone)}
						</h1>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
