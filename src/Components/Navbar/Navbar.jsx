import { Link, useLocation } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <ul className={style.navbar}>
      {location.pathname !== "/" && (
        <li>
          <Link to="">
            <img src="/assets/Icons/house-line.svg" alt="Home page logo" />
            <p>Home</p>
          </Link>
        </li>
      )}
      {location.pathname !== "/game" && (
        <li hidden={false}>
          <Link to="/game">
            <img src="/assets/Icons/game-controller.svg" alt="Game page logo" />
            <p>Game</p>
          </Link>
        </li>
      )}
      {location.pathname !== "/info" && (
        <li hidden={false}>
          <Link to="/info">
            <img src="/assets/Icons/question.svg" alt="Info page logo" />
            <p>Info</p>
          </Link>
        </li>
      )}
      {location.pathname !== "/about" && (
        <li hidden={false}>
          <Link className={style.links} to="/about">
            <img src="/assets/Icons/info.svg" alt="About us page logo" />
            <p>About us</p>
          </Link>
        </li>
      )}
    </ul>
  );
};
export default Navbar;
