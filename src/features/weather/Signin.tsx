import React, { Component } from 'react'
import { gapi } from 'gapi-script'

class Signin extends Component<{ onSignedIn: any }, { }> {
  
  state = { isSignedIn: false };
  
  componentDidMount() {
  
    
    gapi.load('auth2', function() {
      gapi.auth2
        .init({ // не забудьте указать ваш ключ в .env
          client_id:
          '878304371234-s72htcbesv9c3ccb6q8rkcq8plqpbol2.apps.googleusercontent.com',
            
        })
        .then( console.log('init OK'),  console.log('error'))
    })
  }

  signIn = () => {
    const auth2 = gapi.auth2.getAuthInstance()
    
    // console.log(auth2)
    auth2.signIn().then((googleUser:any) => {
    
      // метод возвращает объект пользователя
      // где есть все необходимые нам поля
      const profile = googleUser.getBasicProfile()
      console.log('ID: ' + profile.getId()) // не посылайте подобную информацию напрямую, на ваш сервер!
      console.log('Full Name: ' + profile.getName())
      console.log('Given Name: ' + profile.getGivenName())
      console.log('Family Name: ' + profile.getFamilyName())
      console.log('Image URL: ' + profile.getImageUrl())
      console.log('Email: ' + profile.getEmail())

      // токен
      const id_token = googleUser.getAuthResponse().id_token
      console.log('ID Token: ' + id_token)
      this.handleAuthChange();
      auth2.isSignedIn.listen(this.handleAuthChange);
    })
  }
  handleAuthChange = () => {
    const auth2 = gapi.auth2.getAuthInstance()
    this.setState({ isSignedIn: auth2.isSignedIn.get() });
    this.props.onSignedIn(this.state.isSignedIn)
    console.log(this.state.isSignedIn)
  };
  signOut = () => {
    const auth2 = gapi.auth2.getAuthInstance()
    auth2.signOut().then(function() {
      console.log('User signed out.')
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.signIn}>Log in</button>
          <button onClick={this.signOut}>Log out</button>
        </header>
      </div>
    )
  }
}

export default Signin
