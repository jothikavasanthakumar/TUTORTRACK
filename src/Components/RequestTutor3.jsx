import React, { useState } from 'react';
import './RequestTutor3.css'; // Import the CSS file for styling
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  Link,
} from '@mui/material';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const RequestTutor3 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactMethod, setContactMethod] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Gender:', gender);
    console.log('Year of Birth:', yearOfBirth);
    console.log('Contact Number:', contactNumber);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Contact Method:', contactMethod);
  };

  return (
    <div className="page-container">
      <Navbar />
      <Box className="request-tutor3-container">
        <Box className="form-box">
          <h1>Request a Tutor</h1>
          <p>Submit your learning requirements and find tutors in your locality</p>
          <div className="signup-link">
            <p>
              If you are a teacher and want to provide part-time tuition please{' '}
              <Link href="/signup">click here to sign up</Link>
            </p>
          </div>

          {/* Personal Information */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
          </Grid>

          {/* Student Gender */}
          <FormControl component="fieldset" sx={{ width: '100%', marginTop: 2 }}>
            <FormLabel component="legend">Student Gender</FormLabel>
            <RadioGroup
              row
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>

          {/* Year of Birth and Contact Number */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Year of Birth"
                value={yearOfBirth}
                onChange={(e) => setYearOfBirth(e.target.value)}
                type="number"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                type="tel"
              />
            </Grid>
          </Grid>

          {/* Email and Password */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Set Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </Grid>
          </Grid>

          {/* Tutors Can Contact Via */}
          <FormControl component="fieldset" sx={{ width: '100%', marginTop: 2 }}>
            <FormLabel component="legend">Tutors can contact via</FormLabel>
            <RadioGroup
              row
              value={contactMethod}
              onChange={(e) => setContactMethod(e.target.value)}
            >
              <FormControlLabel
                value="email"
                control={<Radio />}
                label="Email"
              />
              <FormControlLabel
                value="mobile"
                control={<Radio />}
                label="Mobile"
              />
              <FormControlLabel
                value="both"
                control={<Radio />}
                label="Both"
              />
            </RadioGroup>
          </FormControl>

          {/* Contact Privacy Note */}
          <Box className="contact-note">
            <p>
              Note: Your contact details will only be shared with interested
              TutorTracker members who match your profile and learning
              requirements. We prioritize your privacy and do not share your
              information with any third party outside TutorTracker.
            </p>
          </Box>

          {/* Navigation Buttons */}
          <Box className="navigation-links">
            <Button
              sx={{
                width: '48%',
                height: 56,
                fontSize: 20,
                backgroundColor: '#009688',
                color: 'white',
                '&:hover': { backgroundColor: '#00796b' },
              }}
              variant="contained"
              component={Link}
              href="/requestatutor2"
            >
              Previous
            </Button>
            <Button
              sx={{
                width: '48%',
                height: 56,
                fontSize: 20,
                backgroundColor: '#009688',
                color: 'white',
                '&:hover': { backgroundColor: '#00796b' },
              }}
              variant="contained"
              onClick={handleSubmit}
              href="/home"
            >
              Submit
            </Button>
          </Box>

          <div className="login-link">
            <p>
              If you are an existing student <Link href="/login2">Login Here</Link>
            </p>
          </div>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default RequestTutor3;
