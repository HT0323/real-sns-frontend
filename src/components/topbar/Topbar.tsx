import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Real SNS</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="探し物は何ですか?"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIconItem">
          <ChatIcon />
          <span className="topbarIconBadge">1</span>
        </div>
        <div className="topbarIconItem">
          <NotificationsIcon />
          <span className="topbarIconBadge">2</span>
        </div>
      </div>
      <img
        src="/assets/person/人物アイコン.jpeg"
        alt=""
        className="topbarImg"
      />
    </div>
  );
}
