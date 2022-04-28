import React from "react";
import { ExpericenceContent } from "@/Constants/Types/ResumeType";
import style from "./experience.module.scss";

export const Expericence = (props: { experience: ExpericenceContent }) => {
  const { title, occupation, time, content = {} } = props.experience;
  return (
    <div className={style.experience}>
      <div className={style.title}>
        <span className={style.position}>{title}</span> <span>{time}</span>
      </div>
      <div>{occupation}</div>
      <ul className={style.contentList}>
        {Object.keys(content)
          .map((ele) => content[ele])
          .map((ele, index) => (
            <li key={ele + index}>{ele}</li>
          ))}
      </ul>
    </div>
  );
};
