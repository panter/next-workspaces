import React from "react";
import Title from "@panter/core/components/Title";

const Teaser = ({ image, title }) => {
  return (
    <div>
      <div className="title-wrapper">
        <Title>{title}</Title>
      </div>
      <img src={`/static/images/${image}`} />

      <style jsx>{`
        div {
          width: 100%;
          position: relative;
        }
        img {
          width: 100%;
        }
        .title-wrapper {
          position: absolute;
          top: 24px;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Teaser;
