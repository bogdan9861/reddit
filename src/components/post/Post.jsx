import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Heart from "../../assets/icons/Heart";
import Comment from "../../assets/icons/Comment";

import { setImage } from "../../utils/setImage";

import "./Post.scss";
import { service } from "../../api/service";

const Post = ({ post }) => {
  const user = post?.User;

  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const { posts } = service();
  const { like, liked, unlike } = posts;

  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      liked(post.id).then((res) => {
        setIsLiked(res.data.isLiked);
      });

      setLikes(post.rating);
    }
  }, [post]);

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);

      setLikes(likes - 1);

      unlike(post.id).then((res) => {});
    } else {
      setIsLiked(true);

      setLikes(likes + 1);

      like(post.id).then((res) => {});
    }
  };

  return (
    <div className="post">
      <div className="post__header">
        <img
          className="post__header-img"
          src={setImage(user?.avatar)}
          alt="profile photo"
        />
        <Link className="post__header-name" to={"/#"}>
          {user?.name}
        </Link>
      </div>
      <Link to={`/post/${post.id}/comments`}>
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
            muted
          />
        )}
      </Link>
      <div className="post__controls">
        <button className="post__controls-btn" onClick={handleLike}>
          <Heart size={20} color={isLiked ? "#b31616" : "#fff"} />
          <span>{likes}</span>
        </button>
        <button
          className="post__controls-btn"
          onClick={() => navigate(`/post/${post.id}/comments`)}
        >
          <Comment size={20} color="#fff" />
          <span>{post?.comments?.length}</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
