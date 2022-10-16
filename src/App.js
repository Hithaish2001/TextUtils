import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
import About from "./Components/About";
 import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [alert, setalert] = useState(null)

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setalert(null)
    }, 3000);
  }

  return (
    <>
    <Router>
      <Navbar title='TextUtil.' />
      <Alert alert={alert}/>
      <div className="">
        <Routes>
          <Route path="/About" element={<About/>}/>
          <Route path="/" element={<TextForm heading='Enter your text here(or copy-paste is fine) to analyze' callshowAlert={showAlert}/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
