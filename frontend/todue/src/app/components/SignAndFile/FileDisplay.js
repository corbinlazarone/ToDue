import {
  Card,
  Switch,
  Input,
  Form,
  Button,
  Pagination,
  DatePicker,
} from "antd";
import React, { useState, useEffect } from "react";
import styles from "../../css/fileDisplay.module.css";
import axios from "axios";
import { message } from "antd";
const { Meta } = Card;

export default function FileDisplay(props) {
  const [counter, setCounter] = useState(0);
  const [beingEdited, setBeingEdited] = useState(false);
  const [year, setYear] = useState("");
  const [yearSelected, setYearSelected] = useState(false);
  const [form] = Form.useForm();
  const [messageAPI, contextHolder] = message.useMessage();
  const [checkStatus, setCheckStatus] = useState(false);

  useEffect(() => {
    // set the form values based on props.data.
    form.setFieldsValue({
      dueDate: props.data?.assignments?.[counter]?.due_date,
      endTime: props.data?.assignments?.[counter]?.end_time,
      name: props.data?.assignments?.[counter]?.name,
      startTime: props.data?.assignments?.[counter]?.start_time,
    });
  }, [counter, form, props.data]);

  const handlePaginationChange = (page) => {
    setCounter(page - 1);
  };

  const isEditing = () => {
    setBeingEdited(true);
  };

  const onSubmit = async () => {
    // Get the form values
    const formData = await form.validateFields();

    // Update the corresponding assignment object in the props.data array
    const updatedAssignments = props.data.assignments.map(
      (assignment, index) => {
        if (index === counter) {
          return {
            ...assignment,
            due_date: formData.dueDate,
            end_time: formData.endTime,
            name: formData.name,
            start_time: formData.startTime,
          };
        }
        return assignment;
      }
    );

    // Update the props.data with the updated assignments
    const updatedData = {
      ...props.data,
      assignments: updatedAssignments,
    };

    props.updateData(updatedData);

    messageAPI.open({
      type: "success",
      content: `Page ${counter + 1} values saved!`,
    });

    console.log("submitted", props.data);
  };

  const uploadToCalendar = async () => {

    setBeingEdited(false)
    setCheckStatus(true)

    messageAPI.open({
      type: "loading",
      content: "Adding Events to Corbins Google Calendar",
      key: "loadingKey",
    });

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/createEvents",
        { course_data: props.data, year: year },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      messageAPI.open({
        type: "success",
        content: "Events Created!",
        key: "loadingKey",
      });

    } catch (error) {
      console.error(`Error: ${error}`);
      messageAPI.open({
        type: "error",
        content: "Error Adding Events",
        key: "loadingKey",
      });
    }
  };

  const cardStyle = {
    width: 600,
    margin: "20px auto",
    borderRadius: 8,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const titleComp = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{props.data?.course_name}</h3>
        <DatePicker
          picker="year"
          onChange={(year) => {
            setYear(year);
            setYearSelected(true);
          }}
        />
      </div>
    );
  };

  /**
   * TO DO: 
   *  - run format checkers on dates and times.
   *  - make upload file disabled when on create event request.
   */

  return (
    <div className={styles.fileDisplay}>
      {contextHolder}
      <Card style={cardStyle} title={titleComp()}>
        <Form form={form} layout="vertical" onFinish={onSubmit}>
          <Form.Item label="Assignment" name="name">
            <Input disabled={checkStatus} onChange={isEditing} />
          </Form.Item>
          <Form.Item
            label="Due Date (Must be in example format: Tuesday, February 6th)"
            name="dueDate"
          >
            <Input disabled={checkStatus} onChange={isEditing} />
          </Form.Item>
          <Form.Item
            label="Start Time (Must be in example format: 8:30 am)"
            name="startTime"
          >
            <Input disabled={checkStatus} onChange={isEditing} />
          </Form.Item>
          <Form.Item
            label="End Time (Must be in example format: 8:30 am)"
            name="endTime"
          >
            <Input disabled={checkStatus} onChange={isEditing} />
          </Form.Item>
          <Form.Item>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {beingEdited && (
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              )}
              {yearSelected && (
                <Button type="primary" onClick={uploadToCalendar}>
                  Create Event in Google Calendar
                </Button>
              )}
            </div>
          </Form.Item>
          <Pagination
            className={styles.pagination}
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
