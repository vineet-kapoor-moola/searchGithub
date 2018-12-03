import React from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="navbar-fixed">
      <nav className="blue">
        <div className="container nav-wrapper">
          <a href="#" className="brand-logo left">
            <img
              src={logo}
              style={{ height: "25px", width: "75px" }}
              alt="logo"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
