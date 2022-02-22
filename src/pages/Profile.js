import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const auth = getAuth();
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.updateCurrentUser.email,
  });
  const { name, email } = formData;
  const onLogout = () => {
    auth.signOut();
    navigate('/');
  };
  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type="button" onClick={onLogout} className="logOut">
          Sign Out
        </button>
      </header>
    </div>
  );
};

export default Profile;
