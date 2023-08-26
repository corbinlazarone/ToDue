import { Button, Card, Form, Input, message } from "antd";
import axios from "axios";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

/**
 * Contact Component - rendering contact form.
 * @returns {JSX} Contact form
 */
export default function Contact() {
  const [form] = Form.useForm();
  const [makeDisabled, setDisabled] = useState(false);
  const [messageAPI, contextHolder] = message.useMessage();

  const cardStyle = {
    width: 600,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  /**
   * Handles form submit sends form data to backend to be processed to send a eamil to the developer.
   */
  const handleFormSubmit = async () => {

    messageAPI.open({
      type: "loading",
      content: "Sending...",
      key: "loadingKey",
    });
    setDisabled(true) // making button disabled to reduce user spam clicks.

    try {
      const formData = await form.validateFields();
      const response = await axios.post(
        "http://127.0.0.1:5000/api/send",
        {
          formItems: formData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      messageAPI.open({
        type: 'success',
        content: 'Message sent! we will get back to you soon.',
        key: "loadingKey"
      })
      form.resetFields() // clear fields when submitted successfully.
      setDisabled(false)
    } catch (error) {
      console.error(`Error sending form: ${error}`);

      messageAPI.open({
        type: 'error',
        content: 'Your message failed to send, try again!',
        key: 'loadingKey'
      })
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 100,
        paddingTop: 100,
      }}
    >
      {contextHolder}
      <Card title="Contact" style={cardStyle}>
        <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
          <Form.Item label="First Name" name="firstName">
            <Input required type="text" />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName">
            <Input required type="text" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input required type="email" />
          </Form.Item>
          <Form.Item label="Message" name="message">
            <TextArea required showCount maxLength={500} style={{ height: 150, resize: "none" }} />
          </Form.Item>
          <Form.Item>
            <Button disabled={makeDisabled} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}