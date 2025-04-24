import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import { service } from "../../api/service";
import { useParams } from "react-router-dom";

import "./Comments.scss";
import { setImage } from "../../utils/setImage";

const Comments = () => {
  const { id } = useParams();

  const [post, setPost] = useState({});

  const { posts } = service();
  const { getById } = posts;

  useEffect(() => {
    getById(id).then((res) => {
      setPost(res.data);
    });
  }, []);

  useEffect(() => {
    console.log(post);
  }, [post]);

  return (
    <div className="comments-wrapper">
      <div className="comments__inner">
        <Post post={post} />
        <input
          className="comments__input"
          type="text"
          placeholder="Присоединиться к обсуждению"
        />
        <div className="comments">
          <div className="comments__list">
            {post?.comments?.map((comment) => (
              <div className="comments__item">
                <div className="comments__item-header">
                  <img
                    className="comments__item-header__img"
                    src={setImage(comment?.User.avatar)}
                    alt=""
                  />
                  <span className="comments__item-header__name">
                    {comment?.User.name}
                  </span>
                </div>
                <p className="comments__item-text">{comment?.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
