import React, { useState } from "react";
import SettingColor from "./SettingColor";
import { Character } from "../types/Character";
import InputComponent from "./inputs/Input";

function Profile() {
  return (
    <>
      <InputComponent prop="name" />
      <SettingColor />
      <InputComponent prop="memo" />
      <InputComponent prop="initiative" />
    </>
  );
}

export default Profile;
