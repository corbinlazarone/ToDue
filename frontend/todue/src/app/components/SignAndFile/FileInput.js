"use client";
import { Button, message, Upload, Card, Skeleton } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import FileDisplay from "./FileDisplay";
import axios from "axios";
import styles from "../../css/fileInput.module.css";

export default function FileInput(props) {
  const [data, setData] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [buttonDisabled, setDisabled] = useState(false)

  // user feed back.
  const onChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      setFileUploaded(true)
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed. Syllabus too big!`);
    }
  };

  // check allowed file extension before uploading file.
  const beforeUpload = (file) => {
    setLoading(true)
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

  // send uploaded file.
  const handleSubmit = async ({ file, onSuccess, onError }) => {
    try {
      setDisabled(true)
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
      setDisabled(false)
      onSuccess();
    } catch (error) {
      console.error(`Error uploading file: ${error}`);
      setLoading(false);
      setDisabled(false)
      onError();
    }
  };

  // updates props.data with user data saved, if edited.
  const updateData = (newData) => {
    setData(newData)
  }

  return (
    <>
      <div className={styles.fileInput}>
        {props.disabled && (
          <Upload
            name="file"
            disabled={buttonDisabled}
            showUploadList={false}
            customRequest={handleSubmit}
            onChange={onChange}
            beforeUpload={beforeUpload}
          >
            <Button disabled={buttonDisabled} icon={<UploadOutlined />}>Upload File</Button>
          </Upload>
        )}
      </div>
      {fileUploaded && loading ? (
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
      ) : fileUploaded && !loading ? (
        <FileDisplay data={data} updateData={updateData}/>
      ): null}
    </>
  );
}