import styled from "styled-components";
import { createPortal } from "react-dom";
import React from "react";
import { useDispatch } from "react-redux";

const Notification = ({ text, timer, color }) => {
  const dispatch = useDispatch();

  const closeNotification = () => {
    dispatch({ type: "visibleOff", message: text });
    clearTimeout(showMessage)
  };

  let Comp = () => {
    return (
      <NotificationComp>
        <Main style={{backgroundColor: color}}>
          <Text>{text}</Text>
          <Icon onClick={closeNotification}>
            <i className="fas fa-times"></i>
          </Icon>
        </Main>
      </NotificationComp>
    );
  };

  const showMessage = setTimeout(() => {
    dispatch({ type: "visibleOff", message: text });
  }, timer);

  return <>{createPortal(<Comp />, document.getElementById("notification"))}</>;
};

export default Notification;

const NotificationComp = styled.div`
  padding: 10px;
  position: fixed;
  z-index: 99999999;
  background: transparent;
  right: 0;
  top: 0;
  overflow: hidden;
  pointer-events: none;
`;

const Main = styled.div`
  width: 300px;
  /* min-height: 35px; */
  /* background-color: rgba(0, 160, 62, 1); */
  color: #fff;
  z-index: 9999;
  margin: auto 0;
  border-radius: 10px;
  pointer-events: visible;
  padding: 10px;
  box-shadow: 1px 1px 5px 2px rgba(0,0,0, 0.4);
  position: relative;
  animation: visible 0.4s ease;

  @keyframes visible {
    0% {
      transform: translateY(40px);
      opacity: 0.1;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;


const Text = styled.p`
  color: #fff;
  padding: 0;
  margin: 0;
  padding-right: 20px;
  text-align: justify;
  text-justify: inter-word;
`;
const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  font-size: 1rem;
  transform: translate(0px, -50%);
  color: #fff;
  cursor: pointer;
`;
