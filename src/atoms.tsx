import React from "react";
import { atom, useRecoilState } from "recoil";
import { Character } from "./types/Character";

export const colorState = atom({
  key: "colorState",
  default: "#888888", //코코포리아 캐릭터 기본 색상
});

export const valuesState = atom<Partial<Character>>({
  key: "valuesState",
  default: {},
});

export interface IStatus {
  id: number;
  label: string;
  value: number;
  max?: number;
}
export const statusState = atom<Partial<IStatus[]>>({
  key: "statusState",
  default: [],
});
