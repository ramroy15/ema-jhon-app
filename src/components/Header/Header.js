import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/Order">Order</a>
        <a href="/Order Review">Order-Review</a>
        <a href="/Manage-Inventory">Mana-Inventory</a>
        <a href="/LogIn">Login</a>
      </div>
    </nav>
  );
};

export default Header;
