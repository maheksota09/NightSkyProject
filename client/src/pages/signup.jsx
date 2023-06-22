import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function SignUp() {
    // Creating user variables with hooks
    // const navigate = useNavigate();
    // const [username, setUser] = useState("");
    // const [password, setPassword] = useState("");

    function handleSignUp(e) {
        e.preventDefault();

        // construct api request

        // send api request
    }
// THIS IS A WORK IN PROGRESS

 return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h2 className="mb-4">Sign Up</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control email" id="SignUpEmail"/>
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control password" id="SignUpPassword"/>
        </div>
        <p className="mb-4">
          Already a User?{" "}
          <Link to="/signup">
            {/* <Button variant="link">Sign Up</Button> */}
          </Link>
        </p>
        <a href="https://www.google.com">
          <img
            src="google_logo.png"
            alt="Google Logo"
            width="24"
            height="24"
            className="mb-3"
          />
        </a>
        {/* <Button variant="primary">Sign Up</Button> */}
      </div>
    </div>
 );
}
export default SignUp