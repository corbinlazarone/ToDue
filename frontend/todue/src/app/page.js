"use client";
import styles from "./styles/home.module.css";
import { Layout, Anchor, Timeline, Card } from "antd";
import { useEffect } from "react";
import Link from "next/link";
import {
  TwitterOutlined,
  InstagramFilled,
  FacebookFilled,
} from "@ant-design/icons";
import About from "./components/LandingPage/About";
import FAQ from "./components/LandingPage/FAQ";

const { Header, Content, Footer } = Layout;

export default function Landing() {

  useEffect(() => {
    // Smooth scrolling behavior
    const smoothScroll = (target) => {
      const element = document.querySelector(target);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    };

    // Attach smooth scrolling to each link
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("href");
        smoothScroll(target);
      });
    });
  }, []);

  return (
    <Layout className={styles.layout}>
      <Header className={styles.headerStyle}>
        <h1 className={styles.title}>TODUE</h1>
        <div className={styles.pages}>
          <p style={{ paddingRight: 20 }} className={styles.pageLink}>
            <Link href="#section1">About</Link>
          </p>
          <p style={{ paddingRight: 20 }} className={styles.pageLink}>
            <Link href="#section2">FAQ</Link>
          </p>
          <p style={{ paddingRight: 20 }} className={styles.pageLink}>
            <Link href="#section3">Contact</Link>
          </p>
          <p style={{ paddingRight: 20 }} className={styles.pageLink}>
            <Link href="pages/login">Login</Link>
          </p>
        </div>
      </Header>
      <Content className={styles.content}>
        <section id="section1" className={styles.aboutSectionOne}>
          <About />
        </section>
        <section id="section2" className={styles.faqSectionTwo}>
          <FAQ />
        </section>
      </Content>
      <Footer className={styles.footer}>
        <div className={styles.footerContent}>
          <ul className={styles.socialMedia}>
            <li>
              <a href="#">
                <FacebookFilled className={styles.facebook} />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterOutlined className={styles.twitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramFilled className={styles.instagram} />
              </a>
            </li>
          </ul>
          <p>&copy; {new Date().getFullYear()} To Due. All rights reserved.</p>
        </div>
      </Footer>
    </Layout>
  );
}
