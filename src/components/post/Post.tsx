import { MoreVert } from "@mui/icons-material";
import React, { FC } from "react";
import "./Post.css";
import { Users } from "../../dummyData";
import userEvent from "@testing-library/user-event";

type PostProps = {
  id: number;
  desc: string;
  photo: string;
  date: string;
  userId: number;
  like: number;
  comment: number;
};

type userProps = {
  id: number;
  profilePicture: string;
  username: string;
};

export const Post: FC<{ post: PostProps }> = ({ post }) => {
  const user: userProps = Users.filter(
    (user: userProps) => user.id === post.userId
  )[0];
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={user.profilePicture} alt="" className="postProfileImg" />
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">
              {post.like}人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
};
