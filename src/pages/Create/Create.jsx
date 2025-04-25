import React, { useEffect, useState } from "react";
import Dragger from "antd/es/upload/Dragger";

import "./Create.scss";
import { service } from "../../api/service";
import AddTagsModal from "../../components/addTagsModal/AddTagsModal";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [addTagsOpen, setAddTagsOpen] = useState(false);

  const navigate = useNavigate();

  const { posts } = service();
  const { post } = posts;

  useEffect(() => {
    setDisabled(!title);
  }, [title, text, file]);

  const onPost = () => {
    const formdData = new FormData();

    if (file) {
      formdData.append("file", file);
    }

    formdData.append("title", title);
    formdData.append("text", text);

    if (tags.length) {
      formdData.append(
        "tags",
        tags.map((tag) => tag.id)
      );
    }

    post(formdData)
      .then((res) => {
        navigate("/profile/me");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="create">
        <div className="create__inner">
          <h1 className="create__title">Создать пост</h1>

          <input
            className="create__input"
            type="text"
            placeholder="Заголовок"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <button
            className="create__tags-btn"
            onClick={() => setAddTagsOpen(true)}
          >
            Теги +
          </button>

          {tags && (
            <ul className="create__tags">
              {tags?.map((tag) => (
                <li className="create__tag" key={tag.id}>
                  <span className="create__tag-text">{tag.name}</span>
                </li>
              ))}
            </ul>
          )}

          <textarea
            className="create__textarea"
            placeholder="Введите текст"
            onChange={(e) => setText(e.target.value)}
          />

          <span className="create__dragger-label">Выберите файл</span>
          <Dragger
            height={70}
            multiple={false}
            maxCount={1}
            accept=".jpg, .png, .jpeg"
            onChange={(file) => setFile(file.file.originFileObj)}
          />

          <button className="create__btn" onClick={onPost} disabled={disabled}>
            Опубликовать
          </button>
        </div>
      </div>
      <AddTagsModal
        open={addTagsOpen}
        setOpen={setAddTagsOpen}
        selectedTags={tags}
        setSelectedTags={setTags}
      />
    </>
  );
};

export default Create;
