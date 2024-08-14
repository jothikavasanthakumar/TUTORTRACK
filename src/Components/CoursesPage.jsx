import React, { useState, useEffect } from 'react';
import './CSS/CoursesPage.css'; // Import CSS for styling
import CourseCount from './CourseCount';

const CoursesPage = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [newCourse, setNewCourse] = useState({
    course_name: '',
    category: '',
    image: null,
    old_price: '',
    new_price: ''
  });
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]); // State for filtered courses
  const [sortCategory, setSortCategory] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [editingCourseId, setEditingCourseId] = useState(null);

  const handleAddClick = () => setIsAdding(!isAdding);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setNewCourse({
      ...newCourse,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (
      !newCourse.course_name ||
      !newCourse.category ||
      !newCourse.old_price ||
      !newCourse.new_price
    ) {
      alert('Please fill out all fields.');
      return;
    }

    let imageUrl = '';
    if (newCourse.image) {
      // Create an object URL for the image
      imageUrl = URL.createObjectURL(newCourse.image);
    }

    if (isUpdating) {
      // Update course
      const updatedCourses = courses.map(course =>
        course.course_id === editingCourseId
          ? { ...newCourse, course_id: editingCourseId, image: imageUrl || course.image }
          : course
      );
      setCourses(updatedCourses);
      setIsUpdating(false);
      setEditingCourseId(null);
    } else {
      // Add new course
      const updatedCourses = [
        ...courses,
        { ...newCourse, course_id: courses.length + 1, image: imageUrl }
      ];
      setCourses(updatedCourses);
    }

    // Reset form and hide dropdown
    setNewCourse({
      course_name: '',
      category: '',
      image: null,
      old_price: '',
      new_price: ''
    });
    setIsAdding(false);
  };

  const handleSort = (e) => {
    const category = e.target.value;
    setSortCategory(category);

    // Filter courses based on the selected category
    if (category === '') {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter(course => course.category === category));
    }
  };

  const handleCheckboxChange = (index) => {
    setSelectedCourses((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleRemove = () => {
    const updatedCourses = courses.filter((_, index) => !selectedCourses.includes(index));
    setCourses(updatedCourses);
    setSelectedCourses([]);
    setFilteredCourses(updatedCourses);
  };

  const handleUpdateClick = () => {
    if (selectedCourses.length === 1) {
      const courseToEdit = courses[selectedCourses[0]];
      setNewCourse({
        course_name: courseToEdit.course_name,
        category: courseToEdit.category,
        image: null, // Reset image for update; image needs to be re-uploaded
        old_price: courseToEdit.old_price,
        new_price: courseToEdit.new_price,
      });
      setEditingCourseId(courseToEdit.course_id);
      setIsUpdating(true);
      setIsAdding(true); // Show form
    } else {
      alert('Please select exactly one course to update.');
    }
  };

  useEffect(() => {
    // Initialize filteredCourses when courses or sortCategory changes
    if (sortCategory === '') {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter(course => course.category === sortCategory));
    }
  }, [courses, sortCategory]);

  // Calculate counts for each category
  const getCategoryCount = (category) => courses.filter(course => course.category === category).length;

  return (
    <div className="courses-page">
      <CourseCount
        mathematicsCount={getCategoryCount('Mathematics')}
        englishCount={getCategoryCount('English')}
        biologyCount={getCategoryCount('Biology')}
        economicsCount={getCategoryCount('Economics')}
        computerScienceCount={getCategoryCount('Computer Science')}
      />
      <br /><br />
      <button onClick={handleAddClick}>
        {isAdding ? 'Cancel' : (isUpdating ? 'Cancel Update' : 'Add New Course')}
      </button>
      <button onClick={handleUpdateClick} disabled={selectedCourses.length !== 1}>
        Update Course
      </button>
      <button onClick={handleRemove} disabled={selectedCourses.length === 0}>
        Remove Course
      </button>
      {isAdding && (
        <form onSubmit={handleSubmit} className="add-form">
          <input
            type="text"
            name="course_name"
            value={newCourse.course_name}
            onChange={handleChange}
            placeholder="Course Name"
            required
          />
          <select
            name="category"
            value={newCourse.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="English">English</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Economics">Economics</option>
            <option value="Biology">Biology</option>
          </select>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            placeholder="Upload Image"
          />
          <input
            type="number"
            name="old_price"
            value={newCourse.old_price}
            onChange={handleChange}
            placeholder="Old Price"
            required
          />
          <input
            type="number"
            name="new_price"
            value={newCourse.new_price}
            onChange={handleChange}
            placeholder="New Price"
            required
          />
          <button type="submit">{isUpdating ? 'Update Course' : 'Add Course'}</button>
        </form>
      )}
      <div className="sort-controls">
        <select
          value={sortCategory}
          onChange={handleSort}
          className="sort-dropdown"
        >
          <option value="">Filter by Category Name</option>
          <option value="English">English</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Economics">Economics</option>
          <option value="Biology">Biology</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Category</th>
            <th>Image</th>
            <th>Old Price</th>
            <th>New Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course) => (
            <tr key={course.course_id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedCourses.includes(courses.indexOf(course))}
                  onChange={() => handleCheckboxChange(courses.indexOf(course))}
                />
              </td>
              <td>{course.course_id}</td>
              <td>{course.course_name}</td>
              <td>{course.category}</td>
              <td>
                {course.image ? (
                  <img
                    src={course.image}
                    alt={course.course_name}
                    style={{ width: '100px', height: 'auto' }}
                  />
                ) : (
                  'No Image'
                )}
              </td>
              <td>{course.old_price}</td>
              <td>{course.new_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesPage;
