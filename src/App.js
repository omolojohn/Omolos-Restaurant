import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Navbar from "./Navbar";
import Home from "./Home"; // Import your Home component


function App () {
  return (
    <Router>
      <div>
        <Navbar />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;