import React, { useEffect, useState } from "react";
import { service } from "../../api/service";
import { useParams } from "react-router-dom";
import { setImage } from "../../utils/setImage";
import Post from "../../components/post/Post";

import "./Profile.scss";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const { id } = useParams();

  const { user } = service();
  const { getUserById } = user;

  useEffect(() => {
    getUserById(id)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="profile">
      <div className="profile__inner">
        <div className="profile__header">
          <img
            className="profile__avatar"
            src={setImage(userData?.avatar)}
            alt=""
          />
          <div className="profile__header-content">
            <span className="profile__name">{userData?.name}</span>
            <p className="profile__text">{userData?.description}</p>
          </div>
        </div>
      </div>
      <div className="profile__posts">
        {userData?.posts?.map((post) => {
          console.log(post);

          return <Post post={post} />;
        })}
      </div>
      <div className="profile__aside"></div>
    </div>
  );
};

export default Profile;
