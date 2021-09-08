/**
 * This the root Overview page of console.
 * Show basic welcome message and some UI
 */

import React from "react";
import "./Testing.css";
import Sidenav from "../../Components/Sidenav/Sidenav.js";

function Testing() {
  return (
    <div className="Testing">
      <div className="main-container">
        <Sidenav />
        <div className="content-container">
          <div className="content">
            <div className="header">
              <h1>Action</h1>
              <p>
                Enagage with user in realtime with live-chat & targeted
                push-notification
              </p>
            </div>
            <h1 style={{ margin: "10% 0 0 0 " }}> 🏗 Coming Soon ..</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testing;
