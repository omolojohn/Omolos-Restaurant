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
          {/* Define other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;