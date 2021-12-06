import React, {Component, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Weather } from './features/weather/Weather';
import  Places  from './features/weather/Places';
import  Signin  from './features/weather/Signin';
import { Redirect } from 'react-router';

class App extends Component<{}, { isSignedIn: boolean }> {

  constructor(props: { isSignedIn: any }) {
    super(props);
    this.state = {
      isSignedIn: false
    }
  }

  handleSignedIn (newValue: boolean) {
    this.setState({
      isSignedIn: newValue
    })
  }

  

  render() {
    return (
        <div className="App">
          <Router>
            <Switch>

              <Route path="/login" exact>
                {localStorage.getItem('loggedIn')=='true' ? <Redirect to="/"/> : <Signin onSignedIn={this.handleSignedIn.bind(this)}/>}
                {/*<Signin />*/}
              </Route>

              <Route path="{`/:city`}" exact>
                <Places/>
                <Weather/>
              </Route>

              <Route path="/">
                {localStorage.getItem('loggedIn')!='true' ? <Redirect to="/login" />:<Places/>}
                <Weather/>
              </Route>
              
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
