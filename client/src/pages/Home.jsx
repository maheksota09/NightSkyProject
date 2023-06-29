import React, { useState, useEffect } from "react";
// import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";

function Home() {
    // Creating a data variable that contains values from flask backend
    const [data, setData] = useState({ members: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("/home").then(
        res => res.json()
        ).then(
        data => {
            setIsLoading(false);
            setData(data);
            console.log(data);
        }
        )
    },[])

    return (
        <div>
            <h1>Welcome to SQUID3!</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <p> {data.Hello[0]} </p>
            )}
        </div>
    );
  };
  
  export default Home;