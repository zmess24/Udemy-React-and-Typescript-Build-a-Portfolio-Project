import usedTypedSelector from "./use-typed-selector";

const useCumultiveDode = (cellId: string) => {
	return usedTypedSelector((state) => {
		const { data, order } = state.cells;
		const orderdedCells = order.map((id) => data[id]);

		const showFunc = `
    import _React from 'react';
    import _ReactDOM from 'react-dom';
      var show = (value) => {
        const root = document.querySelector('#root');
        if (typeof value === 'object') {
          if (value.$$typeof && value.props) {
            _ReactDOM.render(value, root)
          } else {
           root.innerHTML = JSON.stringify(value);  
          }
        } else {
         root.innerHTML = value;
        }
      }
    `;

		const showFuncNoop = "var show = () => {}";
		const cumultiveCode = [];
		for (let c of orderdedCells) {
			if (c.type === "code") {
				if (c.id === cellId) {
					cumultiveCode.push(showFunc);
				} else {
					cumultiveCode.push(showFuncNoop);
				}
				cumultiveCode.push(c.content);
			}

			if (c.id === cellId) {
				break;
			}
		}

		return cumultiveCode;
	}).join("\n");
};

export default useCumultiveDode;
