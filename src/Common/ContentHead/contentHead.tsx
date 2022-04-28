import React from "react";
import style from "./contentHead.module.scss";
import "antd/dist/antd.css";
import { Divider } from "antd";

export const ContentHead = (props: { contentHead: string }) => {
  const { contentHead } = props;
  return (
    <div className={style.contentHead}>
      {contentHead}
      <Divider className="contentHead-divider" />
    </div>
  );
};
