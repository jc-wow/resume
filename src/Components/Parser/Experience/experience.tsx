import React, { useState } from "react";
import { ExpericenceContent, ResumeType } from "@/Constants/Types/ResumeType";
import style from "./experience.module.scss";
import { CloseCircleTwoTone, MinusCircleOutlined } from "@ant-design/icons";
import ContentEditable from "react-contenteditable";
import product from "immer";
import emptyPlacehold from "@/Style/emptyPlacehold.module.scss";
import contentBox from "@/Style/contentBox.module.scss";

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

  let contentIndex: number;
  let contentLength: number;
  const getContentIndex = () => {
    const items: Array<ExpericenceContent> = Object.values(editResult[contentType]);
    contentLength = items.length;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        contentIndex = i;
        return;
      }
    }
  };
  getContentIndex();

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

  const changeContentItem = (ctxIndex: number, type: string): void => {
    const toggle = product((draft) => {
      const targetContent = draft[contentType][targetKey];
      if (type === "remove") {
        targetContent.content.splice(ctxIndex, 1);
      } else {
        if (targetContent.content[targetContent.content.length - 1]) {
          targetContent.content.push("");
        }
      }
    }, editResult);
    setEditResult(toggle());
  };

  const mouseOverContainer = (): void => {
    changeContentItem(0, "add");
    setContainerState(true);
  };

  const mouseLeaveContainer = (): void => {
    const lastItem = targetItems[targetKey].content[[targetItems[targetKey].content.length - 1]];
    if (targetItems[targetKey].content.length > 1 && !lastItem) {
      changeContentItem(targetItems[targetKey].content.length - 1, "remove");
    }
    setContainerState(false);
  };

  const countImgNumber = (): number => {
    let count = 0;
    if (Object.keys(editResult[contentType]).length > 1 && contentIndex !== 0) {
      count++;
    }
    if (Object.keys(editResult[contentType]).length > 1 && contentIndex !== contentLength - 1) {
      count++;
    }
    return count;
  };

  const moveItem = (dir: string): void => {
    const toggle = product((draft) => {
      const nextIndex = dir === "up" ? contentIndex - 1 : contentIndex + 1;
      const targetContent = draft[contentType];
      const temp = targetContent[`ct${nextIndex + 1}`];
      const targetItem = targetContent[`ct${contentIndex + 1}`];
      targetContent[`ct${nextIndex + 1}`] = targetItem;
      targetContent[`ct${contentIndex + 1}`] = temp;
    }, editResult);
    setEditResult(toggle());
  };

  return (
    <div
      className={style.experience}
      onMouseMove={mouseOverContainer}
      onMouseLeave={mouseLeaveContainer}
      custom-label={contentType}
    >
      <div className={`${style.wrap} ${isHoverContainer ? style.hover : ""}`} custom-label={contentType}>
        <img
          className={`${style.img} ${style.up} ${
            isHoverContainer && Object.keys(editResult[contentType]).length > 1 && contentIndex !== 0 ? "" : style.hide
          } ${countImgNumber() === 1 ? style.center : ""}`}
          src={require("@/Assets/up.svg").default}
          onClick={() => moveItem("up")}
        />
        <img
          className={`${style.img} ${style.down} ${
            isHoverContainer && Object.keys(editResult[contentType]).length > 1 && contentIndex !== contentLength - 1
              ? ""
              : style.hide
          } ${countImgNumber() === 1 ? style.center : ""}`}
          src={require("@/Assets/down.svg").default}
          onClick={() => moveItem("down")}
        />
        <div className={style["icon-container"]} custom-label={contentType}>
          <CloseCircleTwoTone
            className={style["del-item"]}
            style={{
              display: isHoverContainer && Object.keys(editResult[props.contentType]).length > 1 ? "block" : "none",
            }}
            onClick={() => removeContent()}
          ></CloseCircleTwoTone>
        </div>
        <div className={style.title} custom-label={contentType}>
          <ContentEditable
            className={`${title.length ? style.position : emptyPlacehold["empty-placehold"]} ${
              contentBox["content-box"]
            }`}
            html={title}
            placeholder={contentType === "education" ? "请输入学校" : "请输入机构/组织"}
            onChange={(event) => setChangeContentValue(event.target.value, "title")}
          ></ContentEditable>
          <ContentEditable
            className={`${time.length ? "" : emptyPlacehold["empty-placehold"]} ${contentBox["content-box"]} ${
              style["time-box"]
            }`}
            html={time}
            placeholder={"请输入时间"}
            onChange={(event) => setChangeContentValue(event.target.value, "time")}
          ></ContentEditable>
        </div>
        <div className={style["occupation"]}>
          <ContentEditable
            className={`${occupation.length ? "" : emptyPlacehold["empty-placehold"]}  ${contentBox["content-box"]}`}
            html={occupation}
            placeholder={contentType === "education" ? "请输入专业/学历" : "请输入角色"}
            onChange={(event) => setChangeContentValue(event.target.value, "occupation")}
          ></ContentEditable>
        </div>
        <ul className={style.contentList} custom-label={contentType}>
          {content.map((ele, index) => (
            <li key={index}>
              <div className={style["content-item"]} custom-label={contentType}>
                <ContentEditable
                  className={`${ele.length ? "" : emptyPlacehold["empty-placehold"]} ${contentBox["content-box"]}`}
                  html={ele}
                  placeholder={"请输入履历"}
                  onChange={(event) => setChangeContentValue(event.target.value, "content", index)}
                ></ContentEditable>
                <MinusCircleOutlined
                  className={style["del-icon"]}
                  onClick={() => changeContentItem(index, "remove")}
                  style={{
                    display: isHoverContainer && content.length > 1 ? "block" : "none",
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
