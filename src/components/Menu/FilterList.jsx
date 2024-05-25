import React from 'react';
import { NavLink } from 'react-router-dom';

function Filter() {
  return (
    <ul className="d-flex justify-content-center ">
      <li className="mx-1">
        <NavLink to="/menu/menu-burgers" activeClassName="active">Burgers</NavLink>
      </li>
      <li className="mx-1">
        <NavLink to="/menu/menu-snacks" activeClassName="active">Snacks</NavLink>
      </li>
      <li className="mx-1">
        <NavLink to="/menu/menu-bebidas" activeClassName="active">Bebidas</NavLink>
      </li>
      <li className="mx-1">
        <NavLink to="/menu/menu-postres" activeClassName="active">Postres</NavLink>
      </li>
      <li className="mx-1">
        <NavLink to="/menu/menu-coffee" activeClassName="active">Coffee</NavLink>
      </li>
    </ul>
  );
}

export default Filter;
