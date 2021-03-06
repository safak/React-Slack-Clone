import React, { useState } from "react";
import "./ChatInput.css";
import { Button } from "@material-ui/core";

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState;
  const handleSend = (e) => {
    e.preventDefault();
  };

  return (
    <div className="chatInput">
      <form>
        <input placeholder={`Message #${channelName}`} />
        <Button type="submit" onClick={handleSend}>
          SEND
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
