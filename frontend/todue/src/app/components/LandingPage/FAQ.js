import { Collapse } from "antd";
import styles from '../../styles/FAQ.module.css'

export default function FAQ() {
  const items = [
    {
      key: '1',
      label: "Does To Due store any of my uploaded Syllabuses?",
      children:
        "No worries! Your uploaded syllabuses are safe with us. Currently, To Due doesn't store any of your user data. However, we're looking ahead and planning to introduce features like email reminders with your course-related content, all with your permission, of course!",
    },
    {
      key: '2',
      label:
        "Can I edit the suggested Events that To Due produces?",
      children:
        "Absolutely! Once you upload your syllabus, you'll be able to review and modify the information before To Due finalizes the submission. We want to make sure everything aligns perfectly with your preferences.",
    },
    {
      key: '3',
      label: "Can I choose a color scheme for each syllabus in my calendar?",
      children:
        "While this feature isn't available right now, we're actively working on making your experience even better. Soon, you'll be able to enjoy the flexibility of different calendars for each syllabus, customize your colors, and even set up timely reminders. Stay tuned for these exciting updates!",
    },
  ];

  return (
    <div className={styles.collapseDiv}>
      <Collapse style={{ backgroundColor: 'white', width: '60%'}} items={items} defaultActiveKey={['1']}/>
    </div>
  );
}
