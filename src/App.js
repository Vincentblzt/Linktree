import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="app">
      <ProfileCard />
      <SocialLinks />
    </div>
  );
}

export default App;
