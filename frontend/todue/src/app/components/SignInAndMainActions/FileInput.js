import React, { useState } from "react";
import { Button, message, Upload, Card, Skeleton } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import FileDisplay from "./FileDisplay";
import styles from "../../styles/fileInput.module.css";

export default function FileInput(props) {
  const [data, setData] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [disabled, setDisabled] = useState(false)
  const [loading, setLoading] = useState(false);

  const onChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      setFileUploaded(true);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed. Try again!`);
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
    setLoading(true);
    setDisabled(true)
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "http://127.0.0.1:5000/api/uploadFile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${props.accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setLoading(false);
      setDisabled(false)
      const repData = await response.data;
      const course_data = repData[0].course_data;
      setData(course_data);
      onSuccess();
    } catch (error) {
      setLoading(false);
      setDisabled(false)
      onError();
    }
  };

  const loadingComponent = () => {
    if (loading) {
      return (
        <div className={styles.card}>
          <Card
            style={{
              width: 500,
              margin: "20px auto",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Skeleton loading={loading} active />
          </Card>
        </div>
      );
    } else if (fileUploaded && !loading) {
      return (
        <FileDisplay
          data={data}
          updateData={updateData}
          accessToken={props.accessToken}
          userName={props.userName}
        />
      );
    }
  };

  const updateData = (newData) => { setData(newData); };

  return (
    <>
      <div className={styles.fileInput}>
        {props.disabled && (
          <Upload
            name="file"
            disabled={disabled}
            showUploadList={false}
            customRequest={handleSubmit}
            onChange={onChange}
            beforeUpload={beforeUpload}
          >
            <Button disabled={disabled} icon={<UploadOutlined />}>
              Upload File
            </Button>
          </Upload>
        )}
      </div>
      {loadingComponent()}
    </>
  );
}
