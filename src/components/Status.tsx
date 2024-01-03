import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { IStatus, statusState } from "../atoms";
import StatusInput from "./inputs/StatusInput";

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
  }, [status]);
  // console.log(status);
  return (
    <div>
      <span>스테이터스</span>
      <button onClick={addStatus}>+</button>
      <ul>
        {status?.map(
          (item) =>
            item && (
              <StatusInput
                key={item.id}
                id={item.id}
                label={item.label}
                value={item.value}
                max={item?.max}
              />
            )
        )}
      </ul>
    </div>
  );
}

export default StatusList;
