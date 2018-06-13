import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="layout">{children}</div>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>

      <style jsx>{`
        .layout {
          text-align: center;
          padding: 48px;
        }
      `}</style>
    </div>
  );
};

export default Layout;
