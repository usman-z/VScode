import "./styles/Main.css";
import "../App.css";

import Button from "./Button";
import Video from "../assets/vid.mp4";

export default function Main() {
  return (
    <div className="hero-container">
      <video src={Video} autoPlay loop muted/>        {/** a comment... */}
      <h1>Welcome</h1>
      <p>ADMIN</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          ENTER
        </Button>
        <Button className = "btns" buttonStyle = "btn--primary"
         buttonSize = "btn--large"
        children = "Exit"
        />
      </div>
    </div>
  );
}