import React from "react";
import { Divider, Modal } from "antd";

import "./SignModal.scss";
import { Link } from "react-router-dom";

const LoginModal = ({
  open,
  onCancel,
  title,
  text,
  fields,
  link,
  linkLabel,
  linkText,
  btnText,
  onSubmit,
}) => {
  return (
    <Modal className="login" open={open} footer={false} onCancel={onCancel}>
      <div className="login__body">
        <div className="login__body-inner">
          <div className="login__content">
            <h1 className="login__title">{title}</h1>
            <p className="login__text">{text}</p>
          </div>
          <Divider>
            <span>OR</span>
          </Divider>
          <div className="login__form">
            {fields?.map((input) => (
              <input
                className="login__input"
                placeholder={input.placeholder}
                onChange={input.cb}
                value={input.value}
              />
            ))}
          </div>
          <span className="login__link">
            {linkLabel} <Link to={link}>{linkText}</Link>
          </span>
        </div>
        <button className="login__btn" onClick={onSubmit}>
          {btnText}
        </button>
      </div>
    </Modal>
  );
};

export default LoginModal;
