import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Signin() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [modalMessage, setModalMessage] = useState("");
  let [show, setShow] = useState(false); // For modal visibility
  let [userName, setUserName] = useState(null); // Store the user's name

  let handleShow = () => setShow(true);
  let handleClose = () => setShow(false);

  // Check if user is already signed in
  useEffect(() => {
    let storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.name) {
      setUserName(storedUser.name);
    }
  }, []);

  let handleLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:5000/userApp/signin", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let result = await response.json();
      if (result.name) {
        localStorage.setItem("user", JSON.stringify(result));
        setUserName(result.name); // Update userName state with logged-in user
        setModalMessage("Sign in successful!");
        setTimeout(() => {
          handleClose(); // Close modal after 1 second
        }, 1000);
      } else {
        setModalMessage("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error in login request:", error);
      setModalMessage("An error occurred during sign in.");
    }
  };

  return (
    <>
      {/* Button to open Signin modal or show user's name */}
      <Button variant="primary" onClick={handleShow}>
        {userName ? `Hello, ${userName}` : "Sign In"}
      </Button>

      {/* Signin Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            {modalMessage && (
              <p className="text-center text-danger">{modalMessage}</p>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signin;
