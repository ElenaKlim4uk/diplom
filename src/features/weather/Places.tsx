import React from "react";


 const PLACES = ["London", "Moscow", "Kiev"];
const LATS = ['51.5085300', '55.7522200', '50.4546600'];
const LONS = [' -0.1257400', '37.6155600', '30.5238000'];

class Places extends React.Component {
    render() {
      return (
        <div className="App">
            {PLACES.map((place, index) => (
            <a
                href={'/'+place+'?lat='+LATS[index]+'&lon='+LONS[index]}
            >
                {place} 
            </a>
            ))}
         </div>
      );
    }
  }

  export default Places;