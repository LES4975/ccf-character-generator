import { styled } from "styled-components";
import { Character } from "../../types/Character";
import { useState } from "react";

interface ITextarea {
  prop: keyof Character;
}

const Memo = styled.textarea`
  resize: none;
  width: 100%;
`;

const TextareaComponent = ({ prop }: ITextarea) => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  return (
    <>
      <span>{prop}</span>
      <Memo key={prop} placeholder="캐릭터 메모" rows={10} />
    </>
  );
};

export default TextareaComponent;
