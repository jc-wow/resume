import React from "react";
import "./resumeTemplete.scss";
import { Expericence } from "@/Components/Parser/Index";
import { ResumeType, ExpericenceContent } from "@/Constants/Types/ResumeType";
import { ContentHead } from "@/Common/ContentHead/contentHead";
import { Info } from "@/Common/Info/info";
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
      <div className={`${name ? "name" : "center"} mb-4`}>
        <Info content={name} editResult={editResult} setEditResult={setEditResult} infoType="name"></Info>
      </div>
      <div className="subtitle item">
        <div className="subtitle-left">
          <Info content={phone} editResult={editResult} setEditResult={setEditResult} infoType="phone"></Info>
        </div>
        <div className="subtitle-right">
          <Info content={email} editResult={editResult} setEditResult={setEditResult} infoType="email"></Info>
        </div>
      </div>
      <div>
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
      </div>
      <div>
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
      </div>
      <div>
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
    </div>
  );
};
