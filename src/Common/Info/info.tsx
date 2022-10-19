import React from "react";
import { ResumeType } from "@/Constants/Types/ResumeType";
import produce from "immer";
import ContentEditable from "react-contenteditable";
import emptyPlacehold from "@/Style/emptyPlacehold.module.scss";
import contentBox from "@/Style/contentBox.module.scss";
import infoStyle from "./info.module.scss";

export const Info = (props: {
  content: string;
  setEditResult: (param: ResumeType) => void;
  editResult: ResumeType;
  infoType: string;
  imgName?: string;
  position?: string;
}): JSX.Element => {
  const { content, editResult, setEditResult, infoType, imgName, position } = props;
  const getPlacehold = (): string => {
    switch (infoType) {
      case "phone":
        return "请输入联系方式";
      case "email":
        return "请输入邮箱";
      case "name":
        return "请输入姓名";
    }
  };
  return (
    <div
      className={`${
        position ? (position === "left" ? infoStyle["icon-container-left"] : infoStyle["icon-container-right"]) : ""
      }`}
    >
      {imgName ? (
        <img
          className={`${infoStyle.icon} ${position ? (position === "left" ? "" : infoStyle["icon-right"]) : ""}`}
          src={require(`@/Assets/${imgName}.svg`).default}
        />
      ) : (
        ""
      )}
      <ContentEditable
        className={`${content.length ? "" : emptyPlacehold["empty-placehold"]} ${contentBox["content-box"]} ${
          infoStyle.subtitle
        }`}
        html={content}
        placeholder={getPlacehold()}
        onChange={(event) => {
          setEditResult(
            produce((draft) => {
              draft[infoType] = event.target.value;
            }, editResult)()
          );
        }}
      ></ContentEditable>
    </div>
  );
};
