import React from "react";
import Logo from "./Logo";

const Header = () => (
  <div>
    <Logo />
    <ul>
      <li>
        <a>Sale</a>
      </li>
      <li>
        <a>Female</a>
      </li>
      <li>
        <a>Male</a>
      </li>
      <li>
        <a>Home & Living</a>
      </li>
      <li>
        <a>Children</a>
      </li>
      <li>
        <a>Beauty</a>
      </li>
      <li>
        <a>Delicatessa</a>
      </li>
      <li>
        <a>Wine & drinks</a>
      </li>
      <li>
        <a>Gifts</a>
      </li>
    </ul>

    <style jsx>{`
      div {
        background: black;
        color: white;
        padding: 24px;
      }
      ul {
        display: flex;
        padding: 0;
        margin: 24px 0 0 0;
        justify-content: center;
      }
      li {
        list-style: none;
        text-transform: uppercase;
        padding: 10px;
      }
      li:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default Header;
