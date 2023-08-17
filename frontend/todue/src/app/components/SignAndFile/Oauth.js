"use client";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLoginButton } from "react-social-login-buttons";
import styles from "../../css/fileInput.module.css";
import FileInput from "./FileInput";
import axios from "axios";
import { useState } from "react";
import { message } from "antd";
import Profile from "./Profile";

// Oauth Component.
// handles google sign in.
export default function Oauth() {
  const [disabled, setDisabled] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [signedIn, setSignedIn] = useState(true);
  const [profileSignIn, setProfileSignIn] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [messageAPI, contextHolder] = message.useMessage();

  /**
   * Handles a successful file upload.
   * Sends to backend for the file to be extracted to get syllabus data.
   * @param {JSON} rep response from google auth.
   */
  const handleSuccess = async (rep) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/login",
        { code: rep.code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status == 200) {
        const token = await response.data;
        console.log(token);
        setAccessToken(token);
        grabProfileInfo();
        messageAPI.open({
          type: "success",
          content: "Sign in Successful! 🚀",
        });

        setDisabled(true);
        setSignedIn(false);
        setProfileSignIn(true);
      } else {
        messageAPI.open({
          type: "error",
          content: "Error! Try Signing in again",
        });
      }
      
    } catch (error) {
      console.error(`Error sending code to backend: ${error}`);
      setSignedIn(true);
      setDisabled(false);
    }
  };

  /**
   * grab user profile information from google people api.
   * @param {string} token Bearer token for authorization.
   */
  const grabProfileInfo = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const repData = await response.data;

      // Grabbing profile info
      const photoArray = repData.photo;
      console.log(repData);
      const photoUrl = photoArray.map((photo) => photo.url);
      setPhotoUrl(photoUrl);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * handles file upload failure logs error to console and returns user feed back.
   * @param {JSON} error
   */
  const handleFailure = (error) => {
    console.log(error);
    messageAPI.open({
      type: "error",
      content: "Error Occurred :( Try Again!",
    });
  };

  // Google login.
  const login = useGoogleLogin({
    onSuccess: handleSuccess,
    onError: handleFailure,
    flow: "auth-code",
    select_account: true,
    scope: "openid email profile https://www.googleapis.com/auth/calendar",
  });

  return (
    <>
      {profileSignIn ? <Profile /> : <h1>To Due</h1>}
      <div>
        {contextHolder}
        <div className={styles.fileInput}>
          {signedIn && <GoogleLoginButton onClick={() => login()} />}
        </div>
      </div>
      <FileInput disabled={disabled} accessToken={accessToken} />
    </>
  );
}
