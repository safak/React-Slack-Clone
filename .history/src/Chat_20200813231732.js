import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { StarBorderOutlined, InfoOutlined } from "@material-ui/icons";
import db from "./firebase";

const Chat = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("message")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.doc.map((doc) => doc.date()))
      );
  }, [roomId]);

  console.log(roomMessages)

  return (
    <div className="chat">
      <div className="chatHeader">
        <div className="chatHeaderLeft">
          <h4 className="chatChannelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chatHeaderRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
