import axios from "axios";
import "./App.css";
const apiKey = process.env.REACT_APP_TM_API;

function App() {
  function getData() {
    axios
      .get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <button onClick={getData}>Testing</button>
    </div>
  );
}

export default App;
