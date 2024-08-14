import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const courses = [
    { id: 1, name: 'Advanced Java', description: "This course provides a comprehensive introduction to Java programming...", image: 'https://i.pinimg.com/564x/ac/12/11/ac12119eefee51e85abbd845c7237ea5.jpg' },
    { id: 2, name: 'Python', description: "This course offers a comprehensive introduction to Python programming...", image: 'https://klaymatrix.com/wp-content/uploads/2021/07/Python-Course-Thumbnail.png' },
    { id: 3, name: 'AIML', description: "This course provides an in-depth introduction to Artificial Intelligence and Machine Learning...", image: 'https://skillfloor.com/uploads/thumbnails/course_thumbnails/optimized/course_thumbnail_default-new_21719306206.jpg' },
    { id: 4, name: 'Data Structures and Algorithm', description: "This course offers a comprehensive introduction to data structures and algorithms...", image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/198/Mobile/Content/DSA_1720779645.png' },
    { id: 5, name: 'Embedded Systems', description: "This course provides a thorough understanding of embedded systems...", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0IsOK49JorwNpXXt2g_2c-SuSF89vvCD5eQ&s' },
    { id: 6, name: 'Operating Systems', description: "This course provides a comprehensive understanding of operating systems...", image: 'https://i.pinimg.com/564x/0f/fa/61/0ffa619f56ff250ecbbe70d551d06ff0.jpg' },
    { id: 7, name: 'Web Development Bootcamp', description: "An intensive course covering front-end and back-end web development, including HTML, CSS, JavaScript, and Node.js. Build full-stack applications and gain practical experience with real-world projects.", image: 'https://www.filepicker.io/api/file/FSIjaoI2QtKWZL65cogd' },
    { id: 8, name: 'React Development', description: "Learn to build modern, interactive user interfaces using React. This course covers component-based architecture, state management with Redux, and building single-page applications (SPAs).", image: 'https://www.etatvasoft.com/blog/wp-content/uploads/2020/06/reactjs-for-web-development-why-where-to-use.jpg' },
    { id: 9, name: 'Machine Learning with Python', description: "Dive into machine learning using Python. This course covers supervised and unsupervised learning, neural networks, and real-world applications of machine learning algorithms.", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkF0_CcXpJcMLeAcVxaJk4Sqsizv5kq6cx4Q&s' },
    { id: 10, name: 'Cloud Computing Fundamentals', description: "Understand the basics of cloud computing, including cloud service models (IaaS, PaaS, SaaS), deployment models, and how to leverage cloud platforms like AWS, Azure, and Google Cloud.", image: 'https://media.licdn.com/dms/image/C4D12AQHVUpOl8sg5xw/article-cover_image-shrink_600_2000/0/1579874988890?e=2147483647&v=beta&t=G3kTrpeG465okc8kHPhg6qIa8gtM-UK1JLmjYg_xfnM' },
    { id: 11, name: 'Cybersecurity Basics', description: "Explore the fundamentals of cybersecurity, including threat modeling, network security, encryption, and best practices for protecting systems and data from cyber threats.", image: 'https://cdn.educba.com/academy/wp-content/uploads/2015/10/Basics-of-Cybersecurity.jpg' },
    { id: 12, name: 'Database Management Systems', description: "Learn the principles of database management, including relational database design, SQL queries, and database administration. Gain practical experience with popular DBMS like MySQL and PostgreSQL.", image: 'https://media.licdn.com/dms/image/D4D12AQHD3T5P20F5Eg/article-cover_image-shrink_600_2000/0/1676173868445?e=2147483647&v=beta&t=9aV93eSlfkux3I7ROMSV5zFD0ea_rueim3rpHcNDrLY' },
    { id: 13, name: 'DevOps Essentials', description: "Understand the principles of DevOps and how to integrate development and operations. This course covers continuous integration, continuous deployment, and automation tools like Jenkins and Docker.", image: 'https://www.construx.com/wp-content/uploads/2020/06/devops-essentials.jpg' },
    { id: 14, name: 'Artificial Intelligence with TensorFlow', description: "Explore AI concepts and applications using TensorFlow. Learn to build and deploy machine learning models for tasks like image recognition, natural language processing, and more.", image: 'https://media.licdn.com/dms/image/D4D12AQHqOVqI3XCbLQ/article-cover_image-shrink_720_1280/0/1677829179317?e=2147483647&v=beta&t=DdqeVpw5U4xEis9H9D5rt162rebIYuHDHnpcxtH7IRk' },
    { id: 15, name: 'Introduction to Blockchain', description: "Discover the technology behind blockchain and cryptocurrencies. Learn about decentralized systems, smart contracts, and how blockchain is transforming industries beyond finance.", image: 'https://www.digitalvidya.com/blog/wp-content/uploads/2018/03/Introduction-to-Blockchain.jpg' },
    { id: 16, name: 'Advanced SQL Techniques', description: "Master advanced SQL techniques including complex queries, indexing, performance optimization, and database design. Ideal for those looking to deepen their SQL knowledge and skills.", image: 'https://cdn.sanity.io/images/oaglaatp/production/feb9c80a48a201140dcfa20559b73ab1b803e59b-1200x800.png?w=1200&h=800&auto=format' }
];

const PageContainer = styled(Container)(({ theme }) => ({
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
}));

const CourseCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[5],
    },
}));

const CardImage = styled(CardMedia)({
    paddingTop: '56.25%', // 16:9 aspect ratio
});

const CardContentStyled = styled(CardContent)(({ theme }) => ({
    flexGrow: 1,
}));

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#2b7a0b',
    color: 'white',
    '&:hover': {
        backgroundColor: '#1e5a07',
    },
}));

const Homepage = () => {
    return (
        <PageContainer maxWidth="lg">
            <Typography variant="h2" gutterBottom align="center">Available Courses</Typography>
            <Grid container spacing={4}>
                {courses.map((course) => (
                    <Grid item xs={12} sm={6} md={4} key={course.id}>
                        <CourseCard>
                            <CardImage
                                image={course.image}
                                title={course.name}
                            />
                            <CardContentStyled>
                                <Typography variant="h6" gutterBottom>{course.name}</Typography>
                                <Typography variant="body2" color="textSecondary">{course.description}</Typography>
                            </CardContentStyled>
                            <CardActions>
                                <StyledButton component={Link} to={`/course/${course.id}`} variant="contained" fullWidth>
                                    View Course
                                </StyledButton>
                            </CardActions>
                        </CourseCard>
                    </Grid>
                ))}
            </Grid>
        </PageContainer>
    );
};

export default Homepage;
