import { useRecoilState } from "recoil";
import { valuesState } from "../../atoms";
import { Character } from "../../types/Character";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange }: InputProps) => (
  <input type="text" value={value} onChange={onChange} />
);

interface InputComponentProps {
  prop: keyof Character;
  value?:
    | string
    | number
    | undefined
    | boolean
    | { label: string; value: number; max?: number | undefined }[]
    | { label: string; value: string }[]
    | { iconUrl: string | null; label: string }[];
}

const InputComponent = ({ prop, value = "" }: InputComponentProps) => {
  const [values, setValues] = useRecoilState(valuesState);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };
  const stringifyValue = (
    value: InputComponentProps["value"] | null
  ): string => {
    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      return String(value);
    } else if (value === undefined || value === null) {
      return "";
    } else if (Array.isArray(value)) {
      return JSON.stringify(value);
    }
    return "";
  };
  return (
    <>
      <span>{prop}</span>
      <Input
        value={stringifyValue(values[prop]) || ""}
        onChange={handleChange}
      />
    </>
  );
};

export default InputComponent;
