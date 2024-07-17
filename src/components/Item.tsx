interface Props {
	title: string;
	info: string;
	Icon: React.FC;
}

export const Item: React.FC<Props> = ({ title, info, Icon }) => {
	return (
		<div className="flex flex-col items-center md:flex-row md:justify-between">
			<h1>{title}</h1>
			<div className="flex items-center gap-1">
				<h1 className="text-xl font-bold">{info}</h1>
				<Icon />
			</div>
		</div>
	);
};
