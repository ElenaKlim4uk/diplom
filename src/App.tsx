import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Weather } from './features/weather/Weather';
import  Places  from './features/weather/Places';
import  Signin  from './features/weather/Signin';
import { Redirect } from 'react-router'

function App() {
  //useState
  // const isSignedIn = useState()
  //const [isSignedIn] = useState(0);
  console.log(isSignedIn)
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/login" exact>
           {/* {isSignedIn ? <Redirect to="/" /> : <Signin />} */}
           <Signin />
          </Route>
          
            <Route path="{`/:city`}" exact>
            <Places />
            <Weather />
          </Route>
          <Route path="/" >
          {isSignedIn ?? 
          <Redirect to="/login" /> }
          <Places />
            <Weather />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
