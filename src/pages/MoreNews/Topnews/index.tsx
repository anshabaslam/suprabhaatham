import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import ButtonPrimary from "../../../components/buttonPrimary";
import { Mainstyle } from "../../../Config/Mainstyle";
import LikeAndShare from "../../../components/LikeAndShare";
import { Button, Space } from "antd";
import client from "../../../Config/Graphql/apolloclient";
import { gql } from "@apollo/client";
import moment from "moment";

const Topnews = () => {
  const [datas, setDatas] = useState() as any;
  const [topNews, setTopNews] = useState() as any;


  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    client
      .query({
        query: gql`
          query {
            liveUpdates {
              data {
                attributes {
                  image
                  title
                  head
                  body
                  createdAt
                }
              }
            }
            topnews {
              data {
                attributes {
                  image
                  title
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
          let data = response.data.liveUpdates.data;
          let topNewsData = response.data.topnews.data;

          setDatas(data);
          setTopNews(topNewsData);
        }
      })

      .catch((error) => console.log("=====more news======>", error));
  };

  const Align = {
    display: "flex",
    alignItems: "center",
  };
  return (
    <main>
      <Row>
        {/* <Col md={8}> */}
        <Col lg={8} md={12} sm={12}>
          <ButtonPrimary name={"Top News"} />
          <div>
            <p style={Mainstyle.SubHeads}></p>
            {topNews && datas[1]?.attributes && (
              <img
                style={{
                  height: "600px",
                  width: "100%",
                  marginBottom: 15,
                }}
                src={datas && datas[1]?.attributes?.image}
                alt="noimage"
              />
            )}
            {datas && datas[1]?.attributes && (
              <p style={Mainstyle.middleTxt}>
                {datas && datas[1]?.attributes?.body}
              </p>
            )}
          </div>
          <div>
            {datas && datas[4]?.attributes && (
              <img
                style={{
                  height: "700px",
                  width: "70%",
                  marginBottom: 15,
                }}
                src={datas && datas[4]?.attributes.image}
                alt="noimage"
              />
            )}
            {datas && datas[4]?.attributes && (
            <p style={Mainstyle.middleTxt}>
             {datas[4]?.attributes?.body}
            </p>
            )}
          </div>
          <div className="breadcums" />
          <Space>
            <span style={{ ...Mainstyle.lighttext, fontSize: 13 }}>TAGS</span>
            <Button style={Mainstyle.buttonnSecodary} size="small">
              Us
            </Button>
            <Button style={Mainstyle.buttonnSecodary} size="small">
              India
            </Button>
            <Button style={Mainstyle.buttonnSecodary} size="small">
              Jewellery
            </Button>
            <Button style={Mainstyle.buttonnSecodary} size="small">
              Shootout
            </Button>
            <Button style={Mainstyle.buttonnSecodary} size="small">
              Murder
            </Button>
            <Button style={Mainstyle.buttonnSecodary} size="small">
              Gunshort
            </Button>
          </Space>
          <div className="breadcums" />
        </Col>
        <Col lg={4} md={12} sm={12} className="breadcums2">
          <div>
            <ButtonPrimary name={"Top News"} />
            {topNews?.map((item_:any) => {
              return (
                <Row>
                  <Col> 
                  {item_?.attributes && (
                    <img
                      style={{
                        marginBottom: 15,
                        height: "80px",
                        width: "95%",
                      }}
                      src={item_?.attributes.image}
                      alt="noimage"
                    />
                    )}
                  </Col>
                  <Col>
                  {item_?.attributes && (
                    <p style={{ ...Mainstyle.middleTxt2, ...Align }}>
                      <span>
                      {item_?.attributes?.head}
                      </span>
                      <div className="Dateandshare" style={Mainstyle.lighttext}>
                        <LikeAndShare direction={"column"} />
                      </div>
                    </p>
                    )}
                  </Col>
                </Row>
              );
            })}
          </div>
          <div>
            <ButtonPrimary name={"Live Updates"} />
            <ul style={Mainstyle.middleTxt}>
              {datas?.slice(0,3).map((item_:any) => {
                return (
                  <div>
                    {item_?.attributes && (
                    <img
                      style={{
                        marginBottom: 15,
                        height: "150px",
                        width: "90%",
                      }}
                      src={item_?.attributes?.image}
                      alt="noimage"
                    />
                    )}
                    {item_?.attributes && (
                    <p style={{ ...Mainstyle.middleTxt2 }}>
                    {item_?.attributes?.body}
                    {item_?.attributes && (
                      <div className="Dateandshare" style={Mainstyle.lighttext}>
                        <div>{moment(item_?.attributes?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</div>
                        <LikeAndShare />
                      </div>
                      )}
                    </p>
                    )}
                  </div>
                );
              })}
            </ul>
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default Topnews;
