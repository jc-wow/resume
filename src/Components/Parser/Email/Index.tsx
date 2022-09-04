import React from "react";
import "./email.scss";

export const Email = (props: { email: string }): JSX.Element => {
  const { email } = props;

  return (
    <span className="email" contentEditable="true" suppressContentEditableWarning>
      {email}
    </span>
  );
};
