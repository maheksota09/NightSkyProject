import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function login({}) {
    // Creating user variables with hooks
    const navigate = useNavigate();
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();

        // construct api request

        // send api request
    }


} return (
    <div>

    </div>
)

export default login