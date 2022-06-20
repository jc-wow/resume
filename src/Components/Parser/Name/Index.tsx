import React, { useState } from "react";
import "./name.scss";
import { useMouseoverStyle } from "@/hooks/useMouseoverStyle";

export const Name = (props: { name: string }) => {
  const { name } = props;
  const [isMouseover, setMouseState] = useState(false);
  return (
    <h3
      className="name item"
      contentEditable="true"
      suppressContentEditableWarning
      // onMouseOver={() => setMouseState(true)}
      // onMouseLeave={() => setMouseState(false)}
      // style={useMouseoverStyle(isMouseover)}
    >
      {name}
    </h3>
  );
};
