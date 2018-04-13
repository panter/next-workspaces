import React from "react";
import { Components } from "@panter/core";

const { Header, Footer } = Components;
// FYI you can also use separate import
//import Header from "@panter/core/components/Header";

const index = () => {
  return (
    <div>
      <Header />
      Cart App
      <Footer />
    </div>
  );
};

export default index;
