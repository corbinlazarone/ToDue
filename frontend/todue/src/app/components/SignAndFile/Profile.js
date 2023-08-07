"use client";
import { Avatar, Menu, Dropdown, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "../../css/profile.module.css";

export default function Profile(props) {

  const handleMenuClick = (e) => {
    console.log("Clicked item:", e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="editProfile">Edit Profile</Menu.Item>
      <Menu.Item key="settings">Settings</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className={styles.profile}>
      <h1>To Due</h1>
        <Dropdown overlay={menu} trigger={["hover"]}>
            <Avatar src={props.photo} icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </>
  );
}
