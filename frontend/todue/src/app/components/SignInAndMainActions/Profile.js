"use client";
import { Avatar, Menu, Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "../../styles/profile.module.css";

/**
 * Profile Component - Displays user avatar.
 * @param {string} props.photo users google profile photo url 
 * @returns {JSX} renders title and profile photo for main upload page.
 */
export default function Profile(props) {
  return (
    <>
      <div className={styles.profile}>
      <h1>To Due</h1>
         <Avatar src={props.photo} icon={<UserOutlined />} />
      </div>
    </>
  );
}
