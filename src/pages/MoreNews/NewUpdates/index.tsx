import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import ButtonPrimary from "../../../components/buttonPrimary";
import { Mainstyle } from "../../../Config/Mainstyle";
import LikeAndShare from "../../../components/LikeAndShare";
import CommentBox from "../../../components/commentbox";
import client from "../../../Config/Graphql/apolloclient";
import { gql } from "@apollo/client";
// import moment from "moment";
import moment from "moment-timezone";

const NewUpdates = () => {
  const [datas, setDatas] = useState() as any;

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
          }
        `,
      })
      .then(function (response) {
        if (response.networkStatus == 7) {
          let data = response.data.liveUpdates.data;
          setDatas(data);
        }
      })

      .catch((error) => console.log("=====more news======>", error));
  };
  return (
    <main>
      <Row>
        <Col lg={8} md={12} sm={12}>
          <ButtonPrimary name={"New Updates"} />

          <Row>
            {datas?.slice(5, 8).map((item_: any) => {
              return (
                <Col>
                  <div>
                    {item_?.attributes && (
                      <img
                        style={{
                          height: "160px",
                          width: "100%",
                          marginBottom: 15,
                        }}
                        src={item_?.attributes?.image}
                        alt="noimage"
                      />
                    )}
                    {item_?.attributes && (
                      <p style={Mainstyle.middleTxt}>
                        {item_?.attributes?.body.slice(0,200)}
                        <div
                          className="Dateandshare"
                          style={Mainstyle.lighttext}
                        >
                          <div>
                            {moment(item_?.attributes?.createdAt).format(
                              "MMMM Do YYYY, h:mm:ss"
                            )}
                          </div>
                          <LikeAndShare />
                        </div>
                      </p>
                    )}
                  </div>
                  <div>
                    {item_?.attributes && (
                      <img
                        style={{
                          height: "160px",
                          width: "100%",
                          marginBottom: 15,
                        }}
                        src={item_?.attributes?.image}
                        alt="noimage"
                      />
                    )}
                    {item_?.attributes && (
                      <p style={Mainstyle.middleTxt}>
                        {item_?.attributes?.body.slice(0,200)}
                        <div
                          className="Dateandshare"
                          style={Mainstyle.lighttext}
                        >
                          <div>{moment(item_?.attributes?.createdAt).format("MMMM Do YYYY, h:mm:ss")}</div>
                          <LikeAndShare />
                        </div>
                      </p>
                    )}
                  </div>
                </Col>
              );
            })}
            <div className="breadcums" />
          </Row>
          <ButtonPrimary name={"Comments"} />
          <CommentBox />
        </Col>
        <Col lg={4} md={12} sm={12}>
          <div>
            <ButtonPrimary name={"Related Stories"} />
            {datas?.map((item_: any) => {
              return (
                <Row>
                  <Col>
                    <img
                      style={{
                        marginBottom: 15,
                        height: "90px",
                        width: "95%",
                      }}
                      src={item_?.attributes.image}
                      alt="noimage"
                    />
                  </Col>
                  <Col>
                    {item_?.attributes && (
                      <p style={Mainstyle.middleTxt2}>
                        <span>
                          {item_?.attributes.head}
                          <div
                            className="Dateandshare"
                            style={Mainstyle.lighttext}
                          >
                            <div>
                              {moment(item_?.attributes?.createdAt).format(
                                "MMMM Do YYYY, h:mm:ss"
                              )}
                            </div>
                            <LikeAndShare />
                          </div>
                        </span>
                      </p>
                    )}
                  </Col>
                </Row>
              );
            })}
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default NewUpdates;
