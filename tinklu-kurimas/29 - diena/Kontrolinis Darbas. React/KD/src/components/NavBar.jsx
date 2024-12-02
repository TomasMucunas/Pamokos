import React from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css";

function NavBar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#ddd" }}>
      <h1>Biblioteka</h1>
      <ul style={{ display: "flex", listStyleType: "none", gap: "20px", margin: 0 }}>
        <li><Link to="/">Pagrindinis</Link></li>
        <li><Link to="/add-book">Pridėti knygą</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
