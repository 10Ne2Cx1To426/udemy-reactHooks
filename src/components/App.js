import { useEffect, useState } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  useEffect(() => {
    console.log("useEffect is in invoked.");
  }); //レンダリングの後に実行される
  useEffect(() => {
    console.log("This is like componentDidMount.");
  }, []); //初回時のみレンダリングされる
  useEffect(() => {
    console.log("This callback is for name only.");
  }, [name]); //特定のコンポーネントの状態が変化した時のみレンダリングされる

  return (
    <>
      <p>
        現在の{name}は{price}です
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      <button onClick={() => setState(props)}>reset</button>
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000
};

export default App;
