"use client";
import { Button, message, Upload, Card, Skeleton } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import FileDisplay from "./FileDisplay";
import axios from "axios";
import styles from "../../css/fileInput.module.css";

// FileInput Component.
// takes a fileUpload.
// Props
// - disabled: to hide upload file action until user is signed in.
export default function FileInput(props) {
  const [data, setData] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [buttonDisabled, setDisabled] = useState(false)

  /**
   * on changes function to display success or error when the user uploads a file.
   * @param {string} info grabs file name to display feedback with file uploaded.
   */
  const onChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      setFileUploaded(true)
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed. Syllabus too big!`);
    }
  };

  /**
   * Checks allowed file extension of PDF or DOCX.
   * @param {file} file 
   * @returns {*} string error or true.
   */
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

  /**
   * handles file upload to backed for getting syllabus data.
   * @param {file} file property of object being passed from antd Upload component.
   * @param {function} onSuccess callback function from object passed from antd Upload Component if successful.
   * @param {function} onError callback function from object passed from antd Upload Component if unsuccessful.
   */
  const handleSubmit = async ({ file, onSuccess, onError }) => {
    try {
      setDisabled(true)
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "http://127.0.0.1:5000/api/uploadFile",
        formData,
        {
          headers: {
            "Authorization": `Bearer ${props.accessToken}`,
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

  /**
   * updates props.data with user data saved, if edited.
   * @param {object} newData 
   */
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
        <FileDisplay data={data} updateData={updateData} accessToken={props.accessToken}/>
      ): null}
    </>
  );
}