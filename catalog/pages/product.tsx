import React from "react";
import Layout from "@panter/core/components/Layout";
import Title from "@panter/core/components/Title";
import Button from "@panter/core/components/Button";

const product = ({ url }) => {
  const { name, id } = url.query;
  return (
    <Layout>
      <Title>{name}</Title>
      <img src={`/static/images/product-${id}.jpeg`} />
      <br />
      <br />
      <br />
      <Button href="/cart">Add to cart</Button>
    </Layout>
  );
};

export default product;
