import React from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Portofolio from './pages/Portofolio';
import Header from './components/Header';
import Footer from './components/Footer';
// import Modal from './components/Modal';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
      

export default function App() {
  return (
      <div>
        <Header />
        {/* <Modal /> */}
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Home />
        <Portofolio />
        <Profile />
        <Footer />
      </div>
  );
};