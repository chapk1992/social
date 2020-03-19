import React from "react";
import con from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = props => {
  
  return (
    <div className={con.Container}>
      <img
        className={con.Logo}
        src="https://uralkafel.ru/uploadedFiles/eshopimages/big/brauni_2_dekor.jpg"
        alt="Logo"
      />
      <div>New post</div>
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
