import React from "react";
import './Places.style.css'


 const PLACES = ["London", "Moscow", "Kiev"];
const LATS = ['51.5085300', '55.7522200', '50.4546600'];
const LONS = [' -0.1257400', '37.6155600', '30.5238000'];

class Places extends React.Component {
  signOut = () => {
      localStorage.removeItem('loggedIn');
      window.location.href='/';
    }
  
    render() {
      return (
          <ul className="places">
          {PLACES.map((place, index) => (
            <li><a className="place" key={index}
                href={`/${place}?lat=${LATS[index]}&lon=${LONS[index]}`}
            >
                {place} 
            </a></li>
            ))}
            <li><a className="logout" onClick={this.signOut} href='#'>Log out</a></li>
          </ul>
      );
    }
  }

  export default Places;