import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import EditNews from "../pages/EditNews";
import { Link } from "gatsby";

const LikeAndShare = (props: any) => {
  const [liked, setLiked] = useState(true);
  const [edit, setEdit] = useState(true);
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true);
  };

  const handleLeave = () => {
    setHover(false);
  };
  return (
    <div
      style={{
        width: "80px", // changed 40px to 80px
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: props.direction,
      }}
    >
      <IoMdShare size={14} cursor={"pointer"} />
      {liked ? (
        <AiOutlineHeart
          size={14}
          cursor={"pointer"}
          onClick={() => setLiked(!liked)}
        />
      ) : (
        <AiFillHeart
          size={14}
          cursor={"pointer"}
          onClick={() => setLiked(!liked)}
          color={"red"}
        />
      )}
      <Link to="">
        <CiEdit                         //PENCIL ICON FOR EDIT
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          size={17}
          cursor={"pointer"}
          onClick={() => setEdit(!edit)}
          color={hover ? "black" : "grey"}
        />
      </Link>
    </div>
  );
};

export default LikeAndShare;
