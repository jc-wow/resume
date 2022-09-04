import React, { useState } from "react";
import { ExpericenceContent, ResumeType } from "@/Constants/Types/ResumeType";
import style from "./experience.module.scss";
import { CloseCircleTwoTone } from "@ant-design/icons";
import ContentEditable from "react-contenteditable";
import product from "immer";

export const Expericence = (props: {
  experience: ExpericenceContent;
  editResult: ResumeType;
  id: string;
  contentType: string;
  setEditResult: (param: ResumeType) => void;
}): JSX.Element => {
  const { editResult, setEditResult, id, experience, contentType } = props;
  const { title, occupation, time, content = [] } = experience;
  const [isHoverContainer, setContainerState] = useState<boolean>(false);
  const targetItems: ExpericenceContent = editResult[contentType];
  const targetKey: string = Object.keys(targetItems).filter((key: string) => targetItems[key].id === id)[0];
  const removeContent = (): void => {
    const toggle = product((draft) => {
      delete draft[contentType][targetKey];
    }, editResult);
    setEditResult(toggle());
  };
  const setChangeContentValue = (val: string, type: string, ctxIndex?: number): void => {
    const toggle = product((draft) => {
      const targetContent = draft[contentType][targetKey];
      if (typeof ctxIndex === "number") {
        targetContent[type][ctxIndex] = val;
      } else {
        targetContent[type] = val;
      }
    }, editResult);
    setEditResult(toggle());
  };

  return (
    <div
      className={style.experience + " item"}
      style={{ background: isHoverContainer ? "rgba(44,105,249,.15)" : "#fff" }}
      onMouseMove={() => setContainerState(true)}
      onMouseLeave={() => setContainerState(false)}
    >
      <div className={style["icon-container"]}>
        <CloseCircleTwoTone
          style={{
            fontSize: "17px",
            cursor: "pointer",
            display: isHoverContainer && Object.keys(editResult[props.contentType]).length > 1 ? "block" : "none",
            margin: "5px 5px 0px 0px",
          }}
          onClick={() => removeContent()}
        ></CloseCircleTwoTone>
      </div>
      <div className={style.title}>
        <ContentEditable
          className={style.position}
          html={title}
          onChange={(event) => setChangeContentValue(event.target.value, "title")}
        ></ContentEditable>
        <ContentEditable
          html={time}
          onChange={(event) => setChangeContentValue(event.target.value, "time")}
        ></ContentEditable>
      </div>
      <ContentEditable
        html={occupation}
        onChange={(event) => setChangeContentValue(event.target.value, "occupation")}
      ></ContentEditable>
      <ul className={style.contentList}>
        {content.map((ele, index) => (
          <li key={index}>
            <ContentEditable
              html={ele}
              onChange={(event) => setChangeContentValue(event.target.value, "content", index)}
            ></ContentEditable>
          </li>
        ))}
      </ul>
    </div>
  );
};
