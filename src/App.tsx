import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Weather } from './features/weather/Weather';
import  Places  from './features/weather/Places';
import  Signin  from './features/weather/Signin';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="{`/login`}" exact>
            <Signin />
          </Route>
          
            <Route path="{`/:city`}" exact>
            <Places />
            <Weather />
          </Route>
          <Route path="/" >
            <Places/>
            <Weather />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
