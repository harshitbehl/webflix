import React from "react";
import {
  Assessment,
  ChatBubbleOutline,
  DynamicFeed,
  Equalizer,
  Home,
  MailOutline,
  PeopleAlt,
  PlayCircleOutline,
  Report,
  TrendingUp,
  WorkOutline,
  List,
} from "@material-ui/icons";

import "./Sidebar.scss";
import SidebarMenu from "./SidebarMenu";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarMenu
        title={"Dashboard"}
        listSpec={[
          { text: "Home", icon: <Home />, link: "/" },
          { text: "Analytics", icon: <Equalizer /> },
          { text: "Sales", icon: <TrendingUp /> },
        ]}
      />
      <hr />
      <SidebarMenu
        title={"Quick Menu"}
        listSpec={[
          { text: "Users", icon: <PeopleAlt />, link: "/users" },
          { text: "Movies", icon: <PlayCircleOutline />, link: "/movies" },
          { text: "Lists", icon: <List />, link: "/lists" },
          { text: "Reports", icon: <Assessment /> },
        ]}
      />
      <hr />
      <SidebarMenu
        title={"Notifications"}
        listSpec={[
          { text: "Mail", icon: <MailOutline /> },
          { text: "Feedback", icon: <DynamicFeed /> },
          { text: "Messages", icon: <ChatBubbleOutline /> },
        ]}
      />
      <hr />
      <SidebarMenu
        title={"Staff"}
        listSpec={[
          { text: "Manage", icon: <WorkOutline /> },
          { text: "Analytics", icon: <Equalizer /> },
          { text: "Reports", icon: <Report /> },
        ]}
      />
    </div>
  );
}

export default Sidebar;
