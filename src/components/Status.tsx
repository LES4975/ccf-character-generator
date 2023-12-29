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
    [setStatus, id]
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setStatus((prev) =>
      prev.map((item) => {
        if (item && item.id === id) {
          if (name === "label") return { ...item, label: value };
          else if (name === "value") return { ...item, value: parseInt(value) };
          else if (name === "max") {
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
    <li key={id}>
      <button onClick={deleteStatus}>-</button>
      <input
        type="text"
        name="label"
        placeholder="라벨"
        onBlur={handleChange}
      />
      <input
        type="number"
        name="value"
        inputMode="numeric"
        placeholder="현재치"
        onBlur={handleChange}
      />
      <input
        type="number"
        name="max"
        inputMode="numeric"
        placeholder="최대치"
        onBlur={handleChange}
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
                key={nextId + item.id}
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
