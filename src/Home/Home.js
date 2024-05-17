import "./Home.css";

export default function Home(props) {
  return (
    <div className="home">
      <h1>Seja bem Vindo a</h1>
      <h2>Home!</h2>
      <img src={props.img} alt="" width="100px" className="logo" />
    </div>
  );
}
