import React from "react";
import Header from "../components/PageHeader";
import Footer from "../components/Footer";
import "../styles/main-style.css";

function Main() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <h1 className="title">SQUID3 Nightsky Web Clearance</h1>
        <div>
            <p>Lorem ipsum dolor sit amet. Aut iure velit ut repellendus facere est tempora odit vel tempora praesentium qui fugit molestiae. Et galisum harum sit quam ratione qui vero dolores est nihil sint ea asperiores quibusdam aut nisi
            Lorem ipsum dolor sit amet. Aut iure velit ut repellendus facere est tempora odit vel tempora praesentium qui fugit molestiae. Et galisum harum sit quam ratione qui vero dolores est nihil sint ea asperiores quibusdam aut nisi
            </p>

            <p>Click <a>here</a> to make <span className="req">request</span></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
