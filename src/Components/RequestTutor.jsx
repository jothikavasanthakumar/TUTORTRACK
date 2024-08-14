import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RequestTutor.css';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  FormHelperText,
  Grid,
  FormLabel
} from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SearchIcon from '@mui/icons-material/Search';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const subjects = ['Computer Science', 'Biology', 'Mathematics', 'Economics', 'English'];
const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad'];

const RequestTutor = () => {
  const [step, setStep] = useState(1);
  const [preferredSubject, setPreferredSubject] = useState('');
  const [preferredPlace, setPreferredPlace] = useState('');
  const [details, setDetails] = useState('');
  const [allowSharing, setAllowSharing] = useState(false);
  const [city, setCity] = useState('');
  const [locality, setLocality] = useState('');
  const [address, setAddress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [contactVia, setContactVia] = useState('');

  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 3) {
      handleSubmit();
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    if (step === 3) {
      const requestData = {
        preferredSubject,
        preferredPlace,
        details,
        allowSharing,
        city,
        locality,
        address,
        firstName,
        lastName,
        gender,
        yearOfBirth,
        contactNumber,
        email,
        contactVia
      };
  
      try {
        const response = await fetch('http://localhost:8080/requesttutor/addrequesttutor', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData),
        });
  
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error from server:', errorText);
          throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
        }
  
        alert('Request submitted successfully!');
        navigate('/payment');
      } catch (error) {
        console.error('Error submitting the request:', error);
        alert('Error submitting the request: ' + error.message);
      }
    }
  };  

  return (
    <div>
      <Navbar />
      <div className="request-tutor-management-container">
        <div className='image-container-1'></div>
        {step === 1 && (
          <Box className="form-container-1">
            <h1>Request a Tutor</h1>
            <p>Submit your learning requirements and find tutors in your locality</p>

            <FormControl fullWidth margin="normal" error={!preferredSubject}>
              <InputLabel id="subject-select-label">What do you want to learn</InputLabel>
              <Select
                labelId="subject-select-label"
                id="subject-select"
                value={preferredSubject}
                onChange={(e) => setPreferredSubject(e.target.value)}
              >
                {subjects.map((subject) => (
                  <MenuItem key={subject} value={subject}>{subject}</MenuItem>
                ))}
              </Select>
              {!preferredSubject && <FormHelperText>Please select a subject.</FormHelperText>}
            </FormControl>

            <FormControl component="fieldset" margin="normal" error={!preferredPlace}>
              <FormLabel component="legend">Tuition Place</FormLabel>
              <RadioGroup
                aria-labelledby="tuition-place-label"
                name="tuition-place"
                value={preferredPlace}
                onChange={(e) => setPreferredPlace(e.target.value)}
              >
                <FormControlLabel value="At tutor's place" control={<Radio />} label="At tutor's place" />
                <FormControlLabel value="At my place" control={<Radio />} label="At my place" />
                <FormControlLabel value="Online" control={<Radio />} label="Online" />
              </RadioGroup>
              {!preferredPlace && <FormHelperText>Please select a tutoring place.</FormHelperText>}
            </FormControl>

            <TextField
              fullWidth
              margin="normal"
              label="Tuition Details (optional)"
              multiline
              rows={4}
              variant="outlined"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Enter your requirement in brief"
            />

            <FormControlLabel
              control={<Checkbox checked={allowSharing} onChange={(e) => setAllowSharing(e.target.checked)} />}
              label="I allow TutorTracker to share my requirement details with other tutors."
            />

            <Box className="navigation-links-1">
              <Button
                sx={{ width: '500px', height: 56, fontSize: 20, backgroundColor: '#009688', color: 'white', '&:hover': { backgroundColor: '#00796b' } }}
                variant="contained"
                onClick={handleNext}
              >
                Next
              </Button>
            </Box>
          </Box>
        )}

        {step === 2 && (
          <Box className="form-container-1">
            <h1>Request a Tutor</h1>
            <p>Submit your learning requirements and find tutors in your locality</p>

            <FormControl fullWidth margin="normal">
              <InputLabel id="city-select-label">Select your city</InputLabel>
              <Select
                labelId="city-select-label"
                id="city-select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                startAdornment={<LocationCityIcon sx={{ marginRight: 1 }} />}
                displayEmpty
              >
                <MenuItem value="" disabled>Select your city</MenuItem>
                {cities.map((cityItem) => (
                  <MenuItem key={cityItem} value={cityItem}>{cityItem}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              fullWidth
              margin="normal"
              label="Search locality"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              InputProps={{ endAdornment: <SearchIcon /> }}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              multiline
              rows={4}
              placeholder="Enter your address"
            />

            <FormControlLabel
              control={<Checkbox checked={allowSharing} onChange={(e) => setAllowSharing(e.target.checked)} />}
              label="I allow TutorTracker to share my requirement details with other tutors."
            />

            <Box className="navigation-links">
            <Button
                sx={{ width: '500px', height: 56, fontSize: 20, backgroundColor: '#009688', color: 'white', '&:hover': { backgroundColor: '#00796b' } }}
                variant="contained"
                onClick={handleNext}
              >
                Next
              </Button>
              
              <br/><br/>
              <Button
                sx={{ width: '500px', height: 56, fontSize: 20, backgroundColor: 'white', color: 'teal', '&:hover': { backgroundColor: '#00796b',color:'white' } }}
                variant="contained"
                onClick={handlePrevious}
              >
                Previous
              </Button>
            </Box>
          </Box>
        )}

        {step === 3 && (
          <Box className="form-container-1">
            <h1>Request a Tutor</h1>
            <p>Submit your learning requirements and find tutors in your locality</p>

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

            <TextField
              fullWidth
              margin="normal"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />

            <TextField
              fullWidth
              margin="normal"
              label="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Year of Birth"
              value={yearOfBirth}
              onChange={(e) => setYearOfBirth(e.target.value)}
              type="number"
            />

            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="gender-radio-group"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel id="contact-via-label">Preferred Contact Method</InputLabel>
              <Select
                labelId="contact-via-label"
                id="contact-via-select"
                value={contactVia}
                onChange={(e) => setContactVia(e.target.value)}
              >
                <MenuItem value="Phone">Phone</MenuItem>
                <MenuItem value="Email">Email</MenuItem>
              </Select>
            </FormControl>
          <br/><br/>
            <Box className="navigation-links">
            <Button
                sx={{ width: '500px', height: 56, fontSize: 20, backgroundColor: '#009688', color: 'white', '&:hover': { backgroundColor: '#00796b' } }}
                variant="contained"
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <br/><br/>
              <Button
                sx={{ width: '500px', height: 56, fontSize: 20, backgroundColor: 'white', color: 'teal', '&:hover': { backgroundColor: '#00796b',color:"white" } }}
                variant="contained"
                onClick={handlePrevious}
              >
                Previous
              </Button>
            </Box>
          </Box>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RequestTutor;
