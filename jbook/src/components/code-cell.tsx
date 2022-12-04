import "./code-cell.css";
import { useEffect } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import Resizable from "./resizable";
import { Cell } from "../state";
import useActions from "../hooks/use-actions";
import usedTypedSelector from "../hooks/use-typed-selector";
import useTypedSelector from "../hooks/use-typed-selector";

interface CodeCellProps {
	cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
	const { updateCell, createBundle } = useActions();
	const bundle = usedTypedSelector((state) => state.bundles[cell.id]);
	const cumultiveCode = useTypedSelector((state) => {
		const { data, order } = state.cells;
		const orderdedCells = order.map((id) => data[id]);

		const cumultiveCode = [];
		for (let c of orderdedCells) {
			if (c.type === "code") {
				cumultiveCode.push(c.content);
			}

			if (c.id === cell.id) {
				break;
			}
		}

		console.log(cumultiveCode);

		return cumultiveCode;
	});

	useEffect(() => {
		if (!bundle) {
			createBundle(cell.id, cell.content);
			return;
		}

		const timer = setTimeout(async () => {
			createBundle(cell.id, cell.content);
		}, 750);

		return () => {
			clearTimeout(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cell.content, cell.id, createBundle]);

	return (
		<Resizable direction="vertical">
			<div
				style={{
					height: "calc(100% - 10px)",
					display: "flex",
					flexDirection: "row",
				}}
			>
				<Resizable direction="horizontal">
					<CodeEditor
						initialValue={cell.content}
						onChange={(value) => updateCell(cell.id, value)}
					/>
				</Resizable>
				<div className="progress-wrapper">
					{!bundle || bundle.loading ? (
						<div className="progress-cover">
							<progress
								className="progress is-small is-primary"
								max="100"
							>
								Loading
							</progress>
						</div>
					) : (
						<Preview code={bundle.code} err={bundle.err} />
					)}
				</div>
			</div>
		</Resizable>
	);
};

export default CodeCell;
