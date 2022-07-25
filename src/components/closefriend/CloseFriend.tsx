import React, { FC } from "react";

type userProps = {
  id: number;
  profilePicture: string;
  username: string;
};

export const CloseFriend: FC<{ user: userProps }> = ({ user }) => {
  return (
    <div>
      <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
};
