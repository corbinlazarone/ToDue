"use client";
import { Avatar, Menu, Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "../../styles/profile.module.css";

// Profile Component
// Displays user avatar.
// Props:
// - photo: user's google profile photo.
export default function Profile(props) {

  const handleMenuClick = (e) => {
    console.log("Clicked item:", e.key);
  };

  return (
    <>
      <div className={styles.profile}>
      <h1>To Due</h1>
         <Avatar src={props.photo} icon={<UserOutlined />} />
      </div>
    </>
  );
}
