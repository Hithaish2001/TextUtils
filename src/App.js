import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'
import Alert from "./Components/Alert";

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
    <Navbar title='TextUtil.' />
    <Alert alert={alert}/>
    <TextForm heading='Enter your text here(or copy-paste is fine) to analyze' callshowAlert={showAlert}/>
    </>
  );
}

export default App;
