// import { createRoot } from 'react-dom/client';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
// import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';

const App = () => {
  return (
    <div>
      <TextEditor/>
      {/* <CodeCell /> */}
      {/* <CodeCell /> */}
    </div>
  );
};

const container = document.querySelector('#root');
// const root = createRoot(!container);
// root.render(<App/>)

ReactDOM.render(<App />, container);
