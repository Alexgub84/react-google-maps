import "./assets/css/main.css";
import { GoogleMap } from "./cmps/GoogleMap.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">React Google Maps</header>
      <main>
        <GoogleMap/>
      </main>
      <footer>Alex Guberman</footer>
    </div>
  );
}

export default App;
