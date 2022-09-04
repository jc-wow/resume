import React from "react";
import "./resumeTemplete.scss";
import { Name, Phone, Email, Expericence } from "@/Components/Parser/Index";
import { ResumeType, ExpericenceContent } from "@/Constants/Types/ResumeType";
import { ContentHead } from "@/Common/ContentHead/contentHead";
import { nanoid } from "nanoid";

const getExperienceJsx = (experience: { [propName: string]: ExpericenceContent }) => {
  return Object.keys(experience).map((ele: string) => {
    if (!experience[ele].id) {
      experience[ele].id = nanoid();
    }
    return experience[ele];
  });
};

export const ResumeTemplete = (props: {
  editResult: ResumeType;
  setEditResult: (param: ResumeType) => void;
}): JSX.Element => {
  const { editResult, setEditResult } = props;
  const { name = "", phone = "", email = "", workExperience = {}, education = {}, project = {} } = editResult;
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
        editResult={editResult}
        contentHead={"教育经历"}
        type={"education"}
        setEditResult={setEditResult}
      ></ContentHead>
      {getExperienceJsx(education).map((ele, index) => (
        <Expericence
          experience={ele}
          key={index}
          id={ele.id}
          contentType={"education"}
          editResult={editResult}
          setEditResult={setEditResult}
        ></Expericence>
      ))}
      <ContentHead
        setEditResult={setEditResult}
        editResult={editResult}
        contentHead={"工作经历"}
        type={"workExperience"}
      ></ContentHead>
      {getExperienceJsx(workExperience).map((ele, index) => (
        <Expericence
          experience={ele}
          key={index}
          id={ele.id}
          contentType={"workExperience"}
          editResult={editResult}
          setEditResult={setEditResult}
        ></Expericence>
      ))}
      <ContentHead
        setEditResult={setEditResult}
        editResult={editResult}
        contentHead={"工作以外经历"}
        type={"project"}
      ></ContentHead>
      {getExperienceJsx(project).map((ele, index) => (
        <Expericence
          experience={ele}
          key={index}
          id={ele.id}
          contentType={"project"}
          editResult={editResult}
          setEditResult={setEditResult}
        ></Expericence>
      ))}
    </div>
  );
};
