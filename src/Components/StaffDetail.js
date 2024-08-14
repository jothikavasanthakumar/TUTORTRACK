import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { staffDetails } from "./StaffDetails";
import './StaffDetail.css'; // Ensure you have this CSS file for styling
// import Footer from "../Footer/Footer";
// import Navbar from "../Navbar/Navbar";

const getStarRating = (rating) => {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
};

const timeSlots = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
];

const StaffDetail = () => {
  const { id } = useParams();
  const staff = staffDetails.find(staff => staff.id === parseInt(id));
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  if (!staff) {
    return <div>Staff member not found.</div>;
  }

  return (
    <div>
      <Navbar/>
    <div className="staff-detail-container">
      <div className="staff-detail">
        <img src={staff.image} alt={staff.name} className="staff-detail-image" />
        <div className="staff-detail-info">
          <h1>{staff.name}</h1>
          <p><strong>Qualification:</strong> {staff.qualification}</p>
          <p><strong>Experience:</strong> {staff.experience}</p>
          <p><strong>Feedback:</strong> "{staff.feedback}"</p>
          <p><strong>Rating:</strong> {getStarRating(staff.starRating)}</p>

          <div className="date-slot-selector">
            <label htmlFor="date">Select a Date:</label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          <div className="time-slot-selector">
            <label htmlFor="time-slot">Select a Time Slot:</label>
            <select
              id="time-slot"
              value={selectedTimeSlot}
              onChange={(e) => setSelectedTimeSlot(e.target.value)}
            >
              <option value="" disabled>Select a time slot</option>
              {timeSlots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
          </div>

          <Link 
            to={selectedDate && selectedTimeSlot ? "/requestatutor" : "#"} 
            className={`confirm-selection-button ${!(selectedDate && selectedTimeSlot) ? "disabled" : ""}`}
          >
            Confirm Selection
          </Link>
        </div>
      </div>
    </div>
      <Footer/>
      </div>
  );
};

export default StaffDetail;
