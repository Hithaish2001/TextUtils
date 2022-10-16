import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'
import Alert from "./Components/Alert";
import About from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
      <Switch>
            <Route exact path="/">
            <TextForm heading='Enter your text here(or copy-paste is fine) to analyze' callshowAlert={showAlert}/>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
