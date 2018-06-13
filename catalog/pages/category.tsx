import React from "react";
import Layout from "@panter/core/components/Layout";
import Teaser from "../components/Teaser";

const Category = ({ url }) => {
  const { name } = url.query;
  return (
    <Layout>
      <Teaser title={name} image="category-teaser.png" />
    </Layout>
  );
};

export default Category;
