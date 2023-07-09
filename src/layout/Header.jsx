import React from 'react'

import "../assets/style/Navigation.css";
import "../assets/style/Header.css";

import Navigation from "../components/Navigation";
import Showcase from '../components/Showcase';

import { useUser } from "../provider/UserProvider";

const Header = () => {
  const { isAuthenticated, logout } = useUser();

  return (
    <>
    <header className="navbar">
      <Navigation isLoggedIn={isAuthenticated} onLogout={logout} />
      <Showcase></Showcase>
    </header>
    
    </>
  );
};

export default Header