import React, { useState } from "react";
import { ExpericenceContent } from "@/Constants/Types/ResumeType";
import style from "./experience.module.scss";
import { useMouseoverStyle } from "@/hooks/useMouseoverStyle";

export const Expericence = (props: { experience: ExpericenceContent }) => {
  const { title, occupation, time, content = {} } = props.experience;
  const [isMouseover, setMouseState] = useState<{ title: boolean; time: boolean; occupation: boolean }>({
    title: false,
    time: false,
    occupation: false,
  });
  const changeMouseState = (type: string, state: boolean) => {
    isMouseover[type] = state;
    setMouseState({ ...isMouseover });
  };
  const getContentObj = (content) => {
    console.log(content);
  };
  return (
    <div className={style.experience + " item"}>
      <div className={style.title}>
        <span
          className={style.position}
          contentEditable="true"
          suppressContentEditableWarning
          // onMouseOver={() => changeMouseState("title", true)}
          // onMouseLeave={() => changeMouseState("title", false)}
          // style={useMouseoverStyle(isMouseover.title)}
        >
          {title}
        </span>
        <span
          contentEditable="true"
          suppressContentEditableWarning
          // onMouseOver={() => changeMouseState("time", true)}
          // onMouseLeave={() => changeMouseState("time", false)}
          // style={useMouseoverStyle(isMouseover.time)}
        >
          {time}
        </span>
      </div>
      <div
        contentEditable="true"
        suppressContentEditableWarning
        // onMouseOver={() => changeMouseState("occupation", true)}
        // onMouseLeave={() => changeMouseState("occupation", false)}
        // style={useMouseoverStyle(isMouseover.occupation)}
      >
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
