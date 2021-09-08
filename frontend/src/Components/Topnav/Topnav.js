/**
 * This is the top navigation bar of console, currently only shows
 * fusion logo and logout utility. logout logic is also written here
 */

import React from "react";
import "./Topnav.css";
import { GitHub } from "react-feather";
import { Menu, Dropdown, Divider } from "antd";
import { useAuth0 } from "@auth0/auth0-react";

const Topnav = () => {
  const { logout, user } = useAuth0();
  const { name, picture, email } = user;

  const centerStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  const menu = (
    <Menu mode="vertical" style={centerStyle}>
      <img src={picture} id="profile-pic" alt="profile-pic" />

      <h1 id="username">{email}</h1>
      <Divider style={{ marginBottom: "15px", marginTop: "10px" }} />
      <button
        id="signout-button"
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Sign Out
      </button>
    </Menu>
  );

  return (
    <div className="Topnav">
      <a
        href="https://github.com/fusion-hq"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub id="github-icon" size="25px" color="#1D293B" />
      </a>

      <Dropdown id="account-button" overlay={menu} placement="bottomLeft">
        <img src={picture} className="account-button" alt="profile-pic" />
      </Dropdown>
    </div>
  );
};

export default Topnav;
