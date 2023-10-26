import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

ReactDOM.render(
  <BrowserRouter basename={"/test-task-tabs"}>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
