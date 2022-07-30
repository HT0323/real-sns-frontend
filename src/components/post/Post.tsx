import { MoreVert } from "@mui/icons-material";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import "./Post.css";
import { format } from "timeago.js";

type PostProps = {
  _id: string;
  desc: string;
  photo?: string;
  date?: string;
  userId: string;
  likes: [];
  comment?: number;
  img: string;
  createdAt: string;
  updatedAt: string;
};

type userProps = {
  id: number;
  profilePicture: string;
  username: string;
};

type UserStruct = {
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  coverPicture: string;
  followers: [];
  followings: [];
  isAdmin: boolean;
  desc: string;
  city: string;
  timestamps: string;
};

export const Post: FC<{ post: PostProps }> = ({ post }) => {
  const [like, setLike] = useState<number>(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState<UserStruct>({
    username: "",
    email: "",
    password: "",
    profilePicture: "",
    coverPicture: "",
    followers: [],
    followings: [],
    isAdmin: false,
    desc: "",
    city: "",
    timestamps: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users/${post.userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, []);

  // const user: userProps = Users.filter(
  //   (user: userProps) => user.id === post.userId
  // )[0];

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={
                user.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"
              }
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={PUBLIC_FOLDER + "/heart.png"}
              alt=""
              className="likeIcon"
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">
              {like}人がいいねを押しました
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
