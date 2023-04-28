import React from "react";
import { Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
const Banner = () => {
  return (
    <main>
      <Row>
        <StaticImage
          style={{ height: "50%",marginBottom: "25px" }}
          src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="no image"
        />
      </Row>
    </main>
  );
};

export default Banner;
