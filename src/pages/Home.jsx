import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/2.svg';
import './Home.css';


const Home = () => {
  return (
    <div className="mb-5" id="home">
      <main role="main">
        <div className="jumbotron mb-auto bg-white">
          <div className="container jumboHead">
            <div className="text mr-3">
              <h1 className="display-3 font-weight-bold">Hello, world!</h1>
              <p className="mb-4 lead">Welcome to my Personal Website</p>
              {/* <p><Link className="btn btn-dark btn-lg" to="/profile" role="button">View my profile &raquo;</Link></p> */}
              <div class="heading-title bg-dark text-white mb-5"><h5 className="pt-1"><a href="#profile" className="text-white"><span>View my profile </span></a></h5></div>
            </div>
            <div className="image">
              <img src={logo} width="450"></img>
            </div>
          </div>
        </div>
      </main>
    </div>

  )
};

export default Home;