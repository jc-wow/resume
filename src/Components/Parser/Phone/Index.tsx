import React, { useState } from "react";
import "./phone.scss";
import { useMouseoverStyle } from "@/hooks/useMouseoverStyle";

export const Phone = (props: { phone?: string }) => {
  const { phone } = props;
  const [isMouseover, setMouseState] = useState(false);

  return (
    <span
      className="phone"
      contentEditable="true"
      suppressContentEditableWarning
      // onMouseOver={() => setMouseState(true)}
      // onMouseLeave={() => setMouseState(false)}
      // style={useMouseoverStyle(isMouseover)}
    >
      {phone}
    </span>
  );
};
