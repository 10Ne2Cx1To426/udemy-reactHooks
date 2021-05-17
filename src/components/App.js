import { React, useReducer } from "react";

import reducer from "../reducers/index";
import EventForm from "./EventForm";
import Events from "./Events";

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
