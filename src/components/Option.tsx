import { useRecoilState } from "recoil";
import { optionState } from "../atoms";

interface OptionProps {
  name: string;
}

const CheckBox = ({ name }: OptionProps) => {
  const [option, setOption] = useRecoilState(optionState);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedOption = { ...option };
    updatedOption[name] = !updatedOption[name];
    setOption(updatedOption);
  };

  return (
    <>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={option[name]}
        onChange={onChange}
      />
    </>
  );
};

function Option() {
  return (
    <div>
      <p>캐릭터 상태 관리</p>
      <ul>
        <li>
          {"스테이터스를 비공개로 하기"}
          <CheckBox name="secret" />
        </li>
        <li>
          {"채팅 시 캐릭터를 표시하지 않는다"}
          <CheckBox name="invisible" />
        </li>
        <li>
          {"화면 캐릭터 목록에 표시하지 않기"}
          <CheckBox name="hideStatus" />
        </li>
      </ul>
    </div>
  );
}
export default Option;
