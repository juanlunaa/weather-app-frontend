import { capitalizeFirstLetter, convertUTCToTime } from "../logic";

interface Props {
	name: string;
	country: string;
	icon: string;
	temp: string;
	dateConsulte: number;
	timezone: number;
	description: string;
}

export const Header: React.FC<Props> = ({
	name,
	country,
	icon,
	temp,
	dateConsulte,
	timezone,
	description,
}) => {
	return (
		<header className="flex justify-between items-center m-3">
			<div>
				<p className="font-bold">
					{name}, {country}
				</p>
				<div className="flex items-center">
					<img
						src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
						alt=""
						className="w-20 h-20 md:w-28 md:h-28"
					/>
					<h1 className="text-2xl font-bold md:text-3xl">{temp}°C</h1>
				</div>
			</div>
			<div>
				<p>Day {convertUTCToTime(dateConsulte, timezone)}</p>
				<p>{capitalizeFirstLetter(description)}</p>
			</div>
		</header>
	);
};
