import { useEffect } from "react";
import { useWeatherStore } from "../store/weather";

export const useWeather = () => {
	const city = useWeatherStore((state) => state.city);
	const country = useWeatherStore((state) => state.country);
	const apiResponse = useWeatherStore((state) => state.apiResponse);
	const initialCity = useWeatherStore((state) => state.initialCity);
	const setCity = useWeatherStore((state) => state.setCity);
	const error = useWeatherStore((state) => state.error);

	useEffect(() => {
		initialCity();
	}, []);

	return { city, country, data: apiResponse, setCity, error };
};
