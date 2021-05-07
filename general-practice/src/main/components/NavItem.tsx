import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.css";

type Props = {
  to: string;
  text: string;
  description: string;
};

const NavItem: React.FC<Props> = ({ to, text, description }) => {
  return (
    <li className="navItem">
      <NavLink className="navItem__link" to={to}>
        <span>{text}</span>
        <span>{description}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
