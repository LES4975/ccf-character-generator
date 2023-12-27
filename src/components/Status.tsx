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

const StatusInput = (id:number) => {
  return (
    <>
    <button>삭제</button>
    <InputComponent prop={`status.${id}.label`} />
    </>
  );
};

function StatusList() {
  const [status, setStatus] = useRecoilState(statusState);
  const statusList = useRecoilValue();
  const addStatus = useCallback(() => {
    if()
  }, [statusList]);
  const onClick = () => {};
  return (
    <div>
      <span>스테이터스</span>
      <button onClick={onClick}/>
    </div>
  );
}

export default StatusList;
