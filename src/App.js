
import './App.css'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";




function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState('null');

  const showalert = (massage, type) => {
    setalert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000)

  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode is enabled", "success")
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = 'gray';
      showalert("Dark mode is enabled", "success")

    }

  }
  return (
    <>

      <BrowserRouter>

    
        <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />


        <div className='container my-3'>

          <Routes>


            <Route path="/" element={<TextForm showalert={showalert} heading='Enter The text to analyze below' mode={mode} />} />
            <Route path="about/*" element={<About />} />




          </Routes>

        </div>

      </BrowserRouter >


    </>

  );
}

export default App;
