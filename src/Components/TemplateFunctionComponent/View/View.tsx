import React from "react";
import { Button } from "antd";
import { useExportPdf } from "@/hooks/useExportPdf";

export const View = () => {
  return (
    <div>
      <Button
        type="primary"
        onClick={() => useExportPdf({ containerClassname: "resume-template", itemClassName: "item", fileName: "简历" })}
      >
        导出pdf
      </Button>
    </div>
  );
};
