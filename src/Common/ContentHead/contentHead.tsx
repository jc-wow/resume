import React, { useState } from "react";
import style from "./contentHead.module.scss";
import "antd/dist/antd.css";
import { Divider } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import { ResumeType } from "@/Constants/Types/ResumeType";
import { template } from "@/Constants/Config/resume-config";

export const ContentHead = (props: {
  contentHead: string;
  formatEditResult: ResumeType;
  type: string;
  setEditResult: (param: string) => void;
}) => {
  const { contentHead, formatEditResult, type, setEditResult } = props;
  const addContent = (): void => {
    const originItem = formatEditResult[type];
    const lastItemKey = Object.keys(originItem)[Object.keys(originItem).length - 1];
    const lastItemKeyIndex = lastItemKey[lastItemKey.length - 1];
    formatEditResult[type][`ct${parseInt(lastItemKeyIndex) + 1}`] = template[type]["ct1"];
    setEditResult(JSON.stringify(formatEditResult));
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
