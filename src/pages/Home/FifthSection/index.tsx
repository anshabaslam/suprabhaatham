import React from "react";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Mainstyle } from "../../../Config/Mainstyle";
import ButtonPrimary from "../../../components/buttonPrimary";
import ImageSlide from "../../../components/imageSlide";
import LikeAndShare from "../../../components/LikeAndShare";
import client from "../../../Config/Graphql/apolloclient";
import gql from "graphql-tag";
import { Skeleton } from "antd";
import moment from "moment";

const FifthSection = () => {
  const [datas, setDatas] = useState() as any;
  const [businessNews, setBusinessNews] = useState() as any;
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
        if (response.networkStatus == 7) {
          let data = response.data.exclusives.data;
          let businessNewsData = response.data.businessNews.data;
          setDatas(data);
          setBusinessNews(businessNewsData);
          setLoading(false);
        }
      })
      .catch((error) => console.log("=====FIFTHSECTION======>", error));
  };

  return (
    <>
    {loading ? (
      <Skeleton active />
    ) : (
    <div>
      <Row>
        <Col md={8} sm={12}>
          <Row>
            <ButtonPrimary name={"Featured news"} />
            <Col xxl={5} xl={12} lg={12} md={12} sm={12}>
              {datas && datas[1]?.attributes && (
                <p style={Mainstyle.SubHeads}>{datas[1].attributes.head}</p>
              )}
              {datas && datas[1]?.attributes && (
                <p style={Mainstyle.middleTxt}>
                  {datas[1]?.attributes?.body}
                  <div className="Dateandshare" style={Mainstyle.lighttext}>
                    <div>
                      {moment(datas[3]?.attributes.createdAt).format(
                        "MMMM Do YYYY, h:mm:ss "
                      )}
                    </div>
                    <LikeAndShare />
                  </div>
                </p>
              )}
            </Col>
            <Col xxl={7} xl={12} lg={12} md={12} sm={12}>
              <ImageSlide height={"300px"} width={"100%"} />
              <div></div>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Row>
            <ButtonPrimary name={"Business"} />
            {businessNews?.slice(0, 5).map((item_: any) => {
              return (
                <Row>
                  <Col md={5}>
                    {" "}
                    <img
                      style={{
                        height: "55px",
                        width: "80%",
                        // width: "140px",
                        marginTop: 20,
                        marginBottom: 20,
                      }}
                      src={item_?.attributes.image}
                      alt="noimage"
                    />
                  </Col>
                  <Col md={7}>
                    {item_?.attributes && (
                      <p style={{ ...Mainstyle.middleTxt2, ...Align }}>
                        <span>{item_?.attributes?.head}</span>

                        <div
                          className="Dateandshare"
                          style={Mainstyle.lighttext}
                        >
                          <LikeAndShare direction={"column"} />
                        </div>
                      </p>
                    )}
                  </Col>
                </Row>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
    )}
    </>
  );
};

export default FifthSection;

