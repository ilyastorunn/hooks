import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import State from "./pages/State";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/State" element={<State/>} />
      </Routes>
    </Router>
  );
}

export default App;
