import React, {Component, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Weather } from './features/weather/Weather';
import  Places  from './features/weather/Places';
import  Signin  from './features/weather/Signin';
import { Redirect } from 'react-router';
import { useAppSelector } from './app/hooks';

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
    console.log(this.state.isSignedIn)

    return (
        <div className="App">
          <Router>
            <Switch>

              <Route path="/login" exact>
                {this.state.isSignedIn ? <Redirect to="/"/> : <Signin onSignedIn={this.handleSignedIn.bind(this)}/>}
                {/*<Signin />*/}
              </Route>

              <Route path="{`/:city`}" exact>
                <Places/>
                <Weather/>
              </Route>

              <Route path="/">
                {!this.state.isSignedIn ? <Redirect to="/login" />:<Places/>}
                <Weather/>
              </Route>
              
            </Switch>
          </Router>
        </div>
    );
  }
}

export default App;
