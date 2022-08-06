import React, { useState } from "react";
import "./main.scss";
import { ResumeTemplete } from "../ResumeTemplete/ResumeTemplete";
import { template } from "@/Constants/Config/resume-config";
import { View } from "@/Components/TemplateFunctionComponent/View/View";

export const MainPage = () => {
  const [editResult, setEditResult] = useState<string>(JSON.stringify(template, null, 2));
  return (
    <div className="resume-main">
      <div>
        <View></View>
        <div className="pdf-viewer"></div>
      </div>
      <ResumeTemplete editResult={editResult} setEditResult={setEditResult}></ResumeTemplete>
    </div>
  );
};
