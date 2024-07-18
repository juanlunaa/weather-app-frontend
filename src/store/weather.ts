import { create } from "zustand";
import { WeatherResponse } from "../types";
import { fecthCityUser } from "../services/cityUser";
import mockData from "../mocks/data.json";

interface State {
	city: string;
	country: string;
	apiResponse: WeatherResponse;
	initialCity: () => void;
	setCity: (city: string) => void;
	error: string;
}

export const useWeatherStore = create<State>()((set) => {
	return {
		city: "",
		country: "",
		apiResponse: mockData,
		initialCity: async () => {
			const json = await fecthCityUser();
			if (json != null) {
				set({ city: json.city, country: json.country });
			}
		},
		setCity: (city) => {
			set({ city });
		},
		error: "",
	};
});
