import React, { useState } from "react";
import "./resumeTemplete.scss";
import { Expericence } from "@/Components/Parser/Index";
import { ResumeType, ExpericenceContent } from "@/Constants/Types/ResumeType";
import { ContentHead } from "@/Common/ContentHead/contentHead";
import { Info } from "@/Common/Info/info";
import { nanoid } from "nanoid";

export const ResumeTemplete = (props: {
  editResult: ResumeType;
  setEditResult: (param: ResumeType) => void;
}): JSX.Element => {
  const { editResult, setEditResult } = props;
  const { name = "", phone = "", email = "", workExperience = {}, education = {}, project = {} } = editResult;
  const getExperienceJsx = (experience: { [propName: string]: ExpericenceContent }) => {
    return Object.keys(experience).map((ele: string) => {
      if (!experience[ele].id) {
        experience[ele].id = nanoid();
      }
      return experience[ele];
    });
  };
  const [headContent, setHeadContent] = useState<{ education: string; workExperience: string; project: string }>({
    education: "教育经历",
    workExperience: "工作经历",
    project: "项目/其他经历",
  });

  return (
    <div className="resume-template">
      <div className={`${name ? "name" : "center"} mb-4`}>
        <Info content={name} editResult={editResult} setEditResult={setEditResult} infoType="name"></Info>
      </div>
      <div className="subtitle item">
        <div className="subtitle-left">
          <Info
            imgName="tel"
            content={phone}
            editResult={editResult}
            setEditResult={setEditResult}
            infoType="phone"
            position="left"
          ></Info>
        </div>
        <div className="subtitle-right">
          <Info
            content={email}
            imgName="email-fill"
            editResult={editResult}
            setEditResult={setEditResult}
            infoType="email"
            position="right"
          ></Info>
        </div>
      </div>
      <div>
        <ContentHead
          editResult={editResult}
          contentHead={headContent}
          setHeadContent={setHeadContent}
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
          contentHead={headContent}
          setHeadContent={setHeadContent}
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
          contentHead={headContent}
          setHeadContent={setHeadContent}
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
