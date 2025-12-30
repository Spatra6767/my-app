
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import './App.css';  
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import Alert2 from './components/Alert2';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link  
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // Whether light mode is enabled or not
  const [text, setText] = useState('Enable Dark Mode');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#212529';
      setText('Enable Light Mode'); 
      showAlert('Dark mode enabled', 'success');
      
    } else{
      setMode('light');
      document.body.style.backgroundColor='white';
      setText('Disable light Mode');
      showAlert('Light mode enabled', 'success');
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
    <Router>
     <Navbar mode={mode} toggleMode={toggleMode} text={text}/>
     {/* <Alert Alert={alert}/> */}
     <Alert2 Alert={alert}/>
     <div className="container my-3">
       <Routes>
        //you can path but exact path is must to avoid errors.If you do not use exact then it will always match first route and will not go to second route.As example "/" is present in "/about" so it will always match first route.
       <Route exact path="/about" element={<About />} />
       <Route  exact path="/" element={<Textforms mode={mode}  toggleMode={toggleMode} showAlert={showAlert}/>} />
       </Routes>
      {/* <About/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
