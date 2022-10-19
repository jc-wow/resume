import React from "react";
import { Button } from "antd";

export const View = (): JSX.Element => {
  return (
    <div className="no-print">
      <Button type="primary" onClick={window.print}>
        导出pdf
      </Button>
    </div>
  );
};
