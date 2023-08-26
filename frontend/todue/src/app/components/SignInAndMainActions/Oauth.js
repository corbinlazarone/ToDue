"use client";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useState } from "react";
import { message } from "antd";
import FileInput from "./FileInput";
import axios from "axios"
import Profile from "./Profile";
import styles from "../../styles/fileInput.module.css";

/**
 * Oauth Component - renders google sign in prompt.
 * @returns {JSX} Oauth google sign in button.
 */
export default function Oauth() {
  const [disabled, setDisabled] = useState(false);
  const [token, setToken] = useState(null);
  const [signedIn, setSignedIn] = useState(true);
  const [profileSignIn, setProfileSignIn] = useState(false);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [userName, setUserName] = useState(null)
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
      const repData = await response.data;
      const token = repData[0].id_token;
      setToken(token);
      grabProfileInfo(token);

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

  /**
   * grab user profile information from google people api.
   * @param {string} token Bearer token for authorization.
   */
  const grabProfileInfo = async (tokenfunc) => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/profile", {
        headers: {
          Authorization: "Bearer " + tokenfunc,
        },
      });;
      const repData = await response.data;
      const photoUrl = repData[0].result.photos[0].url;
      const name = repData[0].result.names[0].givenName;
      setUserName(name)
      setPhotoUrl(photoUrl);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * handles google auth failure, provides user feedback.
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
      {profileSignIn ? <Profile photo={photoUrl} /> : <h1>To Due</h1>}
      <div>
        {contextHolder}
        <div className={styles.fileInput}>
          {signedIn && <GoogleLoginButton onClick={() => login()} />}
        </div>
      </div>
      <FileInput disabled={disabled} accessToken={token} userName={userName} />
    </>
  );
}
