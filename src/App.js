import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='#1c3d6b'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }

  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter the text to analyze" mode={mode} />
      <About />
    </>
  );
}

export default App;
