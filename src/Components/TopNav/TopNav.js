import React from "react";
import "./TopNav.css";
import { FaBars } from "react-icons/fa";

export default function TopNav() {
  return (
    <div className="nav-container">
      <div className="link-container">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        {/* <i class="fa fa-bars" aria-hidden="true"></i> */}
        <a href="/contact">Contact</a>

        <div className="selector" id="selector">
          <button
            className="selector-button"
            onClick={() =>
              document.getElementById("dropdown").style.display === "none" ? (document.getElementById("dropdown").style.display = "flex") : (document.getElementById("dropdown").style.display = "none")
            }
          >
            <FaBars className="bars" />
          </button>

          <ul id="dropdown">
            <li>
              <a href="/" onClick={() => (document.getElementById("dropdown").style.display = "none")}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" onClick={() => (document.getElementById("dropdown").style.display = "none")}>
                About
              </a>
            </li>
            <li>
              <a href="/blog" onClick={() => (document.getElementById("dropdown").style.display = "none")}>
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" onClick={() => (document.getElementById("dropdown").style.display = "none")}>
                Επικοινωνία
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
