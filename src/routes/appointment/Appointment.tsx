import React from "react";
import { InlineWidget } from "react-calendly";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="appointment">
      <InlineWidget url="https://calendly.com/mentalone/appointment" />
    </div>
  );
};

export default Appointment;