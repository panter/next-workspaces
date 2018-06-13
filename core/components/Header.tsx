import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import slugify from "../utils/slugify";

const links = [
  "Sale",
  "Female",
  "Male",
  "Home & Living",
  "Children",
  "Beauty",
  "Wine & drinks",
  "Gifts"
];

const Header = () => (
  <div>
    <Logo />
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={`/category?name=${encodeURIComponent(link)}`}
            as={`/category/${slugify(link)}`}
          >
            <a>{link}</a>
          </Link>
        </li>
      ))}
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
        padding: 10px;
      }
      li a {
        color: white;
        text-transform: uppercase;
        text-decoration: none;
      }
      li:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default Header;
