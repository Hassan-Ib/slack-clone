import React, { useState, useEffect } from "react";

import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import AppsIcon from "@material-ui/icons/Apps";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";
import { useStateProvider } from "./StateProvider";

const Sidebar = () => {
  const { user } = useStateProvider();

  const [channels, setChannels] = useState([]);
  useEffect(() => {
    db.collection("rooms").onSnapshot((collection) =>
      setChannels(
        collection.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Silva tongue</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Thread" />
      <SidebarOption Icon={InboxIcon} title="Mention & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="Files browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />
      {channels.map((channel) => (
        <SidebarOption title={channel.name} key={channel.id} id={channel.id} />
      ))}
    </aside>
  );
};

export default Sidebar;
