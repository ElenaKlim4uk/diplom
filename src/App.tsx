import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Weather } from './features/weather/Weather';
import { cardMediaClasses } from '@mui/material';

class App extends React.Component {
  componentDidMount(){
    window.gapi.load('auth2', function() {
     window.gapi.auth2.init({
       client_id:process.env.REACT_APP_GOOGLE_CLIENT_ID
     })
    })
  }
  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/">
              <Weather />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
