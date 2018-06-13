import React, { Component } from "react";

class Cart extends Component {
  state = {
    items: [
      {
        name: "Short coat",
        price: 229.49,
        quantity: 1,
        image: "product-1.jpeg",
        size: "44"
      }
    ]
  };

  incrementQuantity = index => {
    const item = this.state.items[index];
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    this.setState({ items: [updatedItem] });
  };

  decrementQuantity = index => {
    const item = this.state.items[index];
    const updatedItem = { ...item, quantity: item.quantity - 1 };
    this.setState({ items: [updatedItem] });
  };

  render() {
    const { items } = this.state;

    return (
      <div>
        <table cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ image, name, size, price, quantity }, index) => (
              <tr key={index}>
                <td width="300">
                  <img src={`/static/images/${image}`} width="200" />
                </td>
                <td>{name}</td>
                <td>{size}</td>
                <td>{price}</td>
                <td>
                  {quantity}
                  <button onClick={() => this.incrementQuantity(index)}>
                    +
                  </button>
                  <button onClick={() => this.decrementQuantity(index)}>
                    -
                  </button>
                </td>
                <td>{price * quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <style jsx>{`
          div {
            text-align: center;
          }
          table {
            width: 100%;
            text-align: left;
          }
          td {
            padding-top: 12px;
          }
          th {
            padding-bottom: 12px;
            border-bottom: 1px solid gray;
          }
        `}</style>
      </div>
    );
  }
}

export default Cart;
