import React from "react";
import Link from "next/link";

const Product = ({ name, price, image, id }) => {
  return (
    <div>
      <Link href={`/product?name=${encodeURIComponent(name)}&id=${id}`}>
        <a>
          <div className="image-wrapper">
            <div className="overlay" />
            <img src={`/static/images/${image}`} />
          </div>
          <div className="name">{name}</div>
          <div className="price">{price}</div>
        </a>
      </Link>

      <style jsx>{`
        div {
          overflow: hidden;
          justify-content: space-between;
        }
        a {
          display: block;
          text-align: center;
          cursor: pointer;
          color: black;
          text-decoration: none;
        }
        .image-wrapper {
          margin-top: 48px;
          position: relative;
        }
        .name {
          font-size: 24px;
          padding-top: 12px;
        }
        .overlay {
          background: rgba(26, 26, 26, 0.04);
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        .image-wrapper:hover .overlay {
          background: rgba(26, 26, 26, 0.07);
        }
      `}</style>
    </div>
  );
};

export default Product;
