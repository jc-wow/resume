import React, { useEffect, useRef } from "react";
import "./editor.scss";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";

interface Param {
  editResult: string;
  setEditResult(value: string): void;
}

export const LeftEditor: React.FC<any> = (param: Param) => {
  const changeInput: any = (value: string, event: any) => {
    param.setEditResult(JSON.stringify(value, null, "\t"));
  };
  return (
    <div className="left-editor">
      <AceEditor
        mode="json"
        theme="monokai"
        showPrintMargin={false}
        fontSize={18}
        focus={true}
        enableLiveAutocompletion={true}
        style={{
          height: "80vh",
          width: "100%",
        }}
        onChange={changeInput}
      />
    </div>
  );
};
