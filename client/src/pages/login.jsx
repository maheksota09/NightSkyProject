import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles/LogIn-SignUp.css";
import { auth, googleLogIn } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Header from "../components/PageHeader";
import AuthDetails from "../components/AuthDetails";

function LogIn() {
  // Creating user variables with hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handles if user needs to sign up
  function handleAltBtn(e) {
    e.preventDefault();
    navigate("/SignUp");
  }
  // function to handle authentication will be below
  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <div> <Header></Header>
      <div className="d-flex align-items-center justify-content-center">
        <div className="text-center col-4 authWrapper">
          <form onSubmit={handleLogIn}>
            <h2 className="mb-4">Log In</h2>
            <div className="mb-3">
              <label htmlFor="email" className="form-label col-12">
                Email
              </label>
              <input type="email" className="form-control email" id="LogInEmail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div> {/* Trying to figure out how to change the h2 styling, header left and changing color to logo*/}
            <div className="mb-4">
              <label htmlFor="password" className="form-label col-12">
                Password
              </label>
              <input type="password" className="form-control password" id="LogInPassword" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <p className="mb-2">
              <Button type="submit" color="red" className="col-12 mb-4 account-submission-button">Log In</Button>
            </p>
          </form>
          <p className="mb-4">
            Need to Sign Up?
          </p>

          <AuthDetails />

          <div className="col-12">
            <a href="https://www.google.com" className="col-4" onClick={googleLogIn}>
              <svg className="google-account-logo" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g
                id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>google</title>
                  <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect>
                    <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M24.7,20.5v7.6H35.6a10.9,10.9,0,0,1-10.9,8,12.1,12.1,0,1,1,7.9-21.3l5.6-5.6A20,20,0,1,0,24.7,44c16.8,0,20.5-15.7,18.9-23.5Z"></path> </g> </g> </g>
              </svg>
            </a>
            <Button variant="primary" className="col-4 alt-btn" onClick={event => handleAltBtn(event)}>Sign Up</Button>
          </div>

        </div>
      </div>
    </div>
  );
}
export default LogIn