import React from "react";
import "./resumeTemplete.scss";
import { Name } from "../Parser/Index";

interface Param {
  editResult: string;
}

interface Output {
  name: string;
}

export const ResumeTemplete: React.FC<any> = (param: Param) => {
  try {
    const output: Output = JSON.parse(param.editResult);
  } catch (e) {
    console.log(e);
  }
  return (
    <div className="resume-templete">
      <Name name={5455}></Name>
    </div>
  );
};
