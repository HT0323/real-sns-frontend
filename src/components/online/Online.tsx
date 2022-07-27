import React, { FC } from "react";

type userProps = {
  id: number;
  profilePicture: string;
  username: string;
};

export const Online: FC<{ user: userProps }> = ({ user }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={PUBLIC_FOLDER + user.profilePicture}
          alt=""
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
};
