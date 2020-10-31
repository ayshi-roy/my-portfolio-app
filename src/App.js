import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import About from './Component/About/About';
import Home from './Component/Home/Home';
import AllProject from './Component/AllProject/AllProject';
 

function App() {
  return (
    
    <Router>
        <Switch>
        <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/allProject">
            <AllProject/>
          </Route>          
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
