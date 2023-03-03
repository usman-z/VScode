import "./styles/Button.css";
import { Link } from "react-router-dom";

export default function Button (props) {
  const STYLES = ["btn--primary", "btn--outline"];
  const SIZES = ["btn--medium", "btn--large"];

  const checkStyle = STYLES.includes(props.buttonStyle) ? props.buttonStyle : STYLES[0];
  const checkSize = STYLES.includes(props.buttonSize) ? props.buttonSize : SIZES[0];
  
  return (
    <Link to="/" className="btn-mobile">
      <button className={`btn ${checkStyle} ${checkSize}`} onClick={props.onClick} type={props.type}>
        {props.children}
      </button>
    </Link>
  );
}