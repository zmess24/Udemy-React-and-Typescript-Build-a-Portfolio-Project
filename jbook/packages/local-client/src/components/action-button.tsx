interface ActionButtonProps {
	id: string;
	icon: string;
	action: Function;
	direction: string | null;
}

const ActionButton: React.FC<ActionButtonProps> = ({
	icon,
	action,
	id,
	direction,
}) => {
	const handleClick = () => {
		if (direction) {
			action(id, direction);
		} else {
			action(id);
		}
	};

	return (
		<button className="button is-primary is-small" onClick={handleClick}>
			<span className="icon">
				<i className={`fas ${icon}`} />
			</span>
		</button>
	);
};

export default ActionButton;
