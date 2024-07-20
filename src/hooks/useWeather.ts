import { useEffect } from "react";
import { useWeatherStore } from "../store/weather";

export const useWeather = () => {
	const apiResponse = useWeatherStore((state) => state.apiResponse);
	const initialWeather = useWeatherStore((state) => state.initialWeather);
	const loading = useWeatherStore((state) => state.loading);
	const error = useWeatherStore((state) => state.error);

	useEffect(() => {
		initialWeather();
	}, []);

	return { data: apiResponse, loading, error };
};
