import React from "react";
import "./Rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img src="./assets/star.png" alt="" className="starImg" />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中
          </span>
        </div>
        <img src="assets/ad.jpeg" alt="" className="eventImg" />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/1.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">ddddd</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="assets/person/2.jpeg"
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">12345</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
