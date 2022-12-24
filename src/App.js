import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const [mode, SetMode] = useState("light");
  const[alert, SetAlert] = useState(null);

  const toggleMode = () => 
  {
    if(mode === 'light')
    {
      SetMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled", 'success');
    }
    else{
      SetMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", 'success');
    }
  }

  const showAlert = (msg, type) =>
  {
    SetAlert({
      msg : msg,
      type: type
    })
    setTimeout(() => {
      SetAlert(null)
    }, 1000);
  }

  const[color, SetColor] = useState(null);
  
  const FillColor = () =>
  {
    SetColor({
      red : 'red',
      blue : 'blue',
      green : 'green'
    })
  }

  return (
    <>
    <Router>
      <Navbar title='TextUtils' FillColor={FillColor} mode={mode} toggle={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container' >
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element= {<TextForm name='Enter your data' mode = {mode} showAlert= {showAlert}/>} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
