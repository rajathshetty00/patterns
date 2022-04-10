import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import WithoutRender from './WithoutRender';
import Home from './Home/index.js';
import WithRender from './WithRender';
import Counter from './CustomHooks/LocalUseStateExample/Counter';
import UseMemoExample from './UseMemoExample/WithUseMemo/index.js';
import NoUseMemo from './UseMemoExample/WithoutUseMemo/index.js';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/without-render' element={< WithoutRender />}></Route>
        <Route exact path='/with-render' element={< WithRender />}></Route>
        <Route exact path='/custom-useState' element={< Counter />}></Route>
        <Route path="/without-usememo" element={< NoUseMemo />}></Route>
        <Route path="/with-usememo" element={< UseMemoExample />}></Route>


      </Routes>
    </div>
    </Router>
  );
}

export default App;
