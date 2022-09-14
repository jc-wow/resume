import React from "react";
import { ResumeType } from "@/Constants/Types/ResumeType";
import produce from "immer";
import ContentEditable from "react-contenteditable";
import emptyIcon from "@/Style/emptyIcon.module.scss";

export const Info = (props: {
  content: string;
  setEditResult: (param: ResumeType) => void;
  editResult: ResumeType;
  infoType: string;
}): JSX.Element => {
  const { content, editResult, setEditResult, infoType } = props;

  return (
    <ContentEditable
      className={content.length ? "" : emptyIcon["empty-text"]}
      html={content}
      onChange={(event) => {
        setEditResult(
          produce((draft) => {
            draft[infoType] = event.target.value;
          }, editResult)()
        );
      }}
    ></ContentEditable>
  );
};
