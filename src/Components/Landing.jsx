import React from 'react';
import './CSS/Landing.css'; // Import the CSS file
// import { Button } from '@mui/material'; // Import Material UI Button
// import { Link } from 'react-router-dom';
// import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';

const AboutUs = () => {
  return (
    <div>
      {/* <Navbar/> */}
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-heading">TUTOR TRACK</h1>
        {/* <p className="about-text">
          At TutorTrack, we believe that education is the key to unlocking a world of possibilities. We're passionate about connecting learners with exceptional educators through our cutting-edge remote tutor scheduling platform. Whether you're a student seeking personalized guidance or a tutor ready to make a difference, TutorTrack is here to bridge the gap and transform your educational journey.
        </p>

        <h2 className="mission-heading">Our Mission</h2>
        <p className="mission-text">
          Our mission is simple: to make high-quality education accessible and convenient for everyone, everywhere. We strive to provide a seamless and intuitive experience for students and tutors alike, ensuring that every learning session is tailored to individual needs and goals.
        </p> */}
        <p className="join-community">
          Enhance your skills, achieve academic excellence, or share your expertise with eager students, TutorTrack is your gateway to a brighter, more connected future.
        </p>

        <p className="discover-future">
          Discover the future of learning with TutorTrack – where education meets innovation.
        </p>
        {/* <div className="land-cta-buttons">
          <Link to='/'><Button variant="contained" color="primary" href="/requesttutor">
            Request a Tutor
          </Button></Link>
          <Link to='/'><Button variant="contained" color="primary" href="/becometutor">
            Become a Tutor
          </Button>
          </Link>
        </div> */}

        {/* <p className="join-community">
          Enhance your skills, achieve academic excellence, or share your expertise with eager students, TutorTrack is your gateway to a brighter, more connected future.
        </p>

        <p className="discover-future">
          Discover the future of learning with TutorTrack – where education meets innovation.
        </p> */}
      </div>
    </div>
      {/* <Footer/> */}
      </div>
  );
};

export default AboutUs;
