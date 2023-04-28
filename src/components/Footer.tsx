import React from "react";
import { Row, Col} from "react-bootstrap";
import { Link } from "gatsby";

const Footer = () => {
  const Head = {
    textDecoration: "none",
    color: "#ffff",
  };
  const Links = {
    textDecoration: "none",
    color: "#ffff",
    fontWeight: 200,
    fontSize: 12,
  };
  return (
    <main className="footerContainer">
      <div className="footerListContainer">
        <Row>

          {/* <----- GENERAL -----> */}

          <Col>
            <ul style={{ color: "#ffff" }}>
              <li style={{ listStyle: "none" }}>
                <Link to="/" style={Head}>
                  <strong>General</strong>
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  CORPORATE
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  OFFICE
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  PRIVACY POLICY-KAZHCHA
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  COPYRIGHT POLICY
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  ADVERTISEMENT DISCLAIMER
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  RINT AD RATES
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  OUR OFFICES
                </Link>
              </li>
            </ul>

            {/* <----- ONLINE DEVISIONS -----> */}

            <ul style={{ color: "#ffff" }}>
              <li style={{ listStyle: "none" }}>
                <Link to="/" style={Head}>
                  <strong>ONLINE DEVISION</strong>
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  EDITORIAL DESK
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  MARCKETING DESK
                </Link>
              </li>
            </ul>
          </Col>

          {/* <----- SECTIONS -----> */}

          <Col>
            <ul style={{ color: "#ffff" }}>
              <li style={{ listStyle: "none" }}>
                <Link to="/" style={Head}>
                  <strong>SECTIONS</strong>
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  LATEST
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  KERALA
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  LOCAL
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  OBITUARY
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  NEWS 360
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  CASE DIARY
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  CINEMA
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  OPINION
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  PHOTOS
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  LIFESTYLE
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  SPIRITUAL
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  INFO+
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  ART
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  ASTRO
                </Link>
              </li>
            </ul>
          </Col>

          {/* <----- CONTACT US -----> */}

          <Col>
            {" "}
            <ul style={{ color: "#ffff" }}>
              <span style={Head}>
                <strong>CONTACT US</strong>
              </span>
              <li>
                <Link to="/" style={Links}>
                  EDITORIAL
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  ADVERTISEMENTS
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  CIRCULATION
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  BROADCASTING
                </Link>
              </li>
              <li>
                <Link to="/" style={Links}>
                  PERIODICAL
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </main>
  );
};

export default Footer;
