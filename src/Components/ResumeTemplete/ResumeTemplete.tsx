import React from "react";
import "./resumeTemplete.scss";
import { Name, Phone, Email, Expericence } from "@/Components/Parser/Index";
import { ResumeType, ExpericenceContent } from "@/Constants/Types/ResumeType";
import { ContentHead } from "@/Common/ContentHead/contentHead";

const getExperienceJsx = (experience: { [propName: string]: ExpericenceContent }) => {
  return Object.keys(experience).map((ele) => experience[ele]);
};

export const ResumeTemplete = (props: { editResult: string; setEditResult: (param: string) => void }) => {
  const { editResult, setEditResult } = props;
  let formatEditResult: ResumeType;
  try {
    formatEditResult = JSON.parse(editResult);
  } catch (e) {
    console.log(formatEditResult);
  }
  const { name = "", phone = "", email = "", workExperience = {}, education = {}, project = {} } = formatEditResult;
  return (
    <div className="resume-template">
      <Name name={name}></Name>
      <div className="subtitle item">
        <div className="subtitle-left">
          <Phone phone={phone}></Phone>
        </div>
        <div className="subtitle-right">
          <Email email={email}></Email>
        </div>
      </div>
      <ContentHead
        formatEditResult={formatEditResult}
        contentHead={"教育经历"}
        type={"education"}
        setEditResult={setEditResult}
      ></ContentHead>
      {getExperienceJsx(education).map((ele, index) => (
        <Expericence
          experience={ele}
          key={ele.title + index}
          contentIndex={index}
          contentType={"education"}
          formatEditResult={formatEditResult}
          setEditResult={setEditResult}
        ></Expericence>
      ))}
      <ContentHead
        setEditResult={setEditResult}
        formatEditResult={formatEditResult}
        contentHead={"工作经历"}
        type={"workExperience"}
      ></ContentHead>
      {getExperienceJsx(workExperience).map((ele, index) => (
        <Expericence
          experience={ele}
          key={ele.title + index}
          contentIndex={index}
          contentType={"workExperience"}
          formatEditResult={formatEditResult}
          setEditResult={setEditResult}
        ></Expericence>
      ))}
      <ContentHead
        setEditResult={setEditResult}
        formatEditResult={formatEditResult}
        contentHead={"工作以外经历"}
        type={"project"}
      ></ContentHead>
      {getExperienceJsx(project).map((ele, index) => (
        <Expericence
          experience={ele}
          key={ele.title + index}
          contentIndex={index}
          contentType={"project"}
          formatEditResult={formatEditResult}
          setEditResult={setEditResult}
        ></Expericence>
      ))}
    </div>
  );
};
