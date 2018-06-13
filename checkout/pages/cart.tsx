import React from "react";
import Layout from "@panter/core/components/Layout";
import Title from "@panter/core/components/Title";
import Cart from "../components/Cart";
import Button from "@panter/core/components/Button";

const index = () => {
  return (
    <Layout>
      <Title>Your Cart</Title>
      <Cart />
      <Button href="/checkout">Go to checkout</Button>
    </Layout>
  );
};

export default index;
