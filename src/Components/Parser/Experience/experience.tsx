import React, { useState, useRef } from "react";
import { ExpericenceContent } from "@/Constants/Types/ResumeType";
import style from "./experience.module.scss";
import { CloseCircleTwoTone } from "@ant-design/icons";
import { ResumeType } from "@/Constants/Types/ResumeType";
import ContentEditable from "react-contenteditable";

export const Expericence = (props: {
  experience: ExpericenceContent;
  formatEditResult: ResumeType;
  contentIndex: number;
  contentType: string;
  setEditResult: (param: string) => void;
}) => {
  const { title, occupation, time, content = {} } = props.experience;
  const { formatEditResult, setEditResult, contentIndex, experience, contentType } = props;
  const [isHoverContainer, setContainerState] = useState<boolean>(false);
  const removeContent = (type: string, index: number) => {
    const targetItems = formatEditResult[type];
    const deleteItemKey = Object.keys(targetItems)[index];
    delete targetItems[deleteItemKey];
    // setEditResult(JSON.stringify(formatEditResult));
  };
  const titleRef = useRef<string>();
  const setChangeContentValue = (val: string, type: string): void => {
    formatEditResult[contentType][`ct${contentIndex + 1}`][type] = val;
    const stringRes = JSON.stringify(formatEditResult);
    setEditResult(stringRes);
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
            display: isHoverContainer && Object.keys(formatEditResult[props.contentType]).length > 1 ? "block" : "none",
            margin: "5px 5px 0px 0px",
          }}
          onClick={() => removeContent(props.contentType, props.contentIndex)}
        ></CloseCircleTwoTone>
      </div>
      <div className={style.title}>
        <ContentEditable
          className={style.position}
          html={title}
          innerRef={titleRef}
          onChange={(event) => setChangeContentValue(event.target.value, "title")}
        ></ContentEditable>
        <ContentEditable html={time} onChange={() => console.log(time)}></ContentEditable>
      </div>
      <div contentEditable="true" suppressContentEditableWarning>
        {occupation}
      </div>
      <ul className={style.contentList}>
        {Object.keys(content)
          .map((ele) => content[ele])
          .map((ele, index) => (
            <li key={ele + index} contentEditable="true" suppressContentEditableWarning>
              {ele}
            </li>
          ))}
      </ul>
    </div>
  );
};
