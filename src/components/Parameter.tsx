import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { IParam, paramState } from "../atoms";
import ParamInput from "./inputs/ParamInput";

function ParamList() {
  const [param, setParam] = useRecoilState(paramState);
  const [nextId, setNextId] = useState(0);
  const addParam = useCallback(() => {
    const newParam: IParam = {
      id: nextId,
      label: "",
      value: "",
    };
    setParam((prev) => [...prev, newParam]);
    setNextId((prev) => prev + 1);
  }, [param]);
  return (
    <div>
      <span>매개변수</span>
      <button onClick={addParam}>+</button>
      <ul>
        {param?.map(
          (item) =>
            item && (
              <ParamInput
                key={item.id}
                id={item.id}
                label={item.label}
                value={item.value}
              />
            )
        )}
      </ul>
    </div>
  );
}
export default ParamList;
