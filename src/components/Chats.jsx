import React from "react";
import imajone from "../images/pexels-mellamed-1133742.jpg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="user-chat">
        <img src={imajone} alt="image" />
        <div className="user-chat-info">
          <span>jane</span>
          <p>Hiiii</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={imajone} alt="image" />
        <div className="user-chat-info">
          <span>jane</span>
          <p>Hiiii</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={imajone} alt="image" />
        <div className="user-chat-info">
          <span>jane</span>
          <p>Hiiii</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
