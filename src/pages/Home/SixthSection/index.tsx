import React from "react";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Mainstyle } from "../../../Config/Mainstyle";
import ButtonPrimary from "../../../components/buttonPrimary";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "gatsby";
import LikeAndShare from "../../../components/LikeAndShare";
import client from "../../../Config/Graphql/apolloclient";
import { gql } from "@apollo/client";
import moment from "moment";
import { Skeleton } from "antd";

const SixthSection = () => {
  const [liked, setLiked] = useState(false);
  const [datas, setDatas] = useState() as any;
  const [featureNews,setFeatureNews] = useState() as any;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadData();
  }, []);
  const loadData = () => {
    client
      .query({
        query: gql`
          query {
            techNews {
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
          let data = response.data.techNews.data;
          let featuredNewsData = response.data.featuredNews.data
          setDatas(data);
          setFeatureNews(featuredNewsData)
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

      {/* <----- Featured News Section ---------> */}

      <Row>
        <Col md={8} className="allignments">
          <Row>
            <ButtonPrimary name={"Featured News"} />
            <Col>
              {featureNews?.map((item_: any) => {
                return (
                  <Row>
                    <Col md={6}>
                      <img
                        style={{
                          height: "190px",
                          width: "100%",
                          marginBottom: 20,
                        }}
                        src={item_?.attributes?.image}
                        alt="noimage"
                      />
                    </Col>
                    <Col md={6}>
                      {item_?.attributes && (
                        <p style={Mainstyle.SubHeads2}>
                          {item_?.attributes?.head}
                        </p>
                      )}
                      {item_?.attributes && (
                        <p style={Mainstyle.middleTxt}>
                          {item_?.attributes?.body}
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
                    </Col>
                  </Row>
                );
              })}
            </Col>
          </Row>
          <div className="breadcums2" />
        </Col>

        {/* <----- Tech News Section -------> */}

        <Col md={4}>
          <ButtonPrimary name={"Tech News"} />
          <Col>
            <Row>
              {datas?.slice(0, 2).map((item_: any) => {
                return (
                  <Col>
                    {" "}
                    <img
                      style={{
                        height: "110px",
                        width: "160px",
                      }}
                      src={item_?.attributes?.image}
                      alt="noimage"
                    />
                    {item_?.attributes && (
                      <p style={Mainstyle.SubHeads3}>
                        {item_?.attributes?.head}
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
                  </Col>
                );
              })}
            </Row>
          </Col>

          <ButtonPrimary name={"Tech News"} />
          <Col>
            {datas?.slice(0, 9).map((item_: any) => {
              return (
                <Row>
                  <Col>
                    <img
                      style={{
                        height: "90px",
                        width: "90%",
                        marginTop: "2px",
                      }}
                      src={item_?.attributes?.image}
                      alt="noimage"
                    />
                  </Col>
                  <Col>
                    {item_?.attributes && (
                      <p style={Mainstyle.SubHeads3}>
                        {item_?.attributes?.head}
                      </p>
                    )}
                  </Col>
                </Row>
              );
            })}
          </Col>
          <ButtonPrimary name={"Science"} />
          {datas?.slice(0, 5).map((item_: any) => {
            return (
              <Row>
                <Col>
                  {" "}
                  <img
                    style={{
                      height: "100px",
                      width: "160px",
                    }}
                    src={item_?.attributes?.image}
                    alt="noimage"
                  />
                  {item_?.attributes && (
                    <p style={Mainstyle.SubHeads3}>
                      {item_?.attributes?.head}
                      {/* ഭരണഘടനയെ ഒരു ദുരന്തത്തിൽനിന്ന് രക്ഷിക്കു രാഷ്ട്രപതിയോട് മമത */}
                      <div className="Dateandshare" style={Mainstyle.lighttext}>
                        <div>
                          {moment(item_?.attributes?.createdAt).format(
                            "MMMM Do YYYY, h:mm:ss"
                          )}
                        </div>
                        <LikeAndShare />
                      </div>
                    </p>
                  )}
                </Col>
                {/* <Col>
                  {" "}
                  <StaticImage
                    style={{
                      height: "100px",
                      width: "160px",
                    }}
                    src="https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=600"
                    alt="noimage"
                  />
                  <p style={Mainstyle.SubHeads3}>
                    ഭരണഘടനയെ ഒരു ദുരന്തത്തിൽനിന്ന് രക്ഷിക്കു രാഷ്ട്രപതിയോട് മമത
                    <div className="Dateandshare" style={Mainstyle.lighttext}>
                      <div>March 27, 2023</div>
                      <LikeAndShare />
                    </div>
                  </p>
                </Col> */}
              </Row>
            );
          })}
        </Col>
        <div
          style={{
            height: "100px",
            width: 750,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Link to="/MoreNews" style={Mainstyle.bluetext}>
            More <MdKeyboardArrowRight size={15} />
          </Link>
        </div>
      </Row>
    </div>
    )}
  </>
  );
};

export default SixthSection;
