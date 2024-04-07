import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Pong from "./pages/Pong.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/pong" element={<Pong />} />
      </Routes>
    </Router>
  );
}

export default App;
