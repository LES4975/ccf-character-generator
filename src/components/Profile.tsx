import React, { useState } from "react";
import SettingColor from "./SettingColor";
import { Character } from "../types/Character";
import InputComponent from "./inputs/Input";
import TextareaComponent from "./inputs/TextareaComponent";

function Profile() {
  return (
    <div>
      <InputComponent prop="name" />
      <SettingColor />
      <TextareaComponent prop="memo" />
      <InputComponent prop="initiative" />
      <InputComponent prop="externalUrl" />
    </div>
  );
}

export default Profile;
