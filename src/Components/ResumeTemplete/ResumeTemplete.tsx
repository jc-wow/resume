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
  const { name = "", phone = "", email = "" } = editResult;
  const getExperienceJsx = (experience: { [propName: string]: ExpericenceContent }) => {
    return Object.keys(experience).map((ele: string) => {
      if (!experience[ele].id) {
        experience[ele].id = nanoid();
      }
      return experience[ele];
    });
  };
  const [headContent, setHeadContent] = useState<{ education: string; workExperience: string; project: string }>({
    workExperience: "工作经历",
    education: "教育经历",
    project: "项目/其他经历",
  });
  const [renderSort, setRenderSort] = useState<string[]>(["education", "workExperience", "project"]);

  const dragstart_handler = (event: React.DragEvent<HTMLDivElement>): void => {
    event.dataTransfer.setData("text/plain", (event.target as HTMLElement).className);
  };

  const drop_handler = (event: React.DragEvent<HTMLElement>): void => {
    const dragFrom: string = event.dataTransfer.getData("text/plain");
    const target = event.target as HTMLElement;
    const dragTo: string = findCusomLabel(target);
    transferData(dragFrom, dragTo);
    event.preventDefault();
  };

  const drag_over = (event: React.DragEvent<HTMLDivElement>): void => {
    event.dataTransfer.dropEffect = "move";
    event.preventDefault();
  };

  const drag_enter = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
  };

  const transferData = (from: string, to: string): void => {
    let fromIndex = -1;
    let toIndex = -1;
    const res = [...renderSort];
    for (let i = 0; i < renderSort.length; i++) {
      if (from === renderSort[i]) {
        fromIndex = i;
      }
      if (to === renderSort[i]) {
        toIndex = i;
      }
      const temp = renderSort[fromIndex];
      res[fromIndex] = renderSort[toIndex];
      res[toIndex] = temp;
      setRenderSort(res);
    }
  };

  const findCusomLabel = (target: HTMLElement): string => {
    if (target.getAttribute("custom-label")) {
      return target.getAttribute("custom-label");
    }
    if (target.parentElement) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return findCusomLabel(target.parentElement);
    }
    return "";
  };

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
      {renderSort.map((type) => (
        <div
          className={type}
          custom-label={type}
          key={type}
          draggable
          onDragStart={(event) => dragstart_handler(event)}
          onDrop={(event) => drop_handler(event)}
          onDragOver={(event) => drag_over(event)}
          onDragEnter={(event) => drag_enter(event)}
        >
          <ContentHead
            editResult={editResult}
            contentHead={headContent}
            setHeadContent={setHeadContent}
            type={type}
            setEditResult={setEditResult}
          ></ContentHead>
          {getExperienceJsx(editResult[type]).map((ele, index) => (
            <Expericence
              experience={ele}
              key={index}
              id={ele.id}
              contentType={type}
              editResult={editResult}
              setEditResult={setEditResult}
            ></Expericence>
          ))}
        </div>
      ))}
    </div>
  );
};
