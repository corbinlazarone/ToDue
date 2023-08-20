import styles from "../../styles/about.module.css";
import { Card } from "antd";
import {
  UserAddOutlined,
  UploadOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";

export default function About() {
  const [scrollTriggered, setScrollTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 500;

      if (scrollPosition >= triggerPosition) {
        setScrollTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.mainDiv}>
        <p className={styles.sectionHeader}>Your AI-Powered Classmate</p>
        <p className={styles.paragraph}>
          Welcome to a world where managing your school schedule is as easy as
          snapping your fingers. To Due harnesses the unparalleled power of AI
          to wave goodbye to manually inputting assignment deadlines and class
          timings.
        </p>
        <p className={styles.paragraph}>
          With a seamless integration to your Google Calendar, our platform
          simply requires the upload of your syllabus and our algorithms will
          take it from there. Let’s embark on a stress-free journey of academic
          organization!
        </p>
        <p className={styles.paragraph}>
          Say hello to a cleaner, clutter-free calendar and clearer mind. No
          more sifting through piles of papers, as To Due ensures that nothing
          slips through the cracks.
        </p>
      </div>
      <div className={styles.stepFlow}>
        <Card
          title="Sign Up 🚀 !"
          className={`${styles.card} ${scrollTriggered ? styles.animate : ""}`}
        >
          <UserAddOutlined style={{ fontSize: 48 }} />
        </Card>
        <div className={`${styles.arrow} ${scrollTriggered ? styles.animate : ""}`}>
          <span>&#8594;</span>
        </div>
        <Card
          title="Upload 💻 !"
          className={`${styles.card} ${scrollTriggered ? styles.animate : ""}`}
        >
          <UploadOutlined style={{ fontSize: 48 }} />
        </Card>
        <div className={`${styles.arrow} ${scrollTriggered ? styles.animate : ""}`}>
          <span>&#8594;</span>
        </div>
        <Card
          title="Get To Dueing 📚 !"
          className={`${styles.card} ${scrollTriggered ? styles.animate : ""}`}
        >
          <EditOutlined style={{ fontSize: 48 }} />
        </Card>
      </div>
    </div>
  );
}
