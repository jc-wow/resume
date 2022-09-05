import React, { useState } from "react";
import style from "./contentHead.module.scss";
import "antd/dist/antd.css";
import { Divider } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import { ResumeType, ExpericenceContent } from "@/Constants/Types/ResumeType";
import { template } from "@/Constants/Config/resume-config";
import produce from "immer";
import { nanoid } from "nanoid";

export const ContentHead = (props: {
  contentHead: string;
  editResult: ResumeType;
  type: string;
  setEditResult: (param: ResumeType) => void;
}): JSX.Element => {
  const { contentHead, editResult, type, setEditResult } = props;
  const addContent = (): void => {
    const originItem = editResult[type];
    const lastItemKey = Object.keys(originItem)[Object.keys(originItem).length - 1];
    const lastItemKeyIndex = lastItemKey[lastItemKey.length - 1];
    const content: ExpericenceContent = JSON.parse(JSON.stringify(template[type]["ct1"]));
    content.id = nanoid();

    const toggle = produce((draft) => {
      draft[type][`ct${parseInt(lastItemKeyIndex) + 1}`] = content;
    }, editResult);
    setEditResult(toggle());
  };

  const [isIconShow, setIconShow] = useState(false);

  return (
    <div
      className={style.contentHead + " item"}
      onMouseMove={() => setIconShow(true)}
      onMouseLeave={() => setIconShow(false)}
    >
      <div className={style.content}>
        <span>{contentHead}</span>
        <div style={{ display: isIconShow ? "block" : "none" }}>
          <PlusCircleTwoTone
            className="ignore-ele"
            style={{ fontSize: "20px", cursor: "pointer" }}
            onClick={addContent}
          />
        </div>
      </div>
      <Divider className="contentHead-divider" />
    </div>
  );
};
