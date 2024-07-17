import { Header } from "./components/Header";
import { InputCity } from "./components/InputCity";
import { Item } from "./components/Item";
import { LargeItem } from "./components/LargeItem";
import { HotIcon, MoonIcon, SunIcon, WindIcon, HumedityIcon } from "./Icons";
import { convertUTCToTime } from "./logic";
import mockData from "./mocks/data.json";
import { WeatherResponse } from "./types";

const data = mockData as WeatherResponse;

function App() {
	const tempCelsius = (data.main.temp - 273.15).toFixed(1);
	const feelsLikeCelsius = (data.main.feels_like - 273.15).toFixed(1);
	return (
		<div className="max-w-screen-md mx-auto mt-[5%]">
			<Header
				name={data.name}
				country={data.sys.country}
				icon={data.weather[0].icon}
				temp={tempCelsius}
				dateConsulte={data.dt}
				timezone={data.timezone}
				description={data.weather[0].description}
			/>
			<InputCity />
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
					<LargeItem
						title="Sunrise"
						info={convertUTCToTime(data.sys.sunrise, data.timezone)}
						Icon={SunIcon}
					/>

					<LargeItem
						title="Sunset"
						info={convertUTCToTime(data.sys.sunset, data.timezone)}
						Icon={MoonIcon}
					/>
				</section>
			</main>
		</div>
	);
}

export default App;
