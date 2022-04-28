import React from "react";
import "./name.scss";

export const Name = (props: { name: string }) => {
  const { name } = props;
  return <h3 className="name">{name}</h3>;
};
