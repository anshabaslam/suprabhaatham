import React, { useState } from "react";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Mainstyle } from "../../../Config/Mainstyle";
import { StaticImage } from "gatsby-plugin-image";
import ButtonPrimary from "../../../components/buttonPrimary";
import LikeAndShare from "../../../components/LikeAndShare";
import client from "../../../Config/Graphql/apolloclient";
import { gql } from "@apollo/client";
import moment from "moment";
import { ApolloError } from "@apollo/client";
import { Skeleton } from "antd";

const ThirdSection = () => {
  const [datas, setDatas] = useState() as any;
  const [liveUpdates, setLiveUpdates] = useState() as any;
  const [topNews, setTopNews] = useState() as any;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  const Align = {
    display: "flex",
    alignItems: "center",
  };

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
            liveUpdates {
              data {
                attributes {
                  image
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
          let liveData = response.data.liveUpdates.data;
          let topNewsData = response.data.topnews.data;
          setDatas(data);
          setLiveUpdates(liveData);
          setTopNews(topNewsData);
          setLoading(false);
        }
      })

      .catch((error) => {
        setError(error.message);
        console.log("===========THIRDSECTION----Error=======>>>>",error.message)
      });
  };

  return (
    <>
    {loading ? (
      <Skeleton active />
    ) : (
    <Row>
      <Col lg={4} md={6}>
        <ButtonPrimary name={"Top News"} />
        {topNews?.slice(4, 8).map((item_: any) => {
          return (
            <div>
              <img
                style={{ height: "195px", width: "97%", marginBottom: "11px" }}
                src={item_?.attributes?.image}
                alt="noimage"
              />
              {item_.attributes && (
                <p style={Mainstyle.smallTxt}>
                  {item_.attributes.head}

                  <div className="Dateandshare" style={Mainstyle.lighttext}>
                    <div>
                      {moment(item_.attributes.createdAt).format(
                        "MMMM Do YYYY, h:mm:ss"
                      )}
                    </div>
                    <LikeAndShare />
                  </div>
                </p>
              )}
            </div>
          );
        })}
      </Col>
      <Col lg={4} md={6}>
        <ButtonPrimary name={"Live Updates"} />
        {liveUpdates?.map((item_: any) => {
          return (
            <Row>
              <Col>
                <img
                  style={{
                    marginBottom: 15,
                    height: "100px",
                    width: "97%",
                  }}
                  src={item_?.attributes.image}
                  alt="noimage"
                />
              </Col>
              <Col>
                <div style={Mainstyle.lighttext}>Kerala</div>
                <p style={{ ...Mainstyle.middleTxt2, ...Align }}>
                  {item_.attributes && <span>{item_.attributes.head}</span>}
                  <div className="Dateandshare" style={Mainstyle.lighttext}>
                    <LikeAndShare direction={"column"} />
                  </div>
                </p>
              </Col>
            </Row>
          );
        })}
      </Col>
      <Col lg={4} md={12}>
        <ButtonPrimary name={"Kerala"} />
        {datas?.slice(0, 4).map((item_: any) => {
          return (
            <Row>
              <Col>
                {" "}
                <img
                  style={{
                    height: "140px",
                    width: "100%",
                  }}
                  src={item_.attributes.image}
                  alt="noimage"
                />
                {item_.attributes && (
                  <p style={Mainstyle.SubHeads3}>
                    {item_?.attributes.head}
                    <div className="Dateandshare" style={Mainstyle.lighttext}>
                      {item_.attributes && (
                        <div>
                          {moment(item_?.attributes.createdAt).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </div>
                      )}
                      <LikeAndShare />
                    </div>
                  </p>
                )}
              </Col>
            </Row>
          );
        })}
      </Col>
    </Row>
        )}
        </>
  );
};

export default ThirdSection;
