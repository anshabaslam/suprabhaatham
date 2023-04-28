import * as React from "react";
import { useRef } from "react";
import Styles from "./component.module.scss";
import Logo from "../Assets/images/suprabhathamlogo.svg"

const Header = () => {
  return (
    <main>
      <div className={Styles.navBar}>
        <Logo
        alt="logo"
        width={200}
        height={100}
        src="../Assets/images/suprabhathamlogo.svg"
        />
      </div>
    </main>
  );
};

export default Header;
