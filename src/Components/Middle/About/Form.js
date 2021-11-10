import styled from "styled-components";
import Input from "../../../UI/input";
import Textarea from "../../../UI/textarea";
import SubmitButton from "../../../UI/Button";
import React from "react";
import { useDispatch } from "react-redux";

const Reducer = (state, actions) => {
  switch (actions.type) {
    case "NAME":
      return { ...state, name: actions.name };
    case "EMAIL":
      return { ...state, email: actions.email };
    case "SUBJECT":
      return { ...state, subject: actions.subject };
    case "MESSAGE":
      return { ...state, message: actions.message };
    default:
      return state;
  }
};

const ContactForm = () => {
  const [state, dispatch] = React.useReducer(Reducer, {
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const ReduxDispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      state.name.trim().length === 0 ||
      state.email.trim().length === 0 ||
      state.subject.trim().length === 0 ||
      state.message.trim().length === 0
    ) {
      ReduxDispatch({
        type: "visible",
        message: "Fields cannot be Empty",
        timer: 3000,
        color: "ERROR",
      });
      return false;
    } else {
      ReduxDispatch({
        type: "visible",
        message: `Hey ${state.name}, we have received your request and we will get back to you soon. thanks for your patience.`,
        timer: 10000,
        color: "SUCCESS",
      });
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        placeholder="Enter Name"
        id="name"
        type="text"
        labelText="Enter Your Name:"
        required={false}
        onChange={(e) => dispatch({ type: "NAME", name: e.target.value })}
      />
      <Input
        placeholder="Enter Email"
        type="email"
        id="email"
        required={false}
        labelText="Enter Your Email:"
        onChange={(e) => dispatch({ type: "EMAIL", email: e.target.value })}
      />
      <Input
        placeholder="Your Subject"
        type="text"
        labelText="Write Subject:"
        id="subject"
        required={false}
        onChange={(e) => dispatch({ type: "SUBJECT", subject: e.target.value })}
      />
      <Textarea
        placeholder="Your Message"
        labelText="Write Your Message:"
        id="message"
        required={false}
        onChange={(e) => dispatch({ type: "MESSAGE", message: e.target.value })}
      />
      <SubmitButton buttonText="Submit" />
    </Form>
  );
};

export default ContactForm;

const Form = styled.form`
  width: 70%;
  max-width: 500px;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    form {
      width: 100%;
    }
  }

  & > *:not(SubmitButton) {
    margin-bottom: 10px;
  }
`;
