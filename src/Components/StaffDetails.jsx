// StaffDetails.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './StaffDetails.css';
import s1 from "../Assets/staff-1.jpg";
import s2 from "../Assets/staff-2.jpg";
import s3 from "../Assets/staff-3.jpg";
import s4 from "../Assets/staff-4.jpg";
import s5 from "../Assets/staff-5.jpg";
import s6 from "../Assets/staff-6.jpg";
import s7 from "../Assets/staff-7.jpg";
import s8 from "../Assets/staff-8.jpg";
import s9 from "../Assets/staff-9.jpg";
import s10 from "../Assets/staff-10.jpg";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export const staffDetails = [
  { id: 1, name: "Dr. Emily Johnson", qualification: "PhD in Computer Science", experience: "10 years in Python development and teaching", feedback: "Dr. Johnson’s course was incredibly thorough and engaging. She made complex topics easy to understand.", starRating: 5, image: s1, category: "computerscience" },
  { id: 2, name: "Mr. Liam Thompson", qualification: "MSc in Web Development", experience: "8 years in web development and 5 years teaching", feedback: "Mr. Thompson provided practical insights and real-world examples. The course was both informative and practical.", starRating: 4, image: s2, category: "computerscience" },
  { id: 3, name: "Ms. Sophia Lee", qualification: "M.A in English", experience: "7 years as a trainer and instructor", feedback: "Ms. Lee’s course was perfect for beginners. Her clear explanations and hands-on approach made learning grammar enjoyable.", starRating: 5, image: s3, category: "english" },
  { id: 4, name: "Dr. Michael Brown", qualification: "M.phil in English", experience: "12 years in training and teaching", feedback: "Dr. Brown’s deep knowledge of grammar and his engaging teaching style made this a top-notch course.", starRating: 5, image: s4, category: "english" },
  { id: 5, name: "Ms. Olivia Martinez", qualification: "MSc in Economics", experience: "9 years of experience with banking and teaching", feedback: "Ms. Martinez’s expertise and the course’s practical focus were invaluable for learning economics.", starRating: 4, image: s5, category: "economics" },
  { id: 6, name: "Mr. Daniel Wilson", qualification: "M.Phil in Economics", experience: "6 years maintaining accounts and 4 years teaching", feedback: "Mr. Wilson provided detailed explanations and real-life scenarios, which greatly enhanced my understanding of Accounts.", starRating: 5, image: s6, category: "economics" },
  { id: 7, name: "Dr. Jessica Taylor", qualification: "PhD in Mathematics", experience: "11 years in research and teaching", feedback: "Dr. Taylor’s course was comprehensive and practical. The real-world examples were especially useful.", starRating: 5, image: s7, category: "mathematics" },
  { id: 8, name: "Mr. Andrew Scott", qualification: "MSc in Mathematics", experience: "8 years in teaching and instructor", feedback: "Mr. Scott’s hands-on approach were fantastic for learning Algebra.", starRating: 4, image: s8, category: "mathematics" },
  { id: 9, name: "Dr. Laur Green", qualification: "PhD in Human Physiology", experience: "15 years in physiology research and teaching", feedback: "Dr. Green’s expertise and clear teaching made complex physiological concepts accessible and interesting.", starRating: 5, image: s9, category: "biology" },
  { id: 10, name: "Ms. Ava White", qualification: "MSc in Genetics", experience: "10 years in genetics research and teaching", feedback: "Ms. White’s course was insightful and well-structured. Her passion for the subject was evident throughout the course.", starRating: 4, image: s10, category: "biology" },
];

const getStarRating = (rating) => {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
};

const StaffDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'computerscience', 'mathematics', 'english', 'economics', 'biology'];

  const filteredStaff = selectedCategory === 'All'
    ? staffDetails
    : staffDetails.filter(staff => staff.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div>
      <Navbar/>
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${selectedCategory.toLowerCase() === category.toLowerCase() ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="staff-container">
        {filteredStaff.map(staff => (
          <div key={staff.id} className="staff-card">
            <Link to={`/staff/${staff.id}`}>
              <img src={staff.image} alt={staff.name} className="staff-image" />
            </Link>
            <div className="staff-info">
              <h2 className="staff-name">{staff.name}</h2>
              <p className="staff-qualification">{staff.qualification}</p>
              <p className="staff-experience">{staff.experience}</p>
              <p className="staff-feedback">"{staff.feedback}"</p>
              <p className="staff-rating">{getStarRating(staff.starRating)}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default StaffDetails;
