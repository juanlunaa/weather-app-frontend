import { create } from "zustand";
import { WeatherResponse } from "../types";
import { fecthInitialWeather } from "../services/cityUser";
import mockData from "../mocks/data.json";

interface State {
	apiResponse: WeatherResponse;
	initialWeather: () => void;
	loading: boolean;
	error: string;
}

export const useWeatherStore = create<State>()((set) => {
	return {
		apiResponse: mockData,
		initialWeather: async () => {
			const json = await fecthInitialWeather();
			if (json != null) {
				set({ apiResponse: json, loading: false });
			}
		},
		loading: true,
		error: "",
	};
});
