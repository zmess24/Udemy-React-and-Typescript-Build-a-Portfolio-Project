import "./code-cell.css";
import { useEffect } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import Resizable from "./resizable";
import { Cell } from "../state";
import useActions from "../hooks/use-actions";
import usedTypedSelector from "../hooks/use-typed-selector";
import useCumultiveCode from "../hooks/useCumultiveCode";

interface CodeCellProps {
	cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
	const { updateCell, createBundle } = useActions();
	const bundle = usedTypedSelector((state) => state.bundles[cell.id]);
	const cumultiveCode = useCumultiveCode(cell.id);

	useEffect(() => {
		if (!bundle) {
			createBundle(cell.id, cumultiveCode);
			return;
		}

		const timer = setTimeout(async () => {
			createBundle(cell.id, cumultiveCode);
		}, 750);

		return () => {
			clearTimeout(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cumultiveCode, cell.id, createBundle]);

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
