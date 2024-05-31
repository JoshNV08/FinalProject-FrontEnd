import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { faBottleWater } from '@fortawesome/free-solid-svg-icons';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

function Filter() {
  return (
      <div className="order  d-flex justify-content-center">
      <div className="order rounded-1">
        <ul className="d-flex justify-content-center gap-4 ">
          <li className="">
            <NavLink to="/menu/menu-burgers" activeClassName="active">
    <div className="order  d-flex justify-content-center">
      <div className="order rounded-1">
        <ul className="d-flex justify-content-center gap-4 ">
          <li className="">
            <NavLink to="/menu/menu-burgers" activeClassName="active" >
            <FontAwesomeIcon icon={faBurger} />
              Burgers
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/menu/menu-snacks" activeClassName="active">
            <FontAwesomeIcon icon={faCookieBite} />
              Snacks
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/menu/menu-bebidas" activeClassName="active">

            <FontAwesomeIcon icon={faBottleWater} />
              Bebidas
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/menu/menu-postres" activeClassName="active">
            <FontAwesomeIcon icon={faIceCream} />

              Postres
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/menu/menu-coffee" activeClassName="active">

            <FontAwesomeIcon icon={faMugHot} />
              Coffee
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
  };

export default Filter;
