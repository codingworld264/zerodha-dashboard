import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Menu = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const [selectedMenu, setSelectedMenu] = useState(pathName);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const menus = [
    {
      label:"Dashboard",
      link:"/"
    },
    {
      label:"Orders",
      link:"/orders"
    },
    {
      label:"Holdings",
      link:"/holdings"
    },
    {
      label:"Positions",
      link:"/positions"
    },
    {
      label:"Funds",
      link:"/funds"
    },
    {
      label:"Apps",
      link:"/apps"
    }
  ];

  const handleMenuClick = (link) => {
    setSelectedMenu(link);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const activeMenuClass = "selected";

  return (
    <div className="menu-container">
      <img src={logo} style={{ width: "50px" }} />
      <div className="menus">
        {menus?.length ? (
          <ul>
            {menus.map((m,i) => (
              <li key={`menu-${i}`}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={m?.link}
                  onClick={() => handleMenuClick(m?.link)}
                >
                  <p className={`menu ${selectedMenu === m?.link && activeMenuClass}`}>
                    {m?.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ):""}
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
