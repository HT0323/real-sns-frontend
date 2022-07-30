import axios from "axios";
import React, { useEffect, useState } from "react";
import { Post } from "../post/Post";
import Share from "../share/Share";
import "./Timeline.css";

type PostStruct = {
  _id: string;
  userId: string;
  desc: string;
  img: string;
  likes: [];
  createdAt: string;
  updatedAt: string;
};

export default function Timeline() {
  const [posts, setPosts] = useState<PostStruct[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "/posts/timeline/62dc0a036c45e01e67c8f254"
      );
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
