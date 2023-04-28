import React from "react";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import { Mainstyle } from "../Config/Mainstyle";
import client from "../Config/Graphql/apolloclient";
import gql from "graphql-tag";

const ImageSlide = (props: any) => {
  const [datas, setDatas] = useState() as any;
  const Capture = {
    display: "flex",
    justifyContent: "flex-end",
    width: " 95%",
    ...Mainstyle.smallTxt,
  };
  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    client
      .query({
        query: gql`
          query {
            businessNews {
              data {
                attributes {
                  image
                }
              }
            }
          }
        `,
      })
      .then(function (response) {
        if (response.networkStatus == 7) {
          let data = response.data.businessNews.data;
          setDatas(data);
        }
      })

      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Carousel
        indicators={false}
        touch={true}
        nextIcon={
          <div>
            <TfiArrowCircleRight />
          </div>
        }
        prevIcon={
          <div>
            <TfiArrowCircleLeft />
          </div>
        }
      >
        {datas && 
          datas?.slice(0, 8).map((item_: any) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block"
                  style={{ width: props.width, height: props.height }}
                  src={item_.attributes.image}
                  // alt={item_.attributes.alt}
                />
              </Carousel.Item>
            );
          })}
      </Carousel>
      <div style={Capture}>camera man / suprabhatham</div>
    </div>
  );
};

export default ImageSlide;
