"use client";
import React, { useState } from "react";
import axios from "axios";
import styles from "../css/fileInput.module.css";

export default function FileInputTst() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
      setFile(event.target.files[0])
    }

    const handleSubmit = async (event) => {
      event.preventDefault()
      
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
      } catch (error) {
        console.error(`Error uploading file: ${error}`);
      }
    };

    return (
      <div className={styles.fileInput}>
        <form onSubmit={handleSubmit}>
          <input type='file' onChange={handleFileChange} />
          <button type="submit">Upload File</button>
        </form>
      </div>
    );
}
