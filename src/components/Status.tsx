import { Character } from "../types/Character";
import { useCallback, useState } from "react";
import InputComponent from "./inputs/Input";
import { useRecoilState, useRecoilValue } from "recoil";
import { statusState } from "../atoms";

interface IStatus {
  label: string;
  value: number;
  max?: number;
}

const StatusInput = () => {
  return (
    <li>
      <button>-</button>
      <input type="text" key={"label"} />
      <input type="number" inputMode="numeric" key={"value"} />
      <input type="number" inputMode="numeric" key={"max"} />
    </li>
  );
};

function StatusList() {
  const [status, setStatus] = useRecoilState(statusState);
  const addStatus = useCallback(() => {
    const newStatus: IStatus = {
      label: "",
      value: 0,
    };
    setStatus(status.concat(newStatus));
  }, [status]);
  console.log(status);
  return (
    <div>
      <span>스테이터스</span>
      <button onClick={addStatus} />
      <ul>
        {status?.map((item, index) => (
          <StatusInput key={index} {...status} />
        ))}
      </ul>
    </div>
  );
}

export default StatusList;
