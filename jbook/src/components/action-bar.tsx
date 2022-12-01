import useActions from "../hooks/use-actions";
import ActionButton from "./action-button";

interface ActionBarProps {
	id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
	const { moveCell, deleteCell } = useActions();
	return (
		<div>
			<ActionButton
				icon={"fa-arrow-up"}
				action={moveCell}
				direction={"up"}
				id={id}
			/>
			<ActionButton
				icon={"fa-arrow-down"}
				action={moveCell}
				direction={"down"}
				id={id}
			/>
			<ActionButton
				icon={"fa-times"}
				action={deleteCell}
				id={id}
				direction={null}
			/>
		</div>
	);
};

export default ActionBar;
