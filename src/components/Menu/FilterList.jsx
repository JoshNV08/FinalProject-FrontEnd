import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faBottleWater, faCookieBite, faIceCream, faMugHot } from '@fortawesome/free-solid-svg-icons';

function Filter() {
  return (
    <div className="order d-flex justify-content-center">
      <div className="rounded-1">
        <ul className="d-flex justify-content-center gap-3">
          <li>
            <NavLink to="/menu/menu-burgers" activeClassName="active">
              <FontAwesomeIcon icon={faBurger} /> Burgers
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu/menu-snacks" activeClassName="active">
              <FontAwesomeIcon icon={faCookieBite} /> Snacks
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu/menu-bebidas" activeClassName="active">
              <FontAwesomeIcon icon={faBottleWater} /> Bebidas
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu/menu-postres" activeClassName="active">
              <FontAwesomeIcon icon={faIceCream} /> Postres
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu/menu-coffee" activeClassName="active">
              <FontAwesomeIcon icon={faMugHot} /> Coffee
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
