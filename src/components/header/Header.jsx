import React, { useEffect, useState } from "react";

import "./Header.scss";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { service } from "../../api/service";
import { setImage } from "../../utils/setImage";

const Header = ({ isAuth }) => {
  const [userData, setUserData] = useState(null);
  const [searchTitle, setSearchTitle] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const { user } = service();
  const { current } = user;

  useEffect(() => {
    current()
      .then((res) => setUserData(res.data.data))
      .catch((e) => console.log(e));
  }, []);

  const onSearch = (e) => {
    if (e.key === "Enter") {
      if (searchTitle) {
        setSearchParams(`title=${searchTitle}`);
      } else {
        setSearchParams("");
      }
    }
  };

  return (
    <header className="header">
      <div className="header__inner">
        <Link to={"/"}>
          <h1 className="header__logo">ThreadNet</h1>
        </Link>

        <div className="header__search-wrapper">
          <input
            className="header__search"
            placeholder="Поиск по ThreadNet"
            onChange={(e) => setSearchTitle(e.target.value)}
            onKeyDown={onSearch}
          />
        </div>

        <div className="header__controls">
          {userData ? (
            <>
              <div className="header__create-wrapper">
                <Link className="header__create" to={"/create"}>
                  Create
                </Link>
              </div>
              <Link to={`/profile/${userData?.id}`}>
                <img
                  className="header__avatar"
                  src={setImage(userData?.avatar)}
                  alt="avatar"
                />
              </Link>
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
