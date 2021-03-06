import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <h2>In the {roomId} mf 🚀 </h2>
      <div className="divHeader">
        <div className="chatHeaderLeft">
          <h4 className="chatChannelName">
            <strong># general</strong>
          </h4>
        </div>
        <div className="chatHeaderRight"></div>
      </div>
    </div>
  );
};

export default Chat;
