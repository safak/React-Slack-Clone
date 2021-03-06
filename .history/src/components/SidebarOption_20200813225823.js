import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";

const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () =>{
    const channelName = prompt("Enter a channel name: ")
  }

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOptionIcon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOptionChannel">
          <span className="sidebarOptionHash">#</span> {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
