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
  const [form] = Form.useForm(); // Get the form instance
  const [messageAPI, contextHolder] = message.useMessage();

  useEffect(() => {
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

    // Send new props.data
    // try {
    //   const response = await axios.post("http://127.0.0.1:5000/code", {course_data: props.data, year: year}, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })

    //   const repStatus = await response.data
    //   console.log(repStatus)
    // } catch (error) {
    //   console.error(`ERROR: ${error}`)
    // }

    console.log("submitted", updatedData);
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

  return (
    <div className={styles.fileDisplay}>
      {contextHolder}
      <Card style={cardStyle} title={titleComp()}>
        <Form form={form} layout="vertical" onFinish={onSubmit}>
          <Form.Item label="Assignment" name="name">
            <Input onChange={isEditing} />
          </Form.Item>
          <Form.Item label="Due Date" name="dueDate">
            <Input onChange={isEditing} />
          </Form.Item>
          <Form.Item label="Start Time" name="startTime">
            <Input onChange={isEditing} />
          </Form.Item>
          <Form.Item label="End Time" name="endTime">
            <Input onChange={isEditing} />
          </Form.Item>
          <Form.Item>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {beingEdited && (
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              )}
              {yearSelected && (
                <Button type="primary">Create Event in Google Calendar</Button>
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
