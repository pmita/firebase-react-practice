import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//COMPONENTS
import Navbar from './components/layout/Navbar';
//PAGES
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
          <Route path='/project/:id' element={<ProjectDetails />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
