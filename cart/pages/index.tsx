import React from "react";
import { Components } from "@tomaswitek/core";

const { Header, Footer } = Components;
// FYI you can also use separate import
//import Header from "@tomaswitek/core/components/Header";

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
