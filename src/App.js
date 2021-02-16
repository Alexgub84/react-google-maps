import "./assets/css/main.css";
import { GoogleMap } from "./cmps/GoogleMap.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google Maps</h1>
      </header>
      <main className="main-container">
        <GoogleMap />
      </main>
      <footer>Alex Guberman</footer>
    </div>
  );
}

export default App;
