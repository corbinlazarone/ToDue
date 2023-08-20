import React, { useState } from "react";
import { Button, message, Upload, Card, Skeleton } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import FileDisplay from "./FileDisplay";
import styles from "../../styles/fileInput.module.css";

export default function FileInput(props) {
  const [data, setData] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (info) => {
    
    // setLoading(true)

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
    setLoading(true)
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

      setLoading(false); // Set loading to false after fetching data
      const responseData = await response.data;
      setData(responseData);
      onSuccess();
    } catch (error) {
      setLoading(false); // Set loading to false in case of error
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
        />
      );
    }
  };

  const updateData = (newData) => {
    setData(newData)
  }

  return (
    <>
      <div className={styles.fileInput}>
        {props.disabled && (
          <Upload
            name="file"
            showUploadList={false}
            customRequest={handleSubmit}
            onChange={onChange}
            beforeUpload={beforeUpload}
          >
            <Button icon={<UploadOutlined />}>Upload File</Button>
          </Upload>
        )}
      </div>
      {loadingComponent()}
    </>
  );
}
