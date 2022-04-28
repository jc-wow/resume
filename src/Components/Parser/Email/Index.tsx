import React from "react";
import "./email.scss";

export const Email = (props: { email: string }) => {
  const { email } = props;
  return <span className="email">{email}</span>;
};
