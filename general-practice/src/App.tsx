import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./main/MainRoutes";

function App() {
  return (
    <Router>
      <div className="app">
        <MainRoutes />
      </div>
    </Router>
  );
}

export default App;
