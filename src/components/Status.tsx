import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { IStatus, statusState } from "../atoms";
import StatusInput from "./inputs/StatusInput";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
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
  }, [status]);
  //react-beautiful-dnd
  const onDragEnd = ({ source, destination }: DropResult) => {
    console.log({ destination, source });
    if (!destination) return;
    const newStatus = [...status];
    const [targetStatus] = newStatus.splice(source.index, 1);
    newStatus.splice(destination?.index, 0, targetStatus);
    setStatus(newStatus);
    console.log(status);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <span>스테이터스</span>
      <button onClick={addStatus}>+</button>
      <Droppable droppableId="droppableStatus">
        {(provided) => (
          <StatusBoard ref={provided.innerRef} {...provided.droppableProps}>
            {status?.map(
              (item, index) =>
                item && (
                  <Draggable
                    key={item.id}
                    draggableId={item.label}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <StatusInput
                          id={item.id}
                          label={item.label}
                          value={item.value}
                          max={item?.max}
                        />
                      </div>
                    )}
                  </Draggable>
                )
            )}
            {provided.placeholder}
          </StatusBoard>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default StatusList;
