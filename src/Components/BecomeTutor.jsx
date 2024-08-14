import React from 'react';
// import { useState } from 'react';
import './CSS/BecomeTutor.css'; // Import the CSS file for styling
// import tutor from '../Assets/tutor.jpg'; // Import the tutor image
// import { useTheme } from '@mui/material/styles';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Button from '@mui/material/Button'; 
import FeatureSection from './FeatureSection'; 
// import { Link } from 'react-router-dom';
// import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';

// Constants for menu item dimensions
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// // List of subjects and locations
// const subjects = [
//   'Computer Science',
//   'Biology',
//   'Mathematics',
//   'Economics',
//   'English',
// ];

// const locations = [
//   'Hyderabad',
//   'Bangalore',
//   'Chennai',
//   'Mumbai',
//   'Delhi',
// ];

// // Function to determine the styles for each menu item based on selection
// function getStyles(name, selectedItems, theme) {
//   return {
//     fontWeight:
//       selectedItems.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

 const BecomeTutor = () => {
//   const [selectedSubjects, setSelectedSubjects] = useState([]);
//   const [selectedLocations, setSelectedLocations] = useState([]);
//   const theme = useTheme();

//   // Handler function to update selected subjects
//   const handleSubjectChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setSelectedSubjects(
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   // Handler function to update selected locations
//   const handleLocationChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setSelectedLocations(
//       typeof value === 'string' ? value.split(',') : value,
//     );
//   };

//   // Handler function for the search button click
//   const handleSearch = () => {
//     // Handle search logic here, such as fetching filtered results based on the selections
//     console.log('Selected Subjects:', selectedSubjects);
//     console.log('Selected Locations:', selectedLocations);
//   };

  return (
    <div>
      {/* <Navbar/> */}
    <div className="become-tutor-container">
      <div className='hero-right'>
        {/* <Link to="/signup">
        <img src={tutor} alt="Become a Tutor" /></Link> */}
      </div>
       {/* <div className='hero-right-c'>
        Find and apply for jobs in your area
      </div>
      <br></br>
      <br></br> */}
     {/* <div className='controls-container'>
        <FormControl sx={{ m: 1, width: 500 }}>
          <InputLabel id="subject-select-label">Subject</InputLabel>
          <Select
            labelId="subject-select-label"
            id="subject-select"
            multiple
            value={selectedSubjects}
            onChange={handleSubjectChange}
            input={<OutlinedInput label="Subject" />}
            MenuProps={MenuProps}
          >
            {subjects.map((subject) => (
              <MenuItem
                key={subject}
                value={subject}
                style={getStyles(subject, selectedSubjects, theme)}
              >
                {subject}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}

        {/* <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="location-select-label">Location</InputLabel>
          <Select
            labelId="location-select-label"
            id="location-select"
            multiple
            value={selectedLocations}
            onChange={handleLocationChange}
            input={<OutlinedInput label="Location" />}
            MenuProps={MenuProps}
          >
            {locations.map((location) => (
              <MenuItem
                key={location}
                value={location}
                style={getStyles(location, selectedLocations, theme)}
              >
                {location}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          sx={{ m: 1, width: 150, height: 56 ,fontSize: 20}}
          variant="contained"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div> */}
      <br/><br/>
      <div className='hero-right-c'>
        Feature Section
      </div>
      <FeatureSection />
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default BecomeTutor;
