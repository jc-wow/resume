import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

export const EditorForm: React.FC = () => {
  return (
    <Form>
      <Form.Item label="姓名">
        <Input />
      </Form.Item>
      <Form.Item label="电话">
        <Input />
      </Form.Item>
      <Form.Item label="邮箱">
        <Input />
      </Form.Item>
    </Form>
  );
};
