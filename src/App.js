import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//COMPONENTS
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
