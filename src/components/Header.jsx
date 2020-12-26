import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import './Header.css';

const Header = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-ligth">
    //   <div className="container container-fluid">
    //     <div>
    //       <img src={logo} width="25"></img>
    //       <Link className="navbar-brand text-dark ml-2" to="/home">Afif Firdaus</Link>
    //     </div>
    //     <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarsExample07">
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item">
    //           <a className="nav-link text-dark" href="">Home</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link text-dark" href="#profile">Profile</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link text-dark" href="#portofolio">Portofolio</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container container-fluid">
        <div>
          <img src={logo} width="25" className="pb-1"></img>
          <Link className="navbar-brand ml-2 text-white font-weight-bold" to="/">Afif Firdaus</Link>
        </div>
        <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li> */}
            <li className="nav-item">
              <a className="nav-link text-white mr-2" href="#portofolio">Portofolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#profile">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header;