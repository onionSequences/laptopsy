import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/laptopsy-logo.svg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </header>
  );
};

export default Header;
