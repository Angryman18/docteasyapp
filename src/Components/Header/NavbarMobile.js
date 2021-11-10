import styled from "styled-components";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo.svg";
import { useDispatch } from "react-redux";
import * as Scroll from "react-scroll";

const MobileNavbar = ({ Home, About, Faq, Reviews, Contact }) => {
  const ScrollLink = Scroll.Link;

  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const LoginHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "login" });
  };

  const SignupHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "signup" });
  };

  return (
    <MobileNav>
      <div className="m-nav-main">
        <div className="m-logo">
          <Link to={Home.link}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div onClick={() => setVisible(!visible)} className="m-hamburger">
          <i className="fas fa-bars"></i>
        </div>
      </div>
      {visible && (
        <div className="menu">
          <ul>
            <li>
              <Link to={Home.link}>{Home.text}</Link>
            </li>
            <li>
              <ScrollLink to={Contact.text} smooth={true}>
                {Contact.text}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to={Faq.text} smooth={true}>
                {Faq.text}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to={Reviews.text} smooth={true}>
                {Reviews.text}
              </ScrollLink>
            </li>
            <li>
              <button onClick={LoginHandler} className="btn btn-primary">
                Login
              </button>
            </li>
            <li>
              <button onClick={SignupHandler} className="btn btn-dark">
                Signup
              </button>
            </li>
          </ul>
        </div>
      )}
    </MobileNav>
  );
};

export default MobileNavbar;

const MobileNav = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap");
  .m-nav-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    position: relative;
  }

  .m-hamburger i {
    font-size: 1.5rem;
    cursor: pointer;
    padding: 5px;
    border: 1px solid #aaa;
    border-radius: 5px;
  }

  .menu {
    animation: menuanimation 0.5s ease;
  }

  @keyframes menuanimation {
    0% {
      transform: translateY(-50px);
    }
    100% {
      transform: translate(0);
    }
  }

  .menu ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .menu ul li {
    list-style: none;
    padding: 0.5rem 0;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
  }

  .menu ul li:hover,
  .menu ul li:focus {
    font-weight: bold;
    transition: 0.2s ease;
    transform: translateX(5px);
  }

  .menu ul li:hover::before {
    content: "";
    position: absolute;
    left: -25px;
    width: 5px;
    height: 25px;
    background-color: #1a237e;
  }

  .menu ul li a {
    text-decoration: none;
    color: dodgerblue;
    cursor: pointer;
  }

  .active {
    transition: all 0.5s ease;
  }
`;
