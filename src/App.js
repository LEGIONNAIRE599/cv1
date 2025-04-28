import React from 'react';
import Header from './Header';
import './Header.css'; // Assure-toi que le chemin est correct
import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';
import './App.css'; // Importe le CSS global

function App() {
  return (
    <div className="app-container">
      <Header />
      <Profile />
      <Experience />
      <Education />
      <Skills />
      <Interests />
    </div>
  );
}

export default App;