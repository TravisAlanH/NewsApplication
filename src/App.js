import axios from "axios";
import "./App.css";
const apiKey = process.env.REACT_APP_API;

function App() {
  function getData() {
    axios
      .get(`https://newsapi.org/v2/everything?q=Apple&from=2023-01-24&sortBy=popularity&apiKey=${apiKey}`)
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
