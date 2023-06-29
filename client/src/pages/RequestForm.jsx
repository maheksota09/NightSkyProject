import React from "react";
import Header from "../components/PageHeader";
import Footer from "../components/Footer";
import "../styles/main-style.css";

function RequestForm() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <h1 className="title"> Nightsky Clearance Request</h1>
        <form action="#">
            <label>Location:</label>
            <input type="text" name="location" id="loc" /><br />
            <label>Latitude:</label>
            <input type="text" name="latitude" id="lat" />
            <label>Longitude:</label>
            <input type="text" name="longitude" id="long" />
            <label>Altitude:</label>
            <input type="text" name="altitude" id="alt" /><br />
            <label>Observation Period:</label>
            <input type="number" name="time-period" id="tp" /><br />
            <label >Observation Day (date and time):</label>
            <input type="datetime-local" id="booking" name="booking"/>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default RequestForm;
