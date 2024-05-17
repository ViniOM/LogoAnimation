import "./Home.css";
import { React, useState } from "react";

export default function Home(props) {
  let [count, setCount] = useState(9);

  const handleClick = () => {
    setCount(count - 1);

    if (count == 1) {
      setCount((count = 10));
    }
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
        <br/>
        <button className="counter" onClick={handleClick}>
          Aumentar velocidade
        </button>
        <p
          className="reset"
          style={{
            display: count == 10 ? "block" : "none",
          }}
        >
          Reiniciou!
        </p>
      </div>
    </div>
  );
}
