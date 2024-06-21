import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Filter() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCategoryClick = (category, event) => {
    event.preventDefault();
    if (location.pathname === `/menu/menu-${category}`) {
      navigate("/menu");
    } else {
      navigate(`/menu/menu-${category}`);
    }
  };

  const getClassName = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <div className="order d-flex justify-content-center">
      <div className="rounded-1 v-system-bar subheader theme--light">
        <ul className="d-flex justify-content-center gap-3">
          <li>
            <NavLink
              to="/menu/menu-burgers"
              onClick={(e) => handleCategoryClick("burgers", e)}
              className={getClassName}
            >
              🍔 Burgers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu/menu-snacks"
              onClick={(e) => handleCategoryClick("snacks", e)}
              className={getClassName}
            >
              🍟 Snacks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu/menu-drinks"
              onClick={(e) => handleCategoryClick("drinks", e)}
              className={getClassName}
            >
              🥤 Drinks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu/menu-desserts"
              onClick={(e) => handleCategoryClick("desserts", e)}
              className={getClassName}
            >
              🍨 Desserts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu/menu-coffee"
              onClick={(e) => handleCategoryClick("coffee", e)}
              className={getClassName}
            >
              ☕ Coffee
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
