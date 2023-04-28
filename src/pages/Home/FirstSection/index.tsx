import React from "react";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Mainstyle } from "../../../Config/Mainstyle";
import ButtonPrimary from "../../../components/buttonPrimary";
import ImageSlide from "../../../components/imageSlide";
import LikeAndShare from "../../../components/LikeAndShare";
import gql from "graphql-tag";
import client from "../../../Config/Graphql/apolloclient";
import moment from "moment";
import { Skeleton } from "antd";

const FirstSection = (props: any) => {
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
          let data = response.data.topnews.data;

          setDatas(data);
          setLoading(false);
        }
      })

      .catch((error) => console.log("=====ANASKUKKU===B==>", error));
  };
  // console.log("datas[4].attributes.body: ", datas[4]?.attributes.body);


  return (
    <div>
      {loading ? (
        <Skeleton active />
      ) : (
        <Row>
          <Col md={8} sm={12}>
            <Row>
              <Col xxl={5} xl={12} lg={12} md={12} sm={12}>
                {datas && (
                  <p style={Mainstyle.SubHeads}>{datas[2]?.attributes.head}</p>
                )}

                {datas && (
                  <p style={Mainstyle.middleTxt}>
                    {datas[3]?.attributes.body}
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
              </Col>
            </Row>
            {/* <div className="breadcums" /> */}
            <hr />
            <ButtonPrimary name={"Featured news"} />
            <Row>
              <Col xxl={5} xl={12} lg={12} md={12} sm={12}>
                {datas && datas[4]?.attributes && (
                  <p style={Mainstyle.SubHeads}>{datas[4]?.attributes?.head}</p>
                )}
                {datas && datas[4]?.attributes && (
                  <p style={Mainstyle.middleTxt}>
                    {datas[4]?.attributes?.body}
                    <div className="Dateandshare" style={Mainstyle.lighttext}>
                      <div>
                        {" "}
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
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row className="breadcums2">
              {/* <div > */}
              <Col>
                {datas && (
                  <img
                    style={{ height: "200px", width: "100%" }}
                    src={datas[5]?.attributes.image}
                    alt="noimage"
                  />
                )}
                {datas && datas[4]?.attributes && (
                  <p style={Mainstyle.SubHeads2}>
                    {datas[5]?.attributes?.head}
                  </p>
                )}
                {datas && datas[5]?.attributes && (
                  <p style={Mainstyle.middleTxt}>
                    {datas[5]?.attributes?.body}
                    <div className="Dateandshare" style={Mainstyle.lighttext}>
                      <div>March 27, 2023</div>
                      <LikeAndShare />
                    </div>
                  </p>
                )}
                <div className="breadcums" />
              </Col>
              <Row>
                {datas?.slice(0, 4).map((item_: any) => {
                  return (
                    <Col lg={6} md={12} sm={12}>
                      <img
                        style={{
                          height: "140px",
                          width: "100%",
                        }}
                        src={item_.attributes.image}
                        alt="noimage"
                      />
                      {datas[1]?.attributes && (
                        <div style={Mainstyle.SubHeads2}>
                          {datas[1]?.attributes?.head}
                        </div>
                      )}
                    </Col>
                  );
                })}
              </Row>
              {/* </div> */}
            </Row>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default FirstSection;
