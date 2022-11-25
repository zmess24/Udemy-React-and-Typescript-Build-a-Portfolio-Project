// import { createRoot } from 'react-dom/client';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import TextEditor from './components/text-editor';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <TextEditor/>
      </div>
    </Provider>
  );
};

const container = document.querySelector('#root');
// const root = createRoot(!container);
// root.render(<App/>)

ReactDOM.render(<App />, container);
