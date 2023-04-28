import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Logo from "../assets/Images/suprabhathamlogo.svg";
import Twitter from "../assets/Images/sm-twitter.svg";
import Facebook from "../assets/Images/sm-fb.svg";
import Instagram from "../assets/Images/sm-insta.svg"
import Search from "../assets/Images/search.svg";
import Menu from "../assets/Images/menubefore.svg";

import { Link } from "gatsby";

const Header = () => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <AppBar
        position="static"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          boxShadow: "none",
          height: 100,
          width: "75%",
          backgroundColor: "#ffff",
        }}
      >
        <div 
          style={{
            display: "flex",
            width: "20%",
          }}
        >
          <div  
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: 140,
            }}
          >
            <Typography variant="h6" component="div" padding={0.5}>
              <Twitter />
            </Typography>
            <Typography variant="h6" component="div" padding={0.2}>
              <Facebook />
            </Typography>
            <Typography variant="h6" component="div" padding={0.2}>
              <Instagram />
            </Typography>
          </div>
        </div>
        <div style={{ width: "35%" }}>
          <Logo />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "20%",
          }}
        >
          <div className="SocialMedia"
            style={{
              display: "flex",
              alignItems: "center",
              width: 150,
              justifyContent: "space-between  ",
            }}
          >
            <div>
              <Search />
            </div>
            <Link className="Links" to="/signin">
              Sign in
            </Link>
            <div>
              <Menu />
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
