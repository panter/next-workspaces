import React from "react";
import Layout from "@panter/core/components/Layout";
import Title from "../components/Title";
import Cart from "../components/Cart";

const index = () => {
  return (
    <Layout>
      <Title>Your Cart</Title>
      <Cart />
    </Layout>
  );
};

export default index;
