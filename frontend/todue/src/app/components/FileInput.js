"use client";
import { Button, message, Upload, Spin, Progress, Card, Skeleton } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import FileDisplay from "./FileDisplay";
import axios from "axios";
import styles from "../css/fileInput.module.css";
import { useEffect } from "react";

export default function FileInput() {
  const [data, setData] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      setFileUploaded(true);
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
      setLoading(true);
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
      const data = await response.data;
      setData(data);
      console.log(data);
      setLoading(false);
      onSuccess();
    } catch (error) {
      console.error(`Error uploading file: ${error}`);
      setLoading(false);
      onError();
    }
  };

  // const handleReuploadLoad = () => {
  //   const cardStyle = {
  //     width: 500,
  //     margin: "20px auto",
  //     borderRadius: "8px",
  //     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  //   };

  //   useEffect(() => {
  //     if (fileUploaded == true) {
  //       return (
  //         <Card style={cardStyle}>
  //           <Skeleton loading={loading} active style={{ height: 500 }} />
  //         </Card>
  //       );
  //     }
  //   }, []);

  //   if (fileUploaded == true) {
  //     if (loading == true) {
  //       return (
  //         <Card style={cardStyle}>
  //           <Skeleton loading={loading} active style={{ height: 500 }} />
  //         </Card>
  //       );
  //     } else if (loading == false) {
  //       return <FileDisplay data={data} />;
  //     }
  //   }
  // };

  return (
    <>
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
      <div className={styles.card}>
        {fileUploaded && loading ? (
          <Card style={{ width: 500, margin: "20px auto", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <Skeleton loading={loading} active style={{ height: 500 }} />
          </Card>
        ) : fileUploaded && !loading ? (
          <FileDisplay data={data} />
        ) : null}
      </div>
    </>
  );
}
