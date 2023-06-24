import React, {} from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
// Pages
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import NoPage from "./pages/NoPage";
import Home from "./pages/Home";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  // Used to create navigation to different pages in application
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LogIn" element={<LogIn />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          {/*Catches unusual requests and forwards to 404*/}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App