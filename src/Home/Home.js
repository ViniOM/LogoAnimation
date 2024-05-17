import "./Home.css";
import { React, useState } from "react";

export default function Home(props) {
  let [count, setCount] = useState(9);
  let [change, setChange] = useState(false);

  const handleClick = () => {
    setCount(count - 2);
    console.log(count);

    if (count === 1) {
      setCount((count = 9));
      setChange((change = true));
      console.log(change);
      return;
    }

    setChange((change = false));
  };

  return (
    <div className="home">
      <div className="nav">
        <h1>Seja bem Vindo a Home!</h1>
      </div>

      <div className="content">
        <img
          src={props.img}
          alt=""
          width="300px"
          className="logo"
          style={{
            animation: `App-logo-spin infinite ${count}s linear`,
          }}
        />
        <br />
        <button className="counter" onClick={handleClick}>
          Aumentar velocidade
        </button>
        <p
          className="reset"
          style={{
            display: change === true ? "block" : "none",
            color: "red",
            letterSpacing: '1px'
          }}
        >
          Reiniciou!
        </p>
      </div>
    </div>
  );
}
