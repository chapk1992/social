import React from "react";
import Post from "./Post/Post";
import con from "./../Profile.module.css";

const MyPosts = (props) => {
 

  let postElements = props.posts.map(p => {
    return <Post message={p.message} likesCount={p.likesCount} />;
  });

  return <div className={con.post}>{postElements}</div>;
};

export default MyPosts;
