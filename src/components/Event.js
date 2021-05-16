export const Event = ({ dispatch, event }) => {
  const handleClickDeleteButton = () => {
    dispatch({ type: "DELETE_EVENT", id });
  };
  const id = event.id;
  dispatch({
    type: "DELETE_EVENT",
    id
  });
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          className="btn btn-danger"
          type="button"
          onClick={handleClickDeleteButton}
        >
          削除
        </button>
      </td>
    </tr>
  );
};
