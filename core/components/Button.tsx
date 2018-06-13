import React from "react";

const Button = ({ children }) => {
  return (
    <span>
      {children}
      <style jsx>{`
        span {
          padding: 12px;
          background: #67b88f;
          color: white;
          text-transform: uppercase;
          cursor: pointer;
        }
      `}</style>
    </span>
  );
};

export default Button;
