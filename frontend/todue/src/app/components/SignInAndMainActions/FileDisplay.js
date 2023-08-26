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
import styles from "../../styles/fileDisplay.module.css";
import axios from "axios";
import { message } from "antd";
const { Meta } = Card;

/**
 * FileDisplay Component - Displays the form for editing values and submitting new values.
 * @param {object} props.data - data from api that populates form.
 * @param props.updateData - function to update original data sent from FileInput Component.
 * @returns {JSX} renders form component from antd.
 */
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

  /**
   * Making sure the pagination matches with the correct data by subtracting one from the current page.
   * @param {number} page The current page on the pagination.
   */
  const handlePaginationChange = (page) => { setCounter(page - 1); };

  /**
   * Makes the "Save" button appear if the user editing the form values.
   */
  const isEditing = () => { setBeingEdited(true); };

  /**
   * Handles submitting the form values, checking format and updating props.data correctly with new values
   * @returns {object} updated props.data with user's inputted form values.
   */
  const onSubmit = async () => {
    const formData = await form.validateFields();

    // Check format of date and time.
    const dateFormatRegex = /^\d{4}-(0[1-9]|1[0-2])-([0-2][1-9]|3[01])$/;
    const timeFormatRegex = /^(1[0-2]|0?[1-9]):[0-5][0-9] [APap][Mm]$/;

    if (!dateFormatRegex.test(formData.dueDate)) {
      messageAPI.error(
        'Invalid due date format. Please use "Tuesday, February 6th" format.'
      );
      return;
    }

    if (!timeFormatRegex.test(formData.startTime)) {
      messageAPI.error(
        'Invalid start time format. Please use "8:30 am" or "8:30 pm" format.'
      );
      return;
    }

    if (!timeFormatRegex.test(formData.endTime)) {
      messageAPI.error(
        'Invalid end time format. Please use "8:30 am" or "8:30 pm" format.'
      );
      return;
    }

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
  };

  /**
   * Handles Upload to api to Create Events from user's form values.
   */
  const uploadToCalendar = async () => {
    setBeingEdited(false);
    setCheckStatus(true);

    let nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

    messageAPI.open({
      type: "loading",
      content: `Adding Events to ${nameCapitalized}'s google calendar!`,
      key: "loadingKey",
    })

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/createEvents",
        { course_data: props.data, year: year },
        {
          headers: {
            "Authorization": `Bearer ${props.accessToken}`,
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

  /**
   * holds jsx elements for the card title and data picker
   * @returns {JSXElement} formatted title and date picker.
   */
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

  return (
    <div className={styles.fileDisplay}>
      {contextHolder}
      <Card style={cardStyle} title={titleComp()}>
        <Form form={form} layout="vertical" onFinish={onSubmit}>
          <Form.Item label="Assignment" name="name">
            <Input disabled={checkStatus} onChange={isEditing} />
          </Form.Item>
          <Form.Item
            label="Due Date (Must be in example format: year-month-day)"
            name="dueDate"
          >
            <Input disabled={checkStatus} onChange={isEditing} />
          </Form.Item>
          <Form.Item
            label="Start Time (Must be in example format: 08:30AM)"
            name="startTime"
          >
            <Input disabled={checkStatus} onChange={isEditing} />
          </Form.Item>
          <Form.Item
            label="End Time (Must be in example format: 08:30AM)"
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
