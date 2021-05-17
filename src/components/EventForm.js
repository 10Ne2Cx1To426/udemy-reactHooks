import React, { useState } from "react";

import { CREATE_EVENT, DELETE_ALL_EVENT } from "../actions";

const EventForm = (props) => {
  const { state, dispatch } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addEvent = (e) => {
    e.preventDefault();
    console.log({ title, body });
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    });
    setTitle("");
    setBody("");
  };
  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm(
      "全てのイベントを本当に削除してもいいですか？"
    );
    if (result) dispatch({ type: DELETE_ALL_EVENT });
  };
  const unCreatable = title === "" || body === "";
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            placeholder="Titleを入力"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            placeholder="本文を入力"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          style={{ marginLeft: "10px" }}
          onClick={deleteAllEvents}
          disabled={state.length === 0}
        >
          すべてのイベントを削除する
        </button>
      </form>
    </>
  );
};
export default EventForm;
