import React from "react";
import { Link } from "gatsby";

const Ad = () => {
  return (
    <main>
      <Link to="/">
        <img
        style={{marginBottom:20}}
          width={"100%"}
          height={"150px"}
          src="https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/toggle/ACS_banner._CB594276918_.jpg"
        />
      </Link>
    </main>
  );
};

export default Ad;
