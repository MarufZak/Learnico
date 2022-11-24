import Container from "./Container";
import { useRef, useState } from "react";
import Icon from "./Icon";

const Navbar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const navContent = useRef();

  const handleClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
    navContent.current.classList.toggle('active');
  };

  return (
    <nav className="nav">
      <Container>
        <div className="nav__body">
          <a className="logo nav__logo" href="##">
            LOGO
          </a>
          <div ref={navContent} className="nav__content list">
            <ul className="nav__list list">
              <li className="nav__item">
                <a className="nav__link" href="##">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="##">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="##">
                  Blog
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="##">
                  Contact
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href="##">
                  Courses
                </a>
              </li>
            </ul>
            <div className="nav__buttons list">
              <button className="nav__btn btn btn--transparent btn--icon">
                <Icon icon="search" />
                Search
              </button>
              <button className="nav__btn btn btn--transparent btn--icon">
                <Icon icon="cart" />
                Cart
              </button>
              <button className="nav__btn btn btn--white">Sign Up</button>
            </div>
          </div>
          <div onClick={handleClick} className="burger">
            {isBurgerOpen ? <Icon icon="close" /> : <Icon icon="burger" />}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
