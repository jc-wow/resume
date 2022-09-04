import React, { useState } from "react";
import "./main.scss";
import { ResumeTemplete } from "../ResumeTemplete/ResumeTemplete";
import { template } from "@/Constants/Config/resume-config";
import { View } from "@/Components/TemplateFunctionComponent/View/View";
import { ResumeType } from "@/Constants/Types/ResumeType";

export const MainPage = (): JSX.Element => {
  const [editResult, setEditResult] = useState<ResumeType>(JSON.parse(JSON.stringify(template)));
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
