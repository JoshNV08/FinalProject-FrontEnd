import React from "react";
import { NavLink } from "react-router-dom";

function Filter() {
  return (
<div className="order  d-flex justify-content-center">
    <div className="order rounded-1">
    <ul className="d-flex justify-content-center gap-4 ">
      <li className="">
        <NavLink to="/menu/menu-burgers" activeClassName="active">
  
          Burgers
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/menu/menu-snacks" activeClassName="active">
          Snacks
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/menu/menu-bebidas" activeClassName="active">
          Bebidas
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/menu/menu-postres" activeClassName="active">
          Postres
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/menu/menu-coffee" activeClassName="active">
          Coffee
        </NavLink>
      </li>
    </ul>
    </div>
    </div>  
  );
}

export default Filter;
