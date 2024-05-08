import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import Navbar from "./Navbar";
import "./App.css";
import './App.css'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
     <Navbar />
      
        <Routes>

          
         
          <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
          
    </div>
  </Router>  
  );
}
export default App;