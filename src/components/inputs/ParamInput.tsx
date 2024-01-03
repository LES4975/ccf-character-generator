import { useRecoilState } from "recoil";
import { IParam, paramState } from "../../atoms";
import { useCallback } from "react";

function ParamInput({ id, label, value }: IParam) {
  const [param, setParam] = useRecoilState(paramState);
  const deleteParam = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      setParam((prev) => prev.filter((item) => item && item.id !== id));
    },
    [setParam, id]
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setParam((prev) =>
      prev.map((item) => {
        if (item && item.id === id) {
          if (name === "label") return { ...item, label: value };
          else if (name === "value") return { ...item, value: value };
        }
        return item;
      })
    );
    console.log(param);
  };
  return (
    <li key={id}>
      <button onClick={deleteParam}>-</button>
      <input
        type="text"
        name="label"
        placeholder="매개변수"
        onBlur={handleChange}
      />
      <input
        type="text"
        name="value"
        placeholder="매개변수 값"
        onBlur={handleChange}
      />
    </li>
  );
}

export default ParamInput;
