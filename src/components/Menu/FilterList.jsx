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

  return (
    <div className="order d-flex justify-content-center">
      <div className="rounded-1 v-system-bar subheader theme--light">
        <ul className="d-flex justify-content-center gap-3">
          <li>
            <NavLink
              to="/menu/menu-burgers"
              isActive={() => location.pathname === "/menu/menu-burgers"}
              onClick={(e) => handleCategoryClick("burgers", e)}>
              🍔 Burgers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu/menu-snacks"
              isActive={() => location.pathname === "/menu/menu-snacks"}
              onClick={(e) => handleCategoryClick("snacks", e)}>
              🍟 Snacks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu/menu-bebidas"
              isActive={() => location.pathname === "/menu/menu-bebidas"}
              onClick={(e) => handleCategoryClick("bebidas", e)}>
              🥤 Bebidas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu/menu-postres"
              isActive={() => location.pathname === "/menu/menu-postres"}
              onClick={(e) => handleCategoryClick("postres", e)}>
              🍨 Postres
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu/menu-coffee"
              isActive={() => location.pathname === "/menu/menu-coffee"}
              onClick={(e) => handleCategoryClick("coffee", e)}>
              ☕ Coffee
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
