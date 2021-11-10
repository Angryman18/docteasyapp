import styled from "styled-components";

const SubmitButton = ({ buttonText }) => {
  return <ButtonComp type="submit">{buttonText}</ButtonComp>;
};

export default SubmitButton;

const ButtonComp = styled.button`

    outline: none;
    border: none;
    background-color: rgba(13,59,102,1);
    color: #fff;
    padding: 5px 1rem;
    border: 2px solid rgba(13,59,102,1);
    transition: 0.1s ease;

    &:hover {
        background-color: rgba(33,124,126,1);
        border: 2px solid #fff;
    }

`;
