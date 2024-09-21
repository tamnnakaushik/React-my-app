import React, { useState } from 'react';
import './App.css';
import About from './components/about';
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import Alert from './components/alert';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated imports

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-danger')
}

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
     
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      // document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/about"
              element={<About mode={mode} />}
            />
            <Route
              exact
              path="/"
              element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character Counter, Remove extra space" mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
