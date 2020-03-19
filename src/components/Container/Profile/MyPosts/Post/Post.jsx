import React from "react";
import con from "./post.module.css";

const Post = props => {
  return (
    <div className={con.Post}>
      <img
        className={con.Post_Logo}
        src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"
      />
      {props.message}
      <div>
        <span>likes</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
