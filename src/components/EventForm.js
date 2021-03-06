import React, { useState, useContext } from "react";

import {
  CREATE_EVENT,
  DELETE_ALL_EVENT,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from "../actions";
import AppContext from "../contexts/AppContext";
import { timeCurrentIso8601 } from "../utils";

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    });
    dispatch({
      type: ADD_OPERATION_LOG,
      description: "イベントを作成しました。",
      operatedAt: timeCurrentIso8601()
    });
    setTitle("");
    setBody("");
  };
  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm(
      "全てのイベントを本当に削除してもいいですか？"
    );
    if (result) {
      dispatch({ type: DELETE_ALL_EVENT });

      dispatch({
        type: ADD_OPERATION_LOG,
        description: "全てのイベントを削除しました。",
        operatedAt: timeCurrentIso8601()
      });
    }
  };
  const deleteAllLogs = (e) => {
    e.preventDefault();
    const result = window.confirm("全てのログを本当に削除してもいいですか？");
    if (result) {
      dispatch({
        type: DELETE_ALL_OPERATION_LOGS
      });
    }
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
          disabled={state.events.length === 0}
        >
          すべてのイベントを削除する
        </button>
        <button
          className="btn btn-danger"
          style={{ marginLeft: "10px" }}
          onClick={deleteAllLogs}
          disabled={state.operationLogs.length === 0}
        >
          すべてのログを削除する
        </button>
      </form>
    </>
  );
};
export default EventForm;
