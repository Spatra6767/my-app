
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import './App.css';  
import About from './components/About';
import React, {useState} from 'react';



function App() {
  const [mode, setMode] = useState('light'); // Whether light mode is enabled or not
  const [text, setText] = useState('Enable Dark Mode');
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#212529';
      setText('Enable Light Mode');
      
    } else{
      setMode('light');
      document.body.style.backgroundColor='white';
      setText('Disable light Mode');
    }
  }
  return (
    <>
     <Navbar mode={mode} toggleMode={toggleMode} text={text}/>
     <div className="container my-3">
     <Textforms  mode={mode} toggleMode={toggleMode} />
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
