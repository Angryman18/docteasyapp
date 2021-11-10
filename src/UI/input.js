import styled from "styled-components";

const Input = ({ type, placeholder, style, id, labelText, onChange, required }) => {
  return (
    <>
      <Label htmlFor={id}>{labelText}</Label>
      <InputBox
        type={type}
        required={required}
        placeholder={placeholder}
        style={style}
        id={id}
        onChange={onChange}
      />
    </>
  );
};

export default Input;

const InputBox = styled.input`
  outline: none;
  border: none;
  border-bottom: 2px solid green;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
`;
