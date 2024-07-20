import { Header } from "./components/Header";
import { InputCity } from "./components/InputCity";
import { Item } from "./components/Item";
import { LargeItem } from "./components/LargeItem";
import { useWeather } from "./hooks/useWeather";
import { HotIcon, MoonIcon, SunIcon, WindIcon, HumedityIcon } from "./Icons";
import { convertUTCToTime } from "./logic";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
	const { data, loading } = useWeather();
	const feelsLikeCelsius = (data.main.feels_like - 273.15).toFixed(1);
	return (
		<>
			{loading == true ? (
				<div className="h-[100vh] w-[100%] flex items-center justify-center">
					<ClipLoader color="#3498db" loading={loading} />
				</div>
			) : (
				<div className="max-w-screen-md mx-auto mt-[5%]">
					<Header />
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
			)}
		</>
	);
}

export default App;
