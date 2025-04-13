import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import useState from "./pages/useState";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}  />
      </Routes>
    </Router>
  );
}

export default App;
