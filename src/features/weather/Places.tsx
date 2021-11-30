import React from "react";
import './Places.style.css'


 const PLACES = ["London", "Moscow", "Kiev"];
const LATS = ['51.5085300', '55.7522200', '50.4546600'];
const LONS = [' -0.1257400', '37.6155600', '30.5238000'];

class Places extends React.Component {
    render() {
      return (
          <ul className="places">
          {PLACES.map((place, index) => (
            <li><a key={index}
                href={'/'+place+'?lat='+LATS[index]+'&lon='+LONS[index]}
            >
                {place} 
            </a></li>
            ))}
          </ul>
      );
    }
  }

  export default Places;