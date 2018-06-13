import React from "react";
import Layout from "@panter/core/components/Layout";
import Teaser from "../components/Teaser";
import Products from "../components/Products";

const index = () => {
  return (
    <Layout>
      <Teaser image="home-teaser.png" title="" />
      <Products />
    </Layout>
  );
};

export default index;
