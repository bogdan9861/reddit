import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Header from "../../components/header/Header";
import Feed from "../../components/feed/Feed";
import SignModal from "../../components/SignModal/SignModal";
import { service } from "../../api/service";
import Aside from "../../components/aside/Aside";

const Main = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const { user } = service();
  const { signIn, register } = user;

  const loginFields = [
    {
      placeholder: "Введите логин",
      value: login,
      cb: (e) => setLogin(e.target.value),
    },
    {
      placeholder: "Введите пароль",
      value: password,
      cb: (e) => setPassword(e.target.value),
    },
  ];

  const registerFileds = [
    {
      placeholder: "Введите имя пользователя",
      value: name,
      cb: (e) => setName(e.target.value),
    },
    {
      placeholder: "Введите логин",
      value: login,
      cb: (e) => setLogin(e.target.value),
    },
    {
      placeholder: "Введите пароль",
      value: password,
      cb: (e) => setPassword(e.target.value),
    },
    {
      placeholder: "Придумайте описание для профиля",
      value: description,
      type: "textarea",
      cb: (e) => setDescription(e.target.value),
    },
  ];

  const onSuccessLogin = (res) => {
    setSearchParams("");
    window.location.reload();
    localStorage.setItem("hub-talk-token", res.data.token);
  };

  const onLogin = () => {
    signIn({ login, password }).then((res) => {
      onSuccessLogin(res);
    });
  };

  const onRegister = () => {
    register({ name, login, description, password }).then((res) => {
      onSuccessLogin(res);
    });
  };

  return (
    <>
      <Feed />
      <SignModal
        open={searchParams.get("window") === "login"}
        onCancel={() => setSearchParams("")}
        title={"Вход"}
        text={`Продолжая, вы соглашаетесь с нашим Пользовательским соглашением и
              подтверждаете, что понимаете Политику конфиденциальности.`}
        fields={loginFields}
        link={"?window=register"}
        btnText={"Войти"}
        linkLabel={"Нет аккаунта?"}
        linkText={"Создать"}
        onSubmit={onLogin}
      />

      <SignModal
        open={searchParams.get("window") === "register"}
        onCancel={() => setSearchParams("")}
        title={"Регистрация"}
        text={`Продолжая, вы соглашаетесь с нашим Пользовательским соглашением и
              подтверждаете, что понимаете Политику конфиденциальности.`}
        fields={registerFileds}
        link={"?window=login"}
        linkLabel={"Уже есть аккаунт?"}
        linkText={"Войти"}
        btnText={"Создать"}
        onSubmit={onRegister}
      />
    </>
  );
};

export default Main;
