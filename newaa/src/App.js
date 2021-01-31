import './App.css';
import {React, Component, useState, useEffect} from 'react';
import Particles from 'react-particles-js';
import Comp from './Components/Comp'

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const App = () => {
  const [submitted, changeSubmitted] = useState(false);
  const [flights, changeFlights] = useState([ ]);
  const [origin, changeOrigin] = useState("");
  const [dest, changeDest] = useState("");
  const [date, changeDate] = useState("");

  const getData = ()  => {
    fetch(`http://localhost:3030/flights?date=${date}&origin=${origin}&destination=${dest}`)
      .then((res) => res.json())
      .then(data => {  
        return data.sort( 
        (a,b) => ((a.duration.hours*60)+a.duration.minutes)  -((b.duration.hours*60)+b.duration.minutes)
        );
      } )
      .then(data => {
        changeFlights(data);
      })
  }


  const tableRows = [];
for(let i=0; i<flights.length; i++){
  tableRows.push(
    <tr>
    <td>{flights[i].origin.city}</td>
    <td>{flights[i].destination.city}</td>
    <td>{flights[i].duration.locale}</td>
    </tr>
  );
}
 
  return (
    <div className="App-header tc">
      <Particles className = 'particles' 
                params = {particlesOptions} />
          <h1 className = 'h1'> Welcome to American Airlines </h1>

          {!submitted ? (
            <Comp onRouteChange={() => changeSubmitted(true)} />

          ) : (
            <>
              <input type="text" value={origin} onChange={e => changeOrigin(e.target.value)}/>
              <input type="text" value={dest} onChange={e => changeDest(e.target.value)}/>
              <input type="text" value={date} onChange={e => changeDate(e.target.value)}/>

              <button onClick= {getData}>
                Search
              </button>

              <table> 
                  <tr>
                  <th>Departure</th>
                  <th>Destination</th>
                  <th>Length</th>
                  </tr>
                <tbody>
                  {tableRows}
                </tbody>
              </table>
              
            </>
          )}
    </div>
  );
}

export default App;
