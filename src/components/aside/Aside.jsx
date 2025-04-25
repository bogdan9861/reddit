import React from "react";

import Games from "../../assets/icons/Games";
import Discussions from "../../assets/icons/Discussions";
import News from "../../assets/icons/News";
import Home from "../../assets/icons/Home";
import Profile from "../../assets/icons/Profile";
import { Link, useSearchParams } from "react-router-dom";

import "./Aside.scss";

const Aside = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <aside className="aside">
      <div className="aside__inner">
        <Link className="aside__item" to="/">
          <Home color="#fff" size={23} />
          <span className="aside__item-text">Главная</span>
        </Link>

        <Link className="aside__item" to="/profile/me">
          <Profile color="#fff" size={23} />
          <span className="aside__item-text">Профиль</span>
        </Link>

        <div className="aside__divider" />

        <span className="aside__label">Теги</span>

        <div className="aside__item active" onClick={() => setSearchParams("")}>
          <span className="aside__item-text">Все</span>
        </div>
        <div className="aside__item" onClick={() => setSearchParams("tags=1")}>
          <Games color="#fff" size={25} />
          <span className="aside__item-text">Игры</span>
        </div>
        <div className="aside__item" onClick={() => setSearchParams("tags=2")}>
          <Discussions color="#fff" size={23} />
          <span className="aside__item-text">Обсуждения</span>
        </div>
        <div className="aside__item" onClick={() => setSearchParams("tags=3")}>
          <News color="#fff" size={30} />
          <span className="aside__item-text">Новости</span>
        </div>

        <div className="aside__divider" />
      </div>
    </aside>
  );
};

export default Aside;
