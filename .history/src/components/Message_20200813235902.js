import React from "react";
import "./Message.css";

const Message = ({ message, timestamp, user, userPicture }) => {
  return (
    <div className="message">
      <img src={userPicture} alt="" />
      <div className="messageInfo">
        <h4>
          {user} {new Date(timestamp?.toDate())}
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
