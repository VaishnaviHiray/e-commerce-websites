import React, { useState } from 'react';
import style from "./Navigation.module.css";
import { Link } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';

function Navigation() {
  let [showSignup, setShowSignup] = useState(false);
  let handleShowSignup = () => setShowSignup(true);
  let handleCloseSignup = () => setShowSignup(false);

  let [showSignin, setShowSignin] = useState(false);
  let handleShowSignin = () => setShowSignin(true);
  let handleCloseSignin = () => setShowSignin(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark amazon-navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="/images/image.png" width="100" height="35" alt="Amazon Logo" />
          </Link>
          <span className="ft">.in</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="d-flex search-bar">
               <input className={style.formControl} type="search" placeholder="Search Amazon.in" aria-label="Search" />
               <button className="btn btn-warning" type="submit">
                 <i className="bi bi-search"></i>
               </button>
            </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-outline-light me-2" onClick={handleShowSignin}>
                {showSignup && <Signup show={showSignup} handleClose={handleCloseSignup} handleShowSignin={handleShowSignin} />}

                
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-warning" onClick={handleShowSignup}>
                {showSignin && <Signin show={showSignin} handleClose={handleCloseSignin} handleShowSignup={handleShowSignup} />}

                  
                </button>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link text-white" to="/cart">
                  <i className="bi bi-cart-fill"></i> Cart
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* Signin and Signup Modals */}
    </>
  );
}

export default Navigation;
