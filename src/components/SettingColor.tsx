import React, { useState } from "react";
import { ChromePicker, ColorResult } from "react-color";
import { useRecoilState, useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { colorState } from "../atoms";

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const ColorInput = () => {
  const [inputValue, setInputValue] = useRecoilState(colorState);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };
  return <input type="text" value={inputValue} onChange={handleInputChange} />;
};

function SettingColor() {
  const [display, setDisplay] = useState(false);
  const onClick = () => {
    setDisplay((prev) => !prev);
  };
  const ClosePicker = () => setDisplay(false);
  const [color, setColor] = useRecoilState(colorState);
  const onChange = (color: ColorResult) => {
    setColor(color.hex);
  };
  return (
    <>
      <ColorInput />
      <button onClick={onClick}>컬러피커</button>
      {display ? (
        <>
          <Cover onClick={ClosePicker} />
          <ChromePicker color={color} onChange={onChange} disableAlpha={true} />
        </>
      ) : null}
    </>
  );
}

export default SettingColor;
