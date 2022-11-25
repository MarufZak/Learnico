import Container from "./Container";
import { useRef, useState } from "react";
import Icon from "./Icon";
import Button from "./Button";

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
              <Button className="nav__btn" color="transparent" icon="search">Search</Button>
              <Button className="nav__btn" color="transparent" icon="cart">Cart</Button>
              <Button className="nav__btn" color="white">Sign Up</Button>
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
