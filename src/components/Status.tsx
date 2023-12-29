import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { IStatus, statusState } from "../atoms";

const StatusInput = ({ id, label, value, max }: IStatus) => {
  const [status, setStatus] = useRecoilState(statusState);
  const deleteStatus = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      setStatus((prev) => prev.filter((item) => item && item.id !== id));
    },
    [setStatus]
  );
  const handleChangeLabel = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLabel = event.target.value;
    setStatus((prev) =>
      prev.map((item) =>
        item && item.id === id ? { ...item, label: newLabel } : item
      )
    );
    console.log(status);
  };
  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setStatus((prev) =>
      prev.map((item) =>
        item && item.id === id ? { ...item, value: newValue } : item
      )
    );
    console.log(status);
  };

  const handleChangeMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(event.target.value);
    setStatus((prev) =>
      prev.map((item) =>
        item && item.id === id ? { ...item, max: newMax } : item
      )
    );
    console.log(status);
  };

  return (
    <li key={id}>
      <button onClick={deleteStatus}>-</button>
      <input
        type="text"
        placeholder="라벨"
        value={label}
        onChange={handleChangeLabel}
      />
      <input
        type="number"
        inputMode="numeric"
        placeholder="현재치"
        value={value}
        onChange={handleChangeValue}
      />
      <input
        type="number"
        inputMode="numeric"
        placeholder="최대치"
        value={max || ""}
        onChange={handleChangeMax}
      />
    </li>
  );
};

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
  console.log(status);
  return (
    <div>
      <span>스테이터스</span>
      <button onClick={addStatus}>+</button>
      <ul>
        {status?.map(
          (item) =>
            item && (
              <StatusInput
                key={nextId + item.id}
                id={item.id}
                label={item.label}
                value={item.value}
                max={item?.max || 0}
              />
            )
        )}
      </ul>
    </div>
  );
}

export default StatusList;
