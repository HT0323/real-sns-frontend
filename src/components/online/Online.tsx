import React, { FC } from "react";

type userProps = {
  id: number;
  profilePicture: string;
  username: string;
};

export const Online: FC<{ user: userProps }> = ({ user }) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
};
