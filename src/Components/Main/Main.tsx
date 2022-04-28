import React, { useState } from "react";
import "./main.scss";
import { LeftEditor } from "../Editor/Editor";
import { ResumeTemplete } from "../ResumeTemplete/ResumeTemplete";
import { template } from "@/Constants/Config/resume-config";

export const MainPage = () => {
  const [editResult, setEditResult] = useState(JSON.stringify(template, null, 2));
  return (
    <div className="resume-main">
      <LeftEditor editResult={editResult} setEditResult={setEditResult}></LeftEditor>
      <ResumeTemplete editResult={editResult}></ResumeTemplete>
    </div>
  );
};
