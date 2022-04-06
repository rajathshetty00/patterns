import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import WithoutRender from './WithoutRender';
import Home from './Home/index.js';
import WithRender from './WithRender';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/without-render' element={< WithoutRender />}></Route>
        <Route exact path='/with-render' element={< WithRender />}></Route>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
