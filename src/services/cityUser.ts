import { IPInfoAPIResponse } from "../types";

export const fecthCityUser = async () => {
	try {
		const url = `https://ipinfo.io?token=${import.meta.env.VITE_IP_INFO_API_KEY}`;
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`HTTP error! Status: ${res.status}`);
		}

		const json = (await res.json()) as IPInfoAPIResponse;

		return json;
	} catch (error) {
		console.log("Error ", error);
		return null;
	}
};
