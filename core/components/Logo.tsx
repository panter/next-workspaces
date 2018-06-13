import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <a>Shop</a>
      </Link>
      <style jsx>{`
        div {
          text-align: center;
        }
        a {
          color: white;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: bold;
          font-size: 40px;
        }
      `}</style>
    </div>
  );
};

export default Logo;
