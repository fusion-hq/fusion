/**
 * This is the side navigation bar used in
 *  pages like overview, devices, producst etc
 * for navigating between root pages of console
 */

import React, { useState, useEffect } from "react";
import "./Sidenav.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useThemeSwitcher } from "react-css-theme-switcher";
import {
  MousePointer,
  Tool,
  Flag,
  Users,
  BarChart2,
  TrendingUp,
  Day,
  Night,
  MessageCircle,
  MessageSquare,
} from "react-feather";
import Logo from "../../Asset/fusion-logo-blue-white.svg";
import { Menu, Dropdown, Divider, Button, Switch } from "antd";
import { useAuth0 } from "@auth0/auth0-react";

function Sidenav({ subPath, visible }) {
  let location = useLocation();
  let history = useHistory();

  const { logout, user } = useAuth0();
  const { picture, email } = user;

  const { switcher, themes, currentTheme, status } = useThemeSwitcher();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const centerStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  // Function Definition: Check & return cookie and if unavailable returns null
  function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin === -1) {
      begin = dc.indexOf(prefix);
      if (begin !== 0) return null;
    } else {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end === -1) {
        end = dc.length;
      }
    }
    return decodeURI(dc.substring(begin + prefix.length, end));
  }

  var savedTheme = getCookie("theme");
  // check for userId cookie and create one if unavaialable
  if (savedTheme == null) {
    document.cookie = `theme=dark; expires=Thu, 18 Dec 3000 12:00:00 UTC`;
  }

  if (savedTheme === "light") {
    switcher({ theme: true ? themes.light : null });
  } else {
    switcher({ theme: true ? themes.dark : null });
  }

  const menu = (
    <Menu mode="vertical" style={centerStyle}>
      <img src={picture} id="profile-pic" alt="profile-pic" />
      <h1 id="username">{email}</h1>
      <Divider style={{ marginBottom: "15px", marginTop: "10px" }} />
      {/**
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
      */}
      <Button
        danger
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Sign Out
      </Button>
    </Menu>
  );

  const toggleTheme = (isChecked) => {
    switcher({ theme: isChecked ? themes.dark : themes.light });
    document.cookie = `theme=${
      isChecked ? "dark" : "light"
    }; expires=Thu, 18 Dec 3000 12:00:00 UTC`;
  };

  //svg icon color state
  const [icon1Color, setIcon1Color] = useState("#93AAC4");
  const [icon2Color, setIcon2Color] = useState("#93AAC4");
  const [icon3Color, setIcon3Color] = useState("#93AAC4");
  const [icon4Color, setIcon4Color] = useState("#93AAC4");
  const [icon5Color, setIcon5Color] = useState("#93AAC4");
  const [icon6Color, setIcon6Color] = useState("#93AAC4");

  // sideanve navlink background color state
  const [icon1BgColor, setIcon1CBgolor] = useState("none");
  const [icon2BgColor, setIcon2CBgolor] = useState("none");
  const [icon3BgColor, setIcon3CBgolor] = useState("none");
  const [icon4BgColor, setIcon4CBgolor] = useState("none");
  const [icon5BgColor, setIcon5CBgolor] = useState("none");
  const [icon6BgColor, setIcon6CBgolor] = useState("none");

  const [sideNavVisible, setSideNavDisplay] = useState("flex");

  // Executes each time new page loads,
  //finds current route and based on that sets iconColor variable value
  useEffect(() => {
    /*
    var currentRoute = location.pathname;
    console.log(currentRoute);
    */

    switch (location.pathname) {
      case "/":
        history.push("/users");
        break;

      case "/dashboard":
        setIcon1Color("#d1e9ff");
        setIcon1CBgolor("#1890FF");
        break;

      case `/dashboard/${subPath}`:
        setIcon1Color("#d1e9ff");
        setIcon1CBgolor("#1890FF");
        break;

      case "/users":
        setIcon2Color("#d1e9ff");
        setIcon2CBgolor("#1890FF");
        break;

      case `/user`:
        setIcon2Color("#d1e9ff");
        setIcon2CBgolor("#1890FF");
        break;

      case `/user/${subPath}`:
        setIcon2Color("#d1e9ff");
        setIcon2CBgolor("#1890FF");
        break;

      case "/events":
        setIcon3Color("#d1e9ff");
        setIcon3CBgolor("#1890FF");

        break;
      case "/insights":
        setIcon4Color("#d1e9ff");
        setIcon4CBgolor("#1890FF");

        break;
      case "/action":
        setIcon5Color("#d1e9ff");
        setIcon5CBgolor("#1890FF");

        break;
      case "/settings":
        setIcon6Color("#d1e9ff");
        setIcon6CBgolor("#1890FF");

        break;
      default:
        setIcon1Color("#5D7290");
        setIcon2Color("#5D7290");
        setIcon3Color("#5D7290");
        setIcon4Color("#5D7290");
        setIcon5Color("#5D7290");
        setIcon6Color("#5D7290");

        setIcon1CBgolor("#none");
        setIcon2CBgolor("#none");
        setIcon3CBgolor("#none");
        setIcon4CBgolor("#none");
        setIcon5CBgolor("#none");
        setIcon6CBgolor("#none");

        break;
    }
  }, [location.pathname]);

  return (
    <div className="sidebar-container" style={{ display: visible }}>
      <div className="logo-container">
        <img id="fusion-logo" src={Logo} alt="" />
      </div>

      <div className="sidebar-option-container">
        <Link to="/dashboard" className="router-link">
          <div
            className="nav-link"
            style={{ backgroundColor: `${icon1BgColor}` }}
          >
            <BarChart2 size="25px" color={icon1Color} />
            <h1 style={{ color: `${icon1Color}` }}>Dashboard</h1>
          </div>
        </Link>

        <Link to="/insights" className="router-link">
          <div
            className="nav-link"
            style={{ backgroundColor: `${icon4BgColor}` }}
          >
            <TrendingUp size="25px" color={icon4Color} />
            <h1 style={{ color: `${icon4Color}` }}>Insights</h1>
          </div>
        </Link>

        <Link to="/users" className="router-link">
          <div
            className="nav-link"
            style={{ backgroundColor: `${icon2BgColor}` }}
          >
            <Users size="25px" color={icon2Color} />
            <h1 style={{ color: `${icon2Color}` }}>Users</h1>
          </div>
        </Link>

        <Link to="/events" className="router-link">
          <div
            className="nav-link"
            style={{ backgroundColor: `${icon3BgColor}` }}
          >
            <MousePointer size="25px" color={icon3Color} />
            <h1 style={{ color: `${icon3Color}` }}>Events</h1>
          </div>
        </Link>

        <Link to="/action" className="router-link">
          <div
            className="nav-link"
            style={{ backgroundColor: `${icon5BgColor}` }}
          >
            <MessageCircle size="25px" color={icon5Color} />
            <h1 style={{ color: `${icon5Color}` }}>Action</h1>
          </div>
        </Link>

        <Link to="/settings" className="router-link">
          <div
            className="nav-link"
            style={{ backgroundColor: `${icon6BgColor}` }}
          >
            <Tool size="25px" color={icon6Color} />
            <h1 style={{ color: `${icon6Color}` }}>Settings</h1>
          </div>
        </Link>
      </div>
      <div className="user">
        <Switch
          defaultChecked
          checked={currentTheme === themes.dark}
          onChange={toggleTheme}
          style={{ margin: "0px 0px 10px 0px" }}
        />

        <Dropdown id="user-pic" overlay={menu} placement="topRight">
          <img src={picture} className="user-pic" alt="profile-pic" />
        </Dropdown>
      </div>
    </div>
  );
}

export default Sidenav;
