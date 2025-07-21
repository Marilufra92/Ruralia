import React from "react";
import { NavLink } from "react-router-dom";
import { House, Map, Search, User } from "lucide-react";
import "./BottomNavbar.css";

export default function BottomNavbar() {
  return (
    <nav className="bottom-navbar">
      <NavLink to="/" className="nav-item">
        <House size={24} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/map" className="nav-item">
        <Map size={24} />
        <span>Mappa</span>
      </NavLink>
      <NavLink to="/search" className="nav-item">
        <Search size={24} />
        <span>Cerca</span>
      </NavLink>
      <NavLink to="/profile" className="nav-item">
        <User size={24} />
        <span>Profilo</span>
      </NavLink>
    </nav>
  );
}
