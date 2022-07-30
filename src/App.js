//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alerts from './components/Alerts';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode= ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
    }

  }
  return (
  
    <>
    
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}aboutText="About"/>
    {/*<Alerts alert='This is alert'/>*/}
    <div className="container my-3">
     <TextForm heading="Enter the text to analyse" mode={mode}/>
       {/*<About/>*/}
    </div>
    
    </>
    
  );
}

export default App;
