import React from "react";
import Layout from "@panter/core/components/Layout";
import Title from "@panter/core/components/Title";

const product = ({ url }) => {
  const { name, id } = url.query;
  return (
    <Layout>
      <Title>{name}</Title>
      <img src={`/static/images/product-${id}.jpeg`} />
    </Layout>
  );
};

export default product;
