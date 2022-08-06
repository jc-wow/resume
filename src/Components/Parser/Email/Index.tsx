import React from "react";
import "./email.scss";

export const Email = (props: { email: string }) => {
  const { email } = props;

  return (
    <span className="email" contentEditable="true" suppressContentEditableWarning>
      {email}
    </span>
  );
};
