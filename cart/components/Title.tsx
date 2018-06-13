import React from "react";

const Title = ({ children }) => {
  return (
    <h1>
      {children}
      <style jsx>{`
        h1 {
          text-align: center;
          padding-bottom: 24px;
        }
      `}</style>
    </h1>
  );
};

export default Title;
