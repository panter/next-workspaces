import React from "react";
import Link from "next/link";

const Button = ({ children, href }) => {
  return (
    <span>
      <Link href={href}>
        <a>{children}</a>
      </Link>

      <style jsx>{`
        span {
          padding: 12px;
          background: #67b88f;
          color: white;
          text-transform: uppercase;
          cursor: pointer;
        }
        a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </span>
  );
};

export default Button;
