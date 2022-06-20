import React, { useState } from "react";
import "./email.scss";
import { useMouseoverStyle } from "@/hooks/useMouseoverStyle";

export const Email = (props: { email: string }) => {
  const { email } = props;
  const [isMouseover, setMouseState] = useState(false);

  return (
    <span
      className="email"
      contentEditable="true"
      suppressContentEditableWarning
      // onMouseOver={() => setMouseState(true)}
      // onMouseLeave={() => setMouseState(false)}
      // style={useMouseoverStyle(isMouseover)}
    >
      {email}
    </span>
  );
};
