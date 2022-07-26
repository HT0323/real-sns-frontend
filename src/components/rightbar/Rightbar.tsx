import React, { FC } from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import { Online } from "../online/Online";

type ProfileProps = boolean;

export const Rightbar: FC<{ profileFlag: ProfileProps }> = ({
  profileFlag,
}) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="eventContainer">
          <img src="./assets/star.png" alt="" className="starImg" />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中
          </span>
        </div>
        <img src="assets/ad.jpeg" alt="" className="eventImg" />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img
          src="assets/promotion/promotion1.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">ショッピング</p>
        <img
          src="assets/promotion/promotion2.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">カーショップ</p>
        <img
          src="assets/promotion/promotion3.jpeg"
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">test株式会社</p>
      </>
    );
  };
  const ProfileRightbar = () => {
    return <>dddddd</>;
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profileFlag ? <ProfileRightbar /> : <HomeRightBar />}
      </div>
    </div>
  );
};
