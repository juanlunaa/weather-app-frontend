import { SearchIcon } from "../Icons";

export const InputCity = () => {
	return (
		<section className="relative flex items-center m-3">
			<input
				type="text"
				placeholder="Search city..."
				className="w-[100%] p-2 bg-blue-50 rounded-md focus:outline-blue-300"
			/>
			<SearchIcon />
		</section>
	);
};
