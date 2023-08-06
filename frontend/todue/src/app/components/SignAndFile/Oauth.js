"use client";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLoginButton } from "react-social-login-buttons";
import styles from "../../css/fileInput.module.css";
import FileInput from "./FileInput";
import axios from "axios";
import { useState } from "react";
import { message } from "antd";
import Profile from "./Profile";

export default function Oauth() {
  const [disabled, setDisabled] = useState(false);
  const [signedIn, setSignedIn] = useState(true);
  const [profileSignIn, setProfileSignIn] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(null)
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
      
      // Grabing profile info
      const photoArray = repData.photos;
      const photoUrl = photoArray.map(photo => photo.url)
      
      setPhotoUrl(photoUrl)

      messageAPI.open({
        type: "success",
        content: "Sign in Successful! 🚀",
      });

      setDisabled(true);
      setSignedIn(false);
      setProfileSignIn(true);
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
      {profileSignIn ? ( <Profile photo={photoUrl[0]}/>) : (<h1>To Due</h1>)}
      <div>
        {contextHolder}
        <div className={styles.fileInput}>
          {signedIn && <GoogleLoginButton  onClick={() => login()} />}
        </div>
      </div>
      <FileInput disabled={disabled} />
    </>
  );
}
