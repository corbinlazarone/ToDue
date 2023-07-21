"use client";

import { Card, Switch, Input, Form, Button, Pagination } from "antd";
import React, { useState } from "react";
const { Meta } = Card;

export default function FileDisplay() {
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(null);

  const [className, setClassName] = useState(null);
  const [assignment, setAssignment] = useState(null);
  const [dueDate, setDueDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const onChange = (checked) => {
    setLoading(!checked);
  };

  const initalData = {
    1: {
      className: "Math",
      assignment: "Homework 1",
      dueDate: "2023-07-31",
      startTime: "10:00",
      endTime: "11:30",
    },
    2: {
      className: "Science",
      assignment: "Lab Report",
      dueDate: "2023-08-05",
      startTime: "14:00",
      endTime: "16:30",
    },
    3: {
      className: "English",
      assignment: "Essay",
      dueDate: "2023-08-10",
      startTime: "09:00",
      endTime: "12:00",
    },
    4: {
      className: "History",
      assignment: "Presentation",
      dueDate: "2023-08-15",
      startTime: "13:30",
      endTime: "15:00",
    },
    5: {
      className: "Physics",
      assignment: "Experiments",
      dueDate: "2023-08-20",
      startTime: "11:00",
      endTime: "12:30",
    },
  };
  
  /*
    for each event passed increase the pagination and changed the intialValues
  */

  const handlePaginationChange = (page) => {
    setCounter(page)
  }

  const cardStyle = {
    width: 500,
    margin: "20px auto",
    color: "black",
    borderRadius: 8,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div>
      <Switch checked={!loading} onChange={onChange} />
      <Card style={cardStyle} loading={loading} title="Syllabus Data">
        <Form
          layout="vertical"
          initialValues={initalData[counter]}
          // onFinish={handleSubmit}
        >
          <Form.Item label="Class Name" name="className">
            <Input />
          </Form.Item>
          <Form.Item label="Assignment" name="assignment">
            <Input />
          </Form.Item>
          <Form.Item label="Due Date" name="dueDate">
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Start Time" name="startTime">
            <Input type="time" />
          </Form.Item>
          <Form.Item label="End Time" name="endTime">
            <Input type="time" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
          <Pagination current={counter} pageSize={1} total={5} onChange={handlePaginationChange}/>
        </Form>
      </Card>
    </div>
  );
}