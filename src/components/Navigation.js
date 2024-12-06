// import React from 'react';
// import style from "./Navigation.module.css";
// import { Link } from 'react-router-dom';
// import Signin from './Signin';
// function Navigation() {
//     const [show, setShow] = useState(false);

//     const handleShow = () => setShow(true);

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark amazon-navbar">
//                 <div className="container-fluid">
//                     <Link to="/" className="navbar-brand">
//                         <img src="/images/image.png" width="100" height="35" alt="Amazon Logo" />
//                     </Link>
//                     <span className="ft">.in</span>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <a className="nav-link text-white" href="#location">
//                                     {/* <i className="bi bi-geo-alt" style={{ color: 'white' }}></i>
//                                     <span>Delivering to Pune 425412</span> <br />
//                                     <b>Update Location</b> */}
//                                 </a>
//                             </li>
//                         </ul>
//                         <form className="d-flex search-bar">
//                             <input className={style.formControl} type="search " placeholder="Search Amazon.in" aria-label="Search " />
//                             <button className="btn btn-warning" type="submit">
//                                 <i className="bi bi-search"></i>
//                             </button>
//                         </form>
//                         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
//                                     Sign in
//                                 </a>
//                                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                     <li>
//                                         <Link className="dropdown-item" to="/signin">SignIn</Link>
//                                     </li>
//                                     <li>
//                                         <Link className="dropdown-item" to="/signup">{handleshow}SignUp</Link>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link text-white" href="#cart">
//                                     <i className="bi bi-cart-fill"></i>
//                                     <li>
//                                         <Link className='dropdown-item' to="/cart"> Cart</Link>
//                                     </li>
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }
// export default Navigation;
// import React, { useState } from 'react';
// import style from "./Navigation.module.css";
// import { Link } from 'react-router-dom';
// import Signin from './Signin';
// import Signup from './Signup'; // Import Signup component

// function Navigation() {
//   const [showSignup, setShowSignup] = useState(false); // State to control Signup modal

//   const handleShowSignup = () => setShowSignup(true); // Function to show Signup modal
//   const handleCloseSignup = () => setShowSignup(false); // Function to close Signup modal

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark amazon-navbar">
//         <div className="container-fluid">
//           <Link to="/" className="navbar-brand">
//             <img src="/images/image.png" width="100" height="35" alt="Amazon Logo" />
//           </Link>
//           <span className="ft">.in</span>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link text-white" href="#location"></a>
//               </li>
//             </ul>
//             <form className="d-flex search-bar">
//               <input className={style.formControl} type="search" placeholder="Search Amazon.in" aria-label="Search" />
//               <button className="btn btn-warning" type="submit">
//                 <i className="bi bi-search"></i>
//               </button>
//             </form>
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Sign in
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li>
//                     <Link className="dropdown-item" to="/signin">Sign In</Link>

//                   <li>
//                     <span className="dropdown-item" onClick={handleShowSignup}>Sign Up</span> {/* Show Signup Modal */}
//                   </li>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link text-white" href="#cart">
//                   <i className="bi bi-cart-fill"></i>
//                   <Link className='dropdown-item' to="/cart"> Cart</Link>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Signup Modal */}
//       <Signup show={showSignup} handleClose={handleCloseSignup} />
//     </>
//   );
// }

// export default Navigation;
// import React, { useState } from 'react';
// import style from "./Navigation.module.css";
// import { Link } from 'react-router-dom';
// import Signup from './Signup';
// import Signin from './Signin';

// function Navigation() {
//     let [showSignup, setShowSignup] = useState(false);

//     let handleShowSignup = () => setShowSignup(true);
//     let handleCloseSignup = () => setShowSignup(false);

//     let [showSignin,setShowSignin]=useState(false);
//     let handleShowSignin=()=>setShowSignin(true);
//     let handleCloseSignin=()=>setShowSignin(false);

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark amazon-navbar">
//                 <div className="container-fluid">
//                     <Link to="/" className="navbar-brand">
//                         <img src="/images/image.png" width="100" height="35" alt="Amazon Logo" />
//                     </Link>
//                     <span className="ft">.in</span>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <form className="d-flex search-bar">
//                         <input className={style.formControl} type="search" placeholder="Search Amazon.in" aria-label="Search" />
//                         <button className="btn btn-warning" type="submit">
//                             <i className="bi bi-search"></i>
//                         </button>
//                     </form>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                             <li className="nav-item dropdown">
//                                 <a
//                                     className="nav-link dropdown-toggle text-white"
//                                     href="#"
//                                     id="navbarDropdown"
//                                     role="button"
//                                     data-bs-toggle="dropdown"
//                                     aria-expanded="false"
//                                 >
//                                     Sign in
//                                 </a>
//                                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                     <li>
//                                         {/* <Link className="dropdown-item" to="/signin">Sign In</Link> */}
//                                         <span className="dropdown-item" onClick={handleShowSignin}>

//                                         </span>
//                                         <Signin show={showSignin} handleClose={handleCloseSignin} />

//                                     </li>
//                                     <li>
//                                         {/* Use onClick to trigger modal */}
//                                         <span className="dropdown-item" onClick={handleShowSignup}>

//                                         </span>
//                                         <Signup show={showSignup} handleClose={handleCloseSignup} />

//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link text-white" to="/cart">
//                                     <i className="bi bi-cart-fill"></i> Cart
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             {/* Signup Modal rendered outside of the dropdown */}
//         </>
//     );
// }

// export default Navigation;
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
