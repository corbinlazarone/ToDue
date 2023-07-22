import { Card, Switch, Input, Form, Button, Pagination } from "antd";
import React, { useState, useEffect } from "react";
import styles from '../css/FileDisplay.module.css'
const { Meta } = Card;

export default function FileDisplay(props) {
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const [form] = Form.useForm(); // Get the form instance

  console.log(`Here's props: ${props.data.course_name}`);

  const onChange = (checked) => {
    setLoading(!checked);
  };

  const onSubmit = (event) => {
    console.log("form data", event);
  };

  useEffect(() => {
    form.setFieldsValue({
      className: props.data?.course_name,
      assignment: props.data?.assignments?.[counter]?.name,
      dueDate: props.data?.assignments?.[counter]?.due_date,
      startTime: props.data?.assignments?.[counter]?.start_time,
      endTime: props.data?.assignments?.[counter]?.end_time,
    });
  }, [counter, form, props.data]);

  const handlePaginationChange = (page) => {
    setCounter(page - 1);
  };

  const cardStyle = {
    width: 500,
    margin: "20px auto",
    color: "black",
    borderRadius: 8,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className={styles.fileDisplay}>
      <Switch checked={!loading} onChange={onChange} />
      <Card style={cardStyle} loading={loading} title="Syllabus Data">
        <Form form={form} layout="vertical" onFinish={onSubmit}>
          <Form.Item label="Class Name" name="className">
            <Input />
          </Form.Item>
          <Form.Item label="Assignment" name="assignment">
            <Input />
          </Form.Item>
          <Form.Item label="Due Date" name="dueDate">
            {/* <Input type="date" /> */}
            <Input />
          </Form.Item>
          <Form.Item label="Start Time" name="startTime">
            {/* <Input type="time" /> */}
            <Input />
          </Form.Item>
          <Form.Item label="End Time" name="endTime">
            {/* <Input type="time" /> */}
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
          <Pagination
            current={counter + 1}
            pageSize={1}
            total={props.data?.assignments?.length}
            onChange={handlePaginationChange}
          />
        </Form>
      </Card>
    </div>
  );
}
