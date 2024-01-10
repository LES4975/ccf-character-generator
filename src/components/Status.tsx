import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { IStatus, statusState } from "../atoms";
import StatusInput from "./inputs/StatusInput";
import { styled } from "styled-components";

const StatusBoard = styled.div`
  margin: 10px;
  padding: 20px 10px;
  padding-top: 30px;
  background-color: #ebebeb;
  border-radius: 5px;
  min-height: 200px;
`;

function StatusList() {
  const [status, setStatus] = useRecoilState(statusState);
  const [nextId, setNextId] = useState(0);
  const addStatus = useCallback(() => {
    const newStatus: IStatus = {
      id: nextId,
      label: "",
      value: 0,
      max: 0,
    };
    setStatus((prev) => [...prev, newStatus]);
    setNextId((prev) => prev + 1);
    console.log(status);
  }, [status]);
  return (
    <StatusBoard>
      <span>스테이터스</span>
      <button onClick={addStatus}>+</button>
      <ul>
        {status?.map(
          (item, index) =>
            item && (
              <StatusInput
                key={index}
                id={item.id}
                label={item.label}
                value={item.value}
                max={item?.max}
              />
            )
        )}
      </ul>
    </StatusBoard>
  );
}

export default StatusList;
