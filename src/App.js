import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import AdminDashboard from './Components/AdminDashboard';
import AboutUs from './Components/AboutUs';
import Layout from './Components/Layout'; // Import the Layout component
import BecomeTutor from './Components/BecomeTutor';
import CardInitial from './Components/CardInitial';
import ContactUs from './Components/ContactUs';
import HelpCenter from './Components/HelpCenter';
import CardComponent from './Components/CardComponent';
import Learner from './Components/Learner';
import Privacy from './Components/Privacy';
import Teacher from './Components/Teacher';
import Landing from './Components/Landing';
import AdminLogin from './Components/AdminLogin';
import TopCities from './Components/TopCities';
import CoursesPage from './Components/CoursesPage';
//import Homepage from './Components/Cources';
import TutorJoin from './Components/TutorJoin';
// import CourseChart from './Components/CourseChart';
// import StudentChart from './Components/StudentChart';
// import FeatureSection from './Components/FeatureSection';
// import FeatureSection from './Components/FeatureSection';
// import Subject from './Components/Subject';
// import Tutor from './Components/Tutor';
import Homepage from './Components/Homepage';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/'element={<Layout><Landing/><BecomeTutor/></Layout>}/>
          <Route path='/admindashboard'element={<Layout><AdminDashboard/></Layout>}/>
          <Route path='adminlog'element={<AdminLogin/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/signup'element={<Signup/>}/>
          <Route path='/aboutus' element={<Layout><AboutUs/></Layout>} />
          <Route path='/contact' element={<Layout><ContactUs/></Layout>}/>
          <Route path='/help'element={<Layout><HelpCenter/></Layout>}/>
          <Route path='/card' element={<Layout><CardInitial/></Layout>} /> 
          <Route path='/card'element={<Layout><CardComponent/></Layout>} />
          <Route path='/learner'element={<Layout><Learner/></Layout>} />
          <Route path='/privacy'element={<Layout><Privacy/></Layout>} />
          <Route path='/teacher'element={<Layout><Teacher/></Layout>} />
          <Route path='/topcities'element={<Layout><TopCities/></Layout>} />
          <Route path='/coursespage'element={<Layout><CoursesPage/></Layout>} />
          <Route path='/courses' element={<Layout><Homepage/></Layout>} />
          <Route path='/tutorjoin' element={<Layout><TutorJoin/></Layout>} />
       
        </Routes>
      </Router>
      
      
    </div>
  );
};

export default App;