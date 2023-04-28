import React from "react";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Mainstyle } from "../../../Config/Mainstyle";
import { StaticImage } from "gatsby-plugin-image";
import client from "../../../Config/Graphql/apolloclient";
import { gql } from "@apollo/client";
import FirstSection from "../FirstSection";
import { Skeleton } from "antd";

const SecondSection = () => {
  const [data, setData] = useState() as any;
  const [featureNews, setFeatureNews] = useState() as any;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    client
      .query({
        query: gql`
          query {
            exclusives {
              data {
                attributes {
                  image
                  head
                  body
                  createdAt
                }
              }
            }
            featuredNews {
              data {
                attributes {
                  image
                  head
                  body
                  createdAt
                }
              }
            }
          }
        `,
      })
      .then(function (response) {
        if (response.networkStatus == 7) {
          let data = response.data.exclusives.data;
          let featureData = response.data.featuredNews.data;
          setData(data);
          setFeatureNews(featureData);
          setLoading(false);
        }
      })

      .catch((error) => console.log("=======THIRDSECTION=======>>>", error));
  };

  return (
    <>
      {loading ? (
        <Skeleton active />
      ) : (
        <div>
          <div className="breadcumsBold" />
          <Row>
            {featureNews?.slice(0, 3).map((item_: any) => {
              return (
                <Col md={4}>
                  <Row>
                    <Col lg={6} md={12} sm={12}>
                      <img
                        style={{
                          height: "100px",
                          width: "140px",
                        }}
                        src={item_?.attributes?.image}
                        // "https://images.unsplash.com/photo-1674574124473-e91fdcabaefc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="noimage"
                      />
                    </Col>
                    {item_?.attributes && (
                      <Col lg={6} md={12} sm={12} style={Mainstyle.SubHeads2}>
                        {item_?.attributes?.head.slice(0, 80)}
                      </Col>
                    )}
                  </Row>
                </Col>
              );
            })}
          </Row>
          <div className="breadcumsBold" />
        </div>
      )}
    </>
  );
};
{
  /* <FirstSection data = {data} featureNews = {featureNews}/> */
}

export default SecondSection;
