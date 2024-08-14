import React, { useState, useEffect } from 'react';
import './CSS/StaffPage.css'; // Import CSS for styling
import StaffCount from './StaffCount';

const StaffPage = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false); // State to track if updating
  const [newStaff, setNewStaff] = useState({
    firstName: '',
    lastName: '',
    qualification: '',
    email: '',
    contactnumber: '',
    gender: '',
    password: '',
    subject: '', // Added subject field
    image: '' // Added image field
  });
  const [staff, setStaff] = useState([]);
  const [filteredStaff, setFilteredStaff] = useState([]); // State for filtered staff
  const [sortCategory, setSortCategory] = useState('');
  const [selectedStaff, setSelectedStaff] = useState([]);
  const [nextId, setNextId] = useState(1); // Counter for auto-increment
  const [editingStaffId, setEditingStaffId] = useState(null); // ID of staff to update

  // Initialize nextId based on existing staff data
  useEffect(() => {
    if (staff.length > 0) {
      setNextId(Math.max(...staff.map(member => member.staff_id)) + 1);
    }
    // Update filteredStaff when staff or sortCategory changes
    filterStaff();
  }, [staff, sortCategory]);

  const handleAddClick = () => setIsAdding(!isAdding);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      // Handle file upload
      setNewStaff({ ...newStaff, [name]: URL.createObjectURL(files[0]) });
    } else {
      setNewStaff({ ...newStaff, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (
      !newStaff.firstName ||
      !newStaff.lastName ||
      !newStaff.email ||
      !newStaff.contactnumber ||
      !newStaff.gender ||
      !newStaff.qualification ||
      !newStaff.password ||
      !newStaff.subject ||
      !newStaff.image // Added image validation
    ) {
      alert('Please fill out all fields.');
      return;
    }

    if (isUpdating) {
      // Update staff
      const updatedStaffList = staff.map(member =>
        member.staff_id === editingStaffId
          ? { ...newStaff, staff_id: editingStaffId }
          : member
      );
      setStaff(updatedStaffList);
      setIsUpdating(false);
      setEditingStaffId(null);
    } else {
      // Add new staff
      const updatedStaff = [
        ...staff,
        { ...newStaff, staff_id: nextId },
      ];
      setStaff(updatedStaff);
      setNextId(nextId + 1);
    }

    // Reset form and hide form
    setNewStaff({
      firstName: '',
      lastName: '',
      qualification: '',
      email: '',
      contactnumber: '',
      gender: '',
      password: '',
      subject: '', // Reset subject
      image: '' // Reset image
    });
    setIsAdding(false);
  };

  const handleSort = (e) => {
    const category = e.target.value;
    setSortCategory(category);
  };

  const filterStaff = () => {
    if (sortCategory === '') {
      setFilteredStaff(staff);
    } else {
      setFilteredStaff(staff.filter(member => member.subject === sortCategory));
    }
  };

  const handleCheckboxChange = (index) => {
    setSelectedStaff((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleRemove = () => {
    const updatedStaff = staff.filter((_, index) => !selectedStaff.includes(index));
    setStaff(updatedStaff);
    setSelectedStaff([]);
  };

  const handleUpdateClick = () => {
    if (selectedStaff.length === 1) {
      const staffToEdit = staff[selectedStaff[0]];
      setNewStaff({
        firstName: staffToEdit.firstName,
        lastName: staffToEdit.lastName,
        qualification: staffToEdit.qualification,
        email: staffToEdit.email,
        contactnumber: staffToEdit.contactnumber,
        gender: staffToEdit.gender,
        password: staffToEdit.password,
        subject: staffToEdit.subject,
        image: staffToEdit.image // Set image for editing
      });
      setEditingStaffId(staffToEdit.staff_id);
      setIsUpdating(true);
      setIsAdding(true); // Show form
    } else {
      alert('Please select exactly one staff member to update.');
    }
  };

  // Calculate counts
  const totalStaffCount = staff.length;
  const maleStaffCount = staff.filter(member => member.gender === 'Male').length;
  const femaleStaffCount = staff.filter(member => member.gender === 'Female').length;

  return (
    <div className="staff-page">
      <StaffCount
        totalCount={totalStaffCount}
        maleCount={maleStaffCount}
        femaleCount={femaleStaffCount}
      />
      <br/><br/>
      <button onClick={handleAddClick}>
        {isAdding ? 'Cancel' : (isUpdating ? 'Cancel Update' : 'Add New Staff')}
      </button>
      <button onClick={handleUpdateClick} disabled={selectedStaff.length !== 1}>
        Update Staff
      </button>
      <button onClick={handleRemove} disabled={selectedStaff.length === 0}>
        Remove Staff
      </button>
      {isAdding && (
        <form onSubmit={handleSubmit} className="add-form">
          <input
            type="text"
            name="firstName"
            value={newStaff.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            value={newStaff.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <input
            type="text"
            name="qualification"
            value={newStaff.qualification}
            onChange={handleChange}
            placeholder="Qualification"
            required
          />
          <input
            type="email"
            name="email"
            value={newStaff.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="contactnumber"
            value={newStaff.contactnumber}
            onChange={handleChange}
            placeholder="Contact Number"
            required
          />
          <select
            name="gender"
            value={newStaff.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="password"
            name="password"
            value={newStaff.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <select
            name="subject"
            value={newStaff.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select Subject</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Computer Science">Computer Science</option>
            <option value="English">English</option>
            <option value="Economics">Economics</option>
            <option value="Biology">Biology</option>
          </select>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            required
          />
          {newStaff.image && <img src={newStaff.image} alt="Staff" style={{ width: '100px', height: '100px' }} />}
          <button type="submit">{isUpdating ? 'Update Staff' : 'Add Staff'}</button>
        </form>
      )}
      <div className="sort-controls">
        <select
          value={sortCategory}
          onChange={handleSort}
          className="sort-dropdown"
        >
          <option value="">Sort by Subject</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Computer Science">Computer Science</option>
          <option value="English">English</option>
          <option value="Economics">Economics</option>
          <option value="Biology">Biology</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Staff ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Qualification</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Gender</th>
            <th>Password</th>
            <th>Subject</th> {/* Added Subject column */}
            <th>Image</th> {/* Added Image column */}
          </tr>
        </thead>
        <tbody>
          {filteredStaff.map((member, index) => (
            <tr key={member.staff_id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedStaff.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <td>{member.staff_id}</td>
              <td>{member.firstName}</td>
              <td>{member.lastName}</td>
              <td>{member.qualification}</td>
              <td>{member.email}</td>
              <td>{member.contactnumber}</td>
              <td>{member.gender}</td>
              <td>{member.password}</td>
              <td>{member.subject}</td> {/* Display Subject */}
              <td>
                {member.image && <img src={member.image} alt="Staff" style={{ width: '100px', height: '100px' }} />}
              </td> {/* Display Image */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffPage;
