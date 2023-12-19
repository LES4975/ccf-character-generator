import React from "react";
import SettingColor from "./SettingColor";
import { Character } from "../types/Character";
import InputComponent from "./inputs/Input";

function Profile() {
  return (
    <>
      <InputComponent prop={"name"} />
      <SettingColor />
    </>
  );
}

export default Profile;
