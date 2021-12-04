import React, { useState } from "react";
import "./main.scss";
import { LeftEditor } from "../Editor/Editor";
import { ResumeTemplete } from "../ResumeTemplete/ResumeTemplete";

export const MainPage: React.FC<any> = () => {
  const [editResult, setEditResult] = useState<string>("");
  return (
    <div className="resume-main">
      <LeftEditor editResult={editResult} setEditResult={setEditResult}></LeftEditor>
      <ResumeTemplete editResult={editResult}></ResumeTemplete>
    </div>
  );
};
