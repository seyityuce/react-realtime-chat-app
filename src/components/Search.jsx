import React from "react";
import imajone from "../images/pexels-mellamed-1133742.jpg";

const Search = () => {
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="search a user" />
      </div>
      <div className="user-chat">
        <img src={imajone} alt="image" />
        <div className="user-chat-info">
          <span>jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
