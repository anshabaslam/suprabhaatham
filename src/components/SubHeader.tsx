import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";
import { IoHome } from "react-icons/io5";
import { Link } from "gatsby";
import { IoCloudOutline } from "react-icons/io5";
import { Mainstyle } from "../Config/Mainstyle";
import MenuItem from "@mui/material/MenuItem";
import "../components/index.css";
import Select from "@mui/material/Select";

const SubHeader = () => {
  const [dateTime, setDateTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(moment());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatDateTime = (dateTime: any) => {
    const dayOfWeek = dateTime.format("dddd");
    const formattedDayOfWeek = `<strong>${dayOfWeek}</strong>`;
    return dateTime.format(`[${formattedDayOfWeek},] MMMM Do YYYY, h:mm a`);
  };
  const Selectstyle = {
    width: 150,
    fontSize: 10,
  };

  const names = [
    "Kozhikode Edition",
    "Kannur Edition",
    "Palakkad Edition",
    "Malappuram Edition",
    "Kochi Edition",
    "Thrissur Edition",
    "Thiruvananthapuram Edition",
  ];
  return (
    <main className="subHeader">
      <div className="subHeaderContainer">
        <div>
          <span
            className="moment"
            dangerouslySetInnerHTML={{
              __html: ` ${formatDateTime(dateTime)} `,
            }}
          />
        </div>
        <div className="Categories" style={Mainstyle.middleTxt}>
          <Link to="/" style={{ height: "100%" }}>
            <IoHome color="#0055a6" size={15} />
          </Link>
          <Link to="/" className="categorylink">
            <span>Politics</span>
          </Link>
          <Link to="/" className="categorylink">
            <span>Sports</span>
          </Link>
          <Link to="/" className="categorylink">
            <span>World</span>
          </Link>
          <Link to="/" className="categorylink">
            <span>Cinema</span>
          </Link>
          <Link to="/" className="categorylink">
            <span>Business</span>
          </Link>
          <Link to="/" className="categorylink">
            <span>Tech</span>
          </Link>
          <Link to="/" className="categorylink">
            <span>Health</span>
          </Link>
          <Link to="/" className="categorylink">
            <span>Food</span>
          </Link>
          <Link to="/" className="categorylink">
            <span>Travel</span>
          </Link>
          {/* </Nav> */}
        </div>
        <div className="WeatherSection">
          <Select
            style={{
              ...Mainstyle.smallTxt,
              width: "100%",
              height: 25,
              outline: "none",
            }}
          >
            {names.map((name) => (
              <MenuItem style={Selectstyle} key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
          {/* <div> */}
            <span className="weatherIcon" style={Mainstyle.middleTxt}>
            <IoCloudOutline color="#0055a6" />
              <strong>29</strong>*C
            </span>
          {/* </div> */}
        </div>
      </div>
    </main>
  );
};

export default SubHeader;
