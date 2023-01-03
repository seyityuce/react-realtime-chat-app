import React, { useContext, useState } from "react";
import imajone from "../images/pexels-mellamed-1133742.jpg";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "./context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUSer } = useContext(AuthContext);
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "===", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId =
      currentUSer.uid > user.uid
        ? currentUSer.uid + user.uid
        : user.uid + currentUSer.uid;
    try {
      const res = await getDocs(db, "chats", combinedId);
      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc, (db, "chats", combinedId), {
          messages: [],
        });
        //create user chats
      }
    } catch (err) {
      console.log();
    }
  };
  return (
    <div className="search">
      <div className="search-form">
        <input
          type="text"
          placeholder="search a user"
          // onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {err && <span>User not found</span>}
      {user && (
        <div className="user-chat" onClick={handleSelect}>
          <img src={user.photoURL} alt="image" />
          <div className="user-chat-info">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
