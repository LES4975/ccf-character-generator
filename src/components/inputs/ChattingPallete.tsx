import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { cpState } from "../../atoms";
import { useRef } from "react";

const ChatCommand = styled.textarea`
  resize: none;
  width: 50vw;
`;

function ChatPallete() {
  const [command, setCommand] = useRecoilState(cpState);
  const height = useRef(null);
  const handleChange = (
    ref: React.RefObject<HTMLTextAreaElement>,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
    setCommand(event.target.value);
  };
  return (
    <>
      <p>채팅팔레트</p>
      <ChatCommand
        ref={height}
        placeholder="채팅팔레트!"
        defaultValue={command}
        onChange={(event) => handleChange(height, event)}
      />
    </>
  );
}

export default ChatPallete;
