import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LogIn-SignUp.css";

function PageHeader() {
    // Requirements Left
        // Insert SQUID3 Logo
        // Change Font to Gugi
        // Change Background Photo
        // Link to correct pages
        // Add hover functionality if desired (I just changed color to the golden we have)
        // Add functionality to know if user is logged in

    const navigate = useNavigate();

    function handleBtn(e, path) {
        e.preventDefault();

        // if request button
        if (path === "Request") {
            navigate("/Request")
        }
        // if login button
        else if (path === "LogIn") {
            navigate("/LogIn")
        }
        // if about us button or logo
        else if (path === "AboutUs") {
            navigate("/")
        }
    }

    return (
        <div className="row header-row align-items-center">
            <div className="col-8 header-logo">
                    Insert Logo
                </div>
            <div className="row col-4">
                <div className="col-4 header-about-us" onClick={event => handleBtn(event, "AboutUs")}>
                    About Us
                </div>
                <div className="col-4 header-request" onClick={event => handleBtn(event, "Request")}>
                    Request
                </div>
                <div className="col-4 header-log-in" onClick={event => handleBtn(event, "LogIn")}>
                    Log In
                </div>
            </div>
        </div>
    );
}

export default PageHeader