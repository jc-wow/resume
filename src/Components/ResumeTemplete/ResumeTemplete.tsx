import React from "react";
import "./resumeTemplete.scss";
import { Name, Phone, Email, Expericence } from "@/Components/Parser/Index";
import { ResumeType, ExpericenceContent } from "@/Constants/Types/ResumeType";
import { ContentHead } from "@/Common/ContentHead/contentHead";

const getExperienceJsx = (experience: { [propName: string]: ExpericenceContent }) => {
  return Object.keys(experience).map((ele) => experience[ele]);
};

export const ResumeTemplete = (props: { editResult: string }) => {
  const { editResult } = props;
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
      <ContentHead contentHead={"教育经历"}></ContentHead>
      {getExperienceJsx(education).map((ele, index) => (
        <Expericence experience={ele} key={ele.title + index}></Expericence>
      ))}
      <ContentHead contentHead={"工作经历"}></ContentHead>
      {getExperienceJsx(workExperience).map((ele, index) => (
        <Expericence experience={ele} key={ele.title + index}></Expericence>
      ))}
      <ContentHead contentHead={"工作以外经历"}></ContentHead>
      {getExperienceJsx(project).map((ele, index) => (
        <Expericence experience={ele} key={ele.title + index}></Expericence>
      ))}
    </div>
  );
};
