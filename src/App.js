import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//COMPONENTS
import Navbar from './components/layout/Navbar';
//PAGES
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
