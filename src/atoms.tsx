import React from "react";
import { atom } from "recoil";
import { Character } from "./types/Character";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const colorState = atom({
  key: "colorState",
  default: "#888888", //코코포리아 캐릭터 기본 색상
  effects_UNSTABLE: [persistAtom],
});

export const valuesState = atom<Partial<Character>>({
  key: "valuesState",
  default: {},
  effects_UNSTABLE: [persistAtom],
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
  effects_UNSTABLE: [persistAtom],
});

export interface IParam {
  id: number;
  label: string;
  value: string;
}

export const paramState = atom<Partial<IParam[]>>({
  key: "paramState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const cpState = atom({
  key: "cpState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
