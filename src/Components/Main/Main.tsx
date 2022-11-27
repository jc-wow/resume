import React, { useState, useEffect } from "react";
import "./main.scss";
import { ResumeTemplete } from "../ResumeTemplete/ResumeTemplete";
import { template } from "@/Constants/Config/resume-config";
import { View } from "@/Components/TemplateFunctionComponent/View/View";
import { ResumeType } from "@/Constants/Types/ResumeType";
import useResumeCache from "@/Hooks/useResumeCache";

export const MainPage = (): JSX.Element => {
  let resumeData: ResumeType = template;
  if (localStorage.getItem("resumeData")) {
    resumeData = JSON.parse(localStorage.getItem("resumeData"));
  }
  const [editResult, setEditResult] = useState<ResumeType>(resumeData);
  useEffect(() => {
    const intervalId = setInterval(() => {
      useResumeCache(editResult);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [editResult]);
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
