import React from 'react';
import { NavLink } from 'react-router-dom';

function Filter() {
  return (
    <ul className="d-flex justify-content-center">
      <li className="mx-3">
        <NavLink to="/menu-burgers" activeClassName="active">Burgers</NavLink>
      </li>
      <li className="mx-3">
        <NavLink to="/menu-snacks" activeClassName="active">Snacks</NavLink>
      </li>
      <li className="mx-3">
        <NavLink to="/menu-bebidas" activeClassName="active">Bebidas</NavLink>
      </li>
      <li className="mx-3">
        <NavLink to="/menu-postres" activeClassName="active">Postres</NavLink>
      </li>
      <li className="mx-3">
        <NavLink to="/menu-coffee" activeClassName="active">Coffee</NavLink>
      </li>
    </ul>
  );
}

export default Filter;
