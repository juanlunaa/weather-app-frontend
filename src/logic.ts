export const convertUTCToTime = (timestamp: number, timezone: number) => {
	const date = new Date((timestamp + timezone) * 1000);
	const hours = date.getUTCHours().toString().padStart(2, "0");
	const minutes = date.getUTCMinutes().toString().padStart(2, "0");
	return `${hours}:${minutes}`;
};

export function capitalizeFirstLetter(string: string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
