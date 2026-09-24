import React from 'react';
import '../styles/ProfileCard.css';
import profileImage from '../assets/profile.webp';

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img
          src={profileImage}
          alt="Vincent BALAZUT"
          className="profile-image"
        />
      </div>
      <h1 className="profile-name">Vincent BALAZUT</h1>
      <p className="profile-description">Founder</p>
    </div>
  );
}

export default ProfileCard;
