import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    console.log(showMenu);
    let linkHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linkHeight);
    if (showMenu) {
      linksContainerRef.current.style.height = linkHeight + "px";
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showMenu]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((icon) => {
            return (
              <li key={icon.id}>
                <a href={icon.url}>{icon.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
