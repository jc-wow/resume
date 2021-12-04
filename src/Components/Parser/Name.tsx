import React from "react";

interface Param {
  name: string;
}
export const Name: React.FC<any> = (param: Param) => {
  return <h3>{param.name}</h3>;
};
