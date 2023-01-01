import React from "react";
import imajone from "../images/pexels-mellamed-1133742.jpg";

const Message = () => {
  return (
    <div className="message owner">
      <div className="message-info">
        <img src={imajone} alt="" />
        <span>just now</span>
      </div>
      <div className="message-content">
        <p>hellööö</p>
        <img src={imajone} alt="" />
      </div>
    </div>
  );
};

export default Message;
