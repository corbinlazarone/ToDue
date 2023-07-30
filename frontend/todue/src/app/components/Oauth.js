"use client";
import { useGoogleLogin } from "@react-oauth/google";
import styles from "../css/fileInput.module.css";
import FileInput from "./FileInput";
import axios from "axios";
import { Button } from "antd";
import { useState } from "react";

export default function Oauth() {
  const [disabled, setDisabled] = useState(false);
  const [signedIn, setSignedIn] = useState(true);

  const handleSuccess = async (rep) => {
    setDisabled(true);
    setSignedIn(false);

    try {
      const response = await axios.post("http://127.0.0.1:5000/code", { code: rep.code }, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const repData = await response.data;
      console.log(repData);

    } catch (error) {
      console.error(`Error sending code to backend: ${error}`);
      setSignedIn(true)
      setDisabled(false)
    }
  };

  const handleFailure = (error) => {
    console.log(error);
  };

  const login = useGoogleLogin({
    onSuccess: handleSuccess,
    onError: handleFailure,
    flow: "auth-code",
    scope: "openid email profile https://www.googleapis.com/auth/calendar",
  });

  return (
    <>
      <div className={styles.fileInput}>
        {signedIn && (
          <Button onClick={() => login()}>Sign in with Google 🚀</Button>
        )}
      </div>
      <FileInput disabled={disabled} />
    </>
  );
}
