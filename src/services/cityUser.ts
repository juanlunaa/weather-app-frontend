import { WeatherResponse } from "../types";

export const fecthInitialWeather = async () => {
	const url = "http://127.0.0.1:4000/weather/local";
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(`HTTP error! Status: ${res.status}`);
	}

	const json = (await res.json()) as WeatherResponse;

	return json;
};
