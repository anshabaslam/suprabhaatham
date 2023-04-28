import React from "react";
import "./index.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const ButtonPrimary = (props: any) => {
  return (
    <div className="buttonContainer">
      <button className="buttonPrimary" onClick={props.onclick}>
        {props.name}
        <MdKeyboardArrowRight size={15} />
      </button>
    </div>
  );
};

export default ButtonPrimary;
