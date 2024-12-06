// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Signup() {
//   let [name, setName] = useState('');
//   let [mobileNo, setMobileNo] = useState('');
//   let [email, setEmail] = useState('');
//   let [password, setPassword] = useState('');
//   let [message, setMessage] = useState('');
//   let [show, setShow] = useState(false);

//   let handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   const collectData = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     if (!name || !mobileNo || !email || !password) {
//       setMessage('All fields are required!');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/userApp/signup', {
//         method: 'POST',
//         body: JSON.stringify({ name, mobileNo, email, password }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setMessage('Signup successful!');
//         console.log(result);
//         handleClose(); // Close the modal on success
//       } else {
//         setMessage(result.message || 'Signup failed. Please try again.');
//       }
//     } catch (error) {
//       console.error(error);
//       setMessage(' Please try again later.');
//     }
//   };

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Sign Up
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Signup Form</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={collectData}>
//             {message && <p className="text-center text-danger">{message}</p>}

//             <Form.Group className="mb-3">
//               <Form.Label>Username</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Mobile No</Form.Label>
//               <Form.Control
//                 type="tel"
//                 value={mobileNo}
//                 onChange={(e) => setMobileNo(e.target.value)}
//                 placeholder="Enter your mobile number"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//               />
//             </Form.Group>

//             <Button variant="success" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default Signup;

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
  let [name, setName] = useState('');
  let [mobileNo, setMobileNo] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [message, setMessage] = useState('');
  let [show, setShow] = useState(false);

  let handleShow = () => setShow(true);
  let handleClose = () => setShow(false);

  let collectData = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!name || !mobileNo || !email || !password) {
      setMessage('All fields are required!');
      return;
    }

    try {
      let response = await fetch('http://localhost:5000/userApp/signup', {
        method: 'POST',
        body: JSON.stringify({ name, mobileNo, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      let result = await response.json();
      if (response.ok) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            name: name,
            mobileNo: mobileNo,
            email: email,
            password:password
          })
        );

        setMessage('Signup successful!');
        console.log(result);
        handleClose(); // Close the modal on success
      } else {
        setMessage(result.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setMessage('Signup failed. Please try again later.');
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signup Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={collectData}>
            {message && <p className="text-center text-danger">{message}</p>}

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                type="tel"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                placeholder="Enter your mobile number"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signup;
































