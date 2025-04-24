import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Heart from "../../assets/icons/Heart";
import Comment from "../../assets/icons/Comment";

import { setImage } from "../../utils/setImage";

import "./Post.scss";
import { service } from "../../api/service";

const Post = ({ post }) => {
  const { avatar, name } = post.User;

  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const { posts } = service();
  const { like, liked, unlike } = posts;

  useEffect(() => {
    if (post) {
      liked(post.id).then((res) => {
        setIsLiked(res.data.isLiked);
      });
    }
  }, [post]);

  const handleLike = () => {};

  return (
    <div className="post">
      <div className="post__header">
        <img
          className="post__header-img"
          src={setImage(avatar)}
          alt="profile photo"
        />
        <Link className="post__header-name" to={"/#"}>
          {name}
        </Link>
      </div>
      <div className="post__content">
        <h2 className="post__content-title">{post.title}</h2>
        <p className="post__content-text">{post.text}</p>
      </div>
      {post?.mediaType?.includes("image") && (
        <div className="post__image-wrapper">
          <img
            className="post__content-bg_img"
            src={setImage(post?.media)}
            alt=""
          />
          <img className="post__image" src={setImage(post?.media)} alt="" />
        </div>
      )}

      {post?.mediaType?.includes("video") && (
        <video
          style={{ width: "100%", borderRadius: 20 }}
          src={setImage(post?.media)}
          autoPlay
          controls
          mute
        />
      )}

      <div className="post__controls">
        <button className="post__controls-btn">
          <Heart size={20} color={isLiked ? "#b31616" : "#fff"} />
          <span>0</span>
        </button>
        <button className="post__controls-btn">
          <Comment size={20} color="#fff" />
          <span>0</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
