import React, { useState } from 'react';
import './CSS/TutorJoin.css';

const TutorJoin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    Qualification: '',
    subject: '',
    experience: '',
    location: '',
    bio: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.qualification) formErrors.qualification = "Qualification is required";
    if (!formData.subject) formErrors.subject = "Subject is required";
    if (!formData.experience) formErrors.experience = "Experience is required";
    if (!formData.location) formErrors.location = "Location is required";
    if (!formData.bio) formErrors.bio = "Bio is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
      // You can send formData to your server here
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="cont">
    <div className="tutor-join-container">
      <h1>Join as a Tutor</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="text" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Qualification</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            value={formData.phone} 
            onChange={handleChange} 
          />
          {errors.phone && <span className="error">{errors.course}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="experience">Years of Experience</label>
          <input 
            type="number" 
            id="experience" 
            name="experience" 
            value={formData.experience} 
            onChange={handleChange} 
          />
          {errors.experience && <span className="error">{errors.experience}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input 
            type="text" 
            id="location" 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
          />
          {errors.location && <span className="error">{errors.location}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="bio">Short Bio</label>
          <textarea 
            id="bio" 
            name="bio" 
            value={formData.bio} 
            onChange={handleChange} 
          ></textarea>
          {errors.bio && <span className="error">{errors.bio}</span>}
        </div>

        <button type="submit" className="submit-button"><center>Join Now</center></button>
      </form>
    </div>
    </div>
  );
};

export default TutorJoin;
