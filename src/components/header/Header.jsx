import React, { useEffect, useState } from "react";

import "./Header.scss";
import { Link } from "react-router-dom";
import { service } from "../../api/service";
import { setImage } from "../../utils/setImage";

const Header = ({ isAuth }) => {
  const [userData, setUserData] = useState(null);

  const { user } = service();
  const { current } = user;

  useEffect(() => {
    current()
      .then((res) => setUserData(res.data.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__logo">HubTalk</h1>

        <div className="header__search-wrapper">
          <input className="header__search" placeholder="Поиск по HubTalk" />
        </div>

        <div className="header__controls">
          {isAuth ? (
            <>
              <div className="header__create-wrapper">
                <button className="header__create">Create</button>
              </div>

              <img
                className="header__avatar"
                src={setImage(userData?.avatar)}
                alt="avatar"
              />
            </>
          ) : (
            <>
              <Link className="header__btn-login" to={"/?window=login"}>
                Log in
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
