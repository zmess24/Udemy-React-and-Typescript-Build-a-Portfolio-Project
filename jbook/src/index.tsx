// import { createRoot } from 'react-dom/client';
import "bulmaswatch/superhero/bulmaswatch.min.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";
import CellList from "./components/cell-list";

const App = () => {
	return (
		<Provider store={store}>
			<div>
				<CellList />
			</div>
		</Provider>
	);
};

const container = document.querySelector("#root");
// const root = createRoot(!container);
// root.render(<App/>)

ReactDOM.render(<App />, container);
