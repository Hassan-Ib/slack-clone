import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "./firebase";
const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const history = useHistory();
  const addChannel = function () {
    const channelName = prompt("please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannel = function () {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {
        //   Icon ? `<h3>${title}</h3>` : `<h3># ${title}</h3>`;
        Icon ? (
          <h3>{title}</h3>
        ) : (
          <h3 className="sidebarOption__channel">
            <span className="sidebarOption__hash">#</span> {title}
          </h3>
        )
      }
    </div>
  );
};

export default SidebarOption;
