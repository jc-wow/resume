import React from "react";
import "./phone.scss";

export const Phone = (props: { phone?: string }) => {
  const { phone } = props;

  return (
    <span className="phone" contentEditable="true" suppressContentEditableWarning>
      {phone}
    </span>
  );
};
