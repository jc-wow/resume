import React from "react";
import style from "./view.module.scss";

export const View = (): JSX.Element => {
  return (
    <div className={`no-print ${style.export}`} onClick={window.print}>
      下载
    </div>
  );
};
