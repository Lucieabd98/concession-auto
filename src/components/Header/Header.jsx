import logo from "../Header/logo-alfa-white.png";
import "../Header/Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo alfa romeo" />
      </div>
    </header>
  );
};

export default Header;
