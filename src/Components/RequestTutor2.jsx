import React, { useState } from 'react';
import './RequestTutor2.css'; // Import the CSS file for styling
import { 
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormControlLabel,
  Checkbox,
  Link 
} from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SearchIcon from '@mui/icons-material/Search';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

// List of cities for dropdown
const cities = [
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Chennai',
  'Hyderabad',
];

const RequestTutor2 = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [locality, setLocality] = useState('');
  const [address, setAddress] = useState('');
  const [allowSharing, setAllowSharing] = useState(false);

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleLocalityChange = (event) => {
    setLocality(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleAllowSharingChange = (event) => {
    setAllowSharing(event.target.checked);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Selected City:', selectedCity);
    console.log('Locality:', locality);
    console.log('Address:', address);
    console.log('Allow Sharing:', allowSharing);
  };
  return (
    <div>
      <Navbar/>

    <Box className="request-tutor2-container">
      <div className="form-container">
        <div className="header-box">
          <h1>Request a Tutor</h1>
          <p>Submit your learning requirements and find tutors in your locality</p>
        </div>
        <div className="signup-link">
          <p>
            If you are a teacher and want to provide part-time tuition please{' '}
            <Link href="/signup">click here to sign up</Link>
          </p>
        </div>

        {/* City Selection */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="city-select-label"></InputLabel>
          <Select
            labelId="city-select-label"
            id="city-select"
            value={selectedCity}
            onChange={handleCityChange}
            startAdornment={<LocationCityIcon sx={{ marginRight: 1 }} />}
            displayEmpty
            inputProps={{ 'aria-label': 'Select your city' }}
          >
            <MenuItem style={{ color: 'grey' }} value="" disabled>
              Select your city
            </MenuItem>
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Locality Search */}
        <TextField
          fullWidth
          margin="normal"
          label="Search locality"
          value={locality}
          onChange={handleLocalityChange}
          InputProps={{
            endAdornment: <SearchIcon />,
          }}
        />

        {/* Address Note */}
        <Box className="address-note">
          <p>
            Note: We need your address to show matching tutors nearby. The address
            will not be visible to the tutors.
          </p>
        </Box>

        {/* Address Input */}
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          value={address}
          onChange={handleAddressChange}
          variant="outlined"
          multiline
          rows={4}
          placeholder="Enter your address"
        />
        <br/><br/>
        {/* Allow Sharing Checkbox */}
        <FormControlLabel
          control={<Checkbox checked={allowSharing} onChange={handleAllowSharingChange} />}
          label="I allow TutorTracker to share my requirement details with other tutors."
        />

        {/* Navigation Buttons */}
        <Box className="navigation-links">
          <Button
            sx={{
              width: '100%',
              height: 56,
              fontSize: 20,
              backgroundColor: '#009688',
              color: 'white',
              '&:hover': { backgroundColor: '#00796b' },
            }}
            variant="contained"
            component={Link}
            href="/requestatutor"
          >
            Previous
          </Button>
          <Button
            sx={{
              width: '100%',
              height: 56,
              fontSize: 20,
              backgroundColor: '#009688',
              color: 'white',
              '&:hover': { backgroundColor: '#00796b' },
            }}
            variant="contained"
            component={Link}
            href="/requestatutor3" // Update this URL as needed
            onClick={handleSubmit}
          >
            Next
          </Button>
        </Box>
      </div>
    </Box>
      <Footer/>
    </div>
  );
};

export default RequestTutor2;
