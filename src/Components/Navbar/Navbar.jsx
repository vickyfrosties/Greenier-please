import { Link, useLocation } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <ul className={style.navbar}>
      {location.pathname !== "/" && (
        <li>
          <Link to="">
            <img
              src="/public/assets/icons/house-line.svg"
              alt="Home page logo"
            />
            <p>Home</p>
          </Link>
        </li>
      )}
      {location.pathname !== "/game" && (
        <li hidden={false}>
          <Link to="/game">
            <img
              src="/public/assets/icons/game-controller.svg"
              alt="Game page logo"
            />
            <p>Game</p>
          </Link>
        </li>
      )}
      {location.pathname !== "/info" && (
        <li hidden={false}>
          <Link to="/info">
            <img src="/public/assets/icons/question.svg" alt="Info page logo" />
            <p>Info</p>
          </Link>
        </li>
      )}
      {location.pathname !== "/about" && (
        <li hidden={false}>
          <Link className={style.links} to="/about">
            <img src="/public/assets/icons/info.svg" alt="About us page logo" />
            <p>About us</p>
          </Link>
        </li>
      )}
    </ul>
  );
};
export default Navbar;
