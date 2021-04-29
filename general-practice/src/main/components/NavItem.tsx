import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.css";

type Props = {
  to: string;
  text: string;
};

const NavItem: React.FC<Props> = ({ to, text }) => {
  return (
    <li className="navItem">
      <NavLink to={to}>{text}</NavLink>Í
    </li>
  );
};

export default NavItem;
