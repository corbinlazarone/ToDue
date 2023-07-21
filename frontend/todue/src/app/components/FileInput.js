"use client";
import { Button, message, Upload, Spin, Progress } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import axios from "axios";
import styles from "../css/fileInput.module.css";

export default function FileInput() {
    const [file, setFile] = useState(null);

    const onChange = (info) => {
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    };

    const beforeUpload = (file) => {
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      const isAllowed = allowedTypes.includes(file.type);
      if (!isAllowed) {
        message.error("You can only upload PDFs or DOCX files!");
      }

      return isAllowed;
    };

    const handleSubmit = async ({ file, onSuccess, onError }) => {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post(
          "http://127.0.0.1:5000/uploadFile",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(response.data);
        onSuccess();
      } catch (error) {
        console.error(`Error uploading file: ${error}`);
        onError();
      }
    };

    return (
      <div className={styles.fileInput}>
        <Upload
          name="file"
          showUploadList={false}
          customRequest={handleSubmit}
          onChange={onChange}
          beforeUpload={beforeUpload}
        >
          <Button icon={<UploadOutlined />}>Upload File</Button>
        </Upload>
      </div>
    );
}
