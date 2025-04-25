import React, { useEffect, useState } from "react";
import Post from "../../components/post/Post";
import { service } from "../../api/service";
import { Link, useNavigate, useParams } from "react-router-dom";

import { setImage } from "../../utils/setImage";
import { formatDate } from "../../utils/formatDate";

import "./Comments.scss";

const Comments = () => {
  const { id } = useParams();
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");

  const [post, setPost] = useState({});
  const [commentsData, setCommentsData] = useState([]);

  const navigate = useNavigate();
  const { posts, comments } = service();
  const { getById } = posts;
  const { send } = comments;

  useEffect(() => {
    getById(id).then((res) => {
      setPost(res.data);
      setCommentsData(res.data.comments);
    });
  }, []);

  const sendComment = () => {
    send({ postId: id, text })
      .then((res) => {
        setCommentsData([...commentsData, res.data]);
      })
      .catch((e) => console.log(e));

    setText("");
    setFocused(false);
  };

  return (
    <div className="comments-wrapper">
      <div className="comments__inner">
        <button className="comments__back" onClick={() => navigate(-1)}>
          <img
            src="https://img.icons8.com/?size=100&id=3164&format=png&color=FFFFFF"
            alt=""
          />
        </button>
        <Post post={post} onCommentsClick={() => setFocused(true)} />
        {!focused ? (
          <input
            onFocus={() => setFocused(true)}
            className="comments__input"
            type="text"
            placeholder="Присоединиться к обсуждению"
          />
        ) : (
          <div className="comments__textarea-wrapper">
            <textarea
              autoFocus
              className="comments__textarea"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <div className="comments__textarea-btns">
              <button
                className="comments__textarea-btn cancel"
                onClick={() => setFocused(false)}
              >
                Отмена
              </button>
              <button
                className="comments__textarea-btn send"
                onClick={sendComment}
              >
                Готово
              </button>
            </div>
          </div>
        )}

        <div className="comments">
          <div className="comments__list">
            {commentsData?.map((comment) => (
              <div className="comments__item">
                <img
                  className="comments__item-header__img"
                  src={setImage(comment?.User.avatar)}
                  alt=""
                />
                <div className="comments__item-content">
                  <div className="comments__item-head">
                    <span className="comments__item-header__name">
                      {comment?.User.name}
                    </span>
                    <span className="comments__item-date">
                      {formatDate(comment?.date)}
                    </span>
                  </div>
                  <p className="comments__item-text">{comment?.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
