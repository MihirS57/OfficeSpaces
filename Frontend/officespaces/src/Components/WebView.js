import React, { useEffect, useState } from "react";
import axios from "axios";
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

const WebView = (props) => {
  const [attendance, setAttendance] = useState([]);

  const apiFetch = async () => {
    const employeeName = props.match.params.employeeName;
    const response = await axios.get(
      `http://127.0.0.1:8000/operations/get_user_attendance/${employeeName}`
    );
    const dummy = response.data;
    const dummy2 = [];
    for (let element in dummy) {
      dummy2.push({ text: "P" });
    }
    setAttendance(dummy2);
  };

  useEffect(() => {
    apiFetch();
  }, []);

  const onEventSelect = (event, inst) => {
    mobiscroll.toast({
      message: event.event.text,
    });
  };
  return (
    <mobiscroll.Eventcalendar
      theme="mobiscroll"
      themeVariant="dark"
      display="inline"
      calendarHeight={614}
      view={{
        calendar: {
          labels: true,
        },
      }}
      onEventSelect={onEventSelect}
      data={attendance}
    />
  );
};

export default WebView;
