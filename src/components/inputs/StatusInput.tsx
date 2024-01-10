import { useRecoilState } from "recoil";
import { IStatus, statusState } from "../../atoms";
import { useCallback } from "react";
import React from "react";

function StatusInput({ id, label, value, max }: IStatus) {
  const [status, setStatus] = useRecoilState(statusState);
  const deleteStatus = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      setStatus((prev) => prev.filter((item) => item && item.id !== id));
    },
    [setStatus, id]
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStatus((prev) =>
      prev.map((item) => {
        if (item && item.id === id) {
          if (name === "label") return { ...item, label: value };
          else if (name === "value") {
            const parsedValue = parseInt(value);
            const newValue = isNaN(parsedValue) ? 0 : parsedValue;
            return { ...item, value: newValue };
          } else if (name === "max") {
            const maxValue = value === "" ? 0 : parseInt(value);
            return { ...item, max: maxValue };
          }
        }
        return item;
      })
    );
    console.log(status);
  };

  return (
    <li>
      <button onClick={deleteStatus}>-</button>
      <input
        type="text"
        name="label"
        defaultValue={label}
        placeholder="라벨"
        onChange={handleChange}
      />
      <input
        type="number"
        name="value"
        defaultValue={value}
        inputMode="numeric"
        placeholder="현재치"
        onChange={handleChange}
      />
      <input
        type="number"
        name="max"
        defaultValue={max}
        inputMode="numeric"
        placeholder="최대치"
        onChange={handleChange}
      />
    </li>
  );
}

export default React.memo(StatusInput);
