import { useRecoilState } from "recoil";
import { valuesState } from "../../atoms";
import { Character } from "../../types/Character";
import { useState } from "react";

interface InputProps {
  prop: keyof Character;
}

const InputComponent = ({ prop }: InputProps) => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  return (
    <>
      <span>{prop}</span>
      <input key={prop} value={value} onChange={handleChange} />
    </>
  );
};

export default InputComponent;
