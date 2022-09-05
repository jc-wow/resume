import React from "react";
import { ResumeType } from "@/Constants/Types/ResumeType";
import produce from "immer";
import ContentEditable from "react-contenteditable";

export const Info = (props: {
  content: string;
  setEditResult: (param: ResumeType) => void;
  editResult: ResumeType;
  infoType: string;
}): JSX.Element => {
  const { content, editResult, setEditResult, infoType } = props;

  return (
    <ContentEditable
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
