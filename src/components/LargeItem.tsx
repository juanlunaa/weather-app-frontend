interface Props {
	title: string;
	info: string;
	Icon: React.FC;
}

export const LargeItem: React.FC<Props> = ({ title, info, Icon }) => {
	return (
		<div className="flex items-center gap-1">
			<h1>{title}</h1>
			<Icon />
			<h1 className="text-4xl font-bold">{info}</h1>
		</div>
	);
};
