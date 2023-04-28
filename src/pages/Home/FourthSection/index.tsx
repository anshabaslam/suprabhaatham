import React from "react";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Mainstyle } from "../../../Config/Mainstyle";
import { StaticImage } from "gatsby-plugin-image";
import LikeAndShare from "../../../components/LikeAndShare";
import client from "../../../Config/Graphql/apolloclient";
import gql from "graphql-tag";
import { Skeleton } from "antd";

const FourthSection = () => {
  const [datas, setDatas] = useState() as any;
  const [loading, setLoading] = useState<boolean>(true);
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
        console.log("======response=====>>>",response)
        if (response.networkStatus == 7) {
          let data = response.data.businessNews.data;
          setDatas(data);
          setLoading(false);
        }
      })

      .catch((error) => console.log(error));
  };
  return (
    <>
      {loading ? (
        <Skeleton active />
      ) : (
        <div>
          <div className="breadcums" />
          <Row>
            {datas?.slice(0, 6).map((item_: any) => {
              return (
                <Col md={4}>
                  <Row>
                    <Col lg={6} md={12} sm={12}>
                      <img
                        style={{
                          height: "130px",
                          width: "100%",
                        }}
                        src={item_?.attributes?.image}
                        alt="noimage"
                      />
                    </Col>
                    {item_?.attributes && (
                      <Col lg={6} md={12} sm={12} style={Mainstyle.SubHeads2}>
                        {item_?.attributes?.head}
                        <div
                          className="Dateandshare"
                          style={Mainstyle.lighttext}
                        >
                          <div>March 27, 2023</div>
                          <LikeAndShare />
                        </div>
                      </Col>
                    )}
                  </Row>
                </Col>
              );
            })}
          </Row>
          <div className="breadcums" />
        </div>
      )}
    </>
  );
};

export default FourthSection;
