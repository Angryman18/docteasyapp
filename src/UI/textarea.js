import styled from "styled-components";

const Textarea = ({ placeholder, id, labelText, onChange }) => {
  return (
    <>
      <Label htmlFor={id}>{labelText}</Label>
      <TextareaComp placeholder={placeholder} onChange={onChange} id={id}></TextareaComp>
    </>
  );
};

export default Textarea;

const TextareaComp = styled.textarea`
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
