"use client";
import { useGoogleLogin } from "@react-oauth/google";
import styles from "../css/fileInput.module.css";
import FileInput from "./FileInput";
import axios from "axios";
import GoogleButton from "react-google-button";
import { useState } from "react";
import { message } from "antd";

export default function Oauth() {
  const [disabled, setDisabled] = useState(false);
  const [signedIn, setSignedIn] = useState(true);
  const [messageAPI, contextHolder] = message.useMessage();

  const handleSuccess = async (rep) => {

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/code",
        { code: rep.code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const repData = await response.data;
      console.log(repData);

      messageAPI.open({
        type: "success",
        content: "Sign in Successful! 🚀",
      });

      setDisabled(true);
      setSignedIn(false);

    } catch (error) {
      console.error(`Error sending code to backend: ${error}`);
      setSignedIn(true);
      setDisabled(false);
    }
  };

  const handleFailure = (error) => {
    console.log(error);
    messageAPI.open({
      type: "error",
      content: "Error Occured :( Try Again!",
    });
  };

  const login = useGoogleLogin({
    onSuccess: handleSuccess,
    onError: handleFailure,
    flow: "auth-code",
    select_account: true,
    scope: "openid email profile https://www.googleapis.com/auth/calendar",
  });

  return (
    <>
      {contextHolder}
      <div className={styles.fileInput}>
        {signedIn && <GoogleButton onClick={() => login()} />}
      </div>
      <FileInput disabled={disabled} />
    </>
  );
}
