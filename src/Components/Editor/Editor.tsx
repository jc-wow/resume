import React from "react";
import "./editor.scss";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";

interface Props {
  setEditResult(value: string): void;
  editResult: string;
}

export const LeftEditor = (props: Props) => {
  const { editResult, setEditResult } = props;
  const changeInput: any = (value: string) => {
    setEditResult(value);
  };
  return (
    <div className="left-editor">
      <AceEditor
        value={editResult}
        mode="json"
        theme="monokai"
        showPrintMargin={false}
        fontSize={16}
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
