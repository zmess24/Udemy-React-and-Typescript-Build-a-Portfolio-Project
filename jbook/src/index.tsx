// import { createRoot } from 'react-dom/client';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
import CodeCell from './components/code-cell';

const App = () => {
  return (
    <div>
      <CodeCell />
      {/* <CodeCell /> */}
    </div>
  );
};

const container = document.querySelector('#root');
// const root = createRoot(!container);
// root.render(<App/>)

ReactDOM.render(<App />, container);
