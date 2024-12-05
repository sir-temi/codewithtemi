import { Container, Row, Col } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import MentorshipImage from "../assets/mentorship_program.jpeg"; // Update with the correct image path
import { Link } from "react-router-dom";

function AboutMentorship() {
    return (
        <Container className="mt-5">
            {/* Header Section */}
            <Row className="align-items-center mb-5">
                <Col md={6}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        About the{" "}
                        <span className="highlight">Mentorship Program</span>
                    </Typography>
                    <Typography variant="body1" className="mt-3">
                        CodeWithTemi’s mentorship program is a free initiative
                        that has transformed over
                        <span className="highlight"> 1,000 lives</span>. Our
                        mentees have gone on to secure roles in top companies
                        across <span className="highlight">Nigeria</span>, the{" "}
                        <span className="highlight">UK</span>, the
                        <span className="highlight">USA</span>, and{" "}
                        <span className="highlight">Canada</span>. Whether
                        you're a beginner or seeking to enhance your tech
                        skills, this program is designed to set you on the path
                        to success.
                    </Typography>
                </Col>
                <Col md={6}>
                    <img
                        src={MentorshipImage}
                        alt="Mentorship Program"
                        style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "8px",
                            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                        }}
                    />
                </Col>
            </Row>

            {/* Why Choose Section */}
            <div className="my-5 d-flex justify-content-center">
                <div>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Why Choose{" "}
                        <span className="highlight">CodeWithTemi?</span>
                    </Typography>
                    <ul className="list-unstyled">
                        <li>
                            <Typography variant="body1" gutterBottom>
                                ✅ Mentorship tailored to your personal and
                                career goals.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                ✅ Real-world projects to build an impressive
                                portfolio.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                ✅ Free access to a network of industry
                                professionals.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                ✅ Proven track record with mentees thriving in
                                global tech hubs.
                            </Typography>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Program Structure Section */}
            <Row className="my-5">
                <Col md={6}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Program Structure
                    </Typography>
                    <ul className="list-unstyled">
                        <li>
                            <Typography variant="body1" gutterBottom>
                                📚 Weekly virtual sessions covering web
                                development, data science, mobile app
                                development, and more.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                🛠️ Access to real-world projects designed by
                                industry experts.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                🎯 One-on-one mentorship to tackle your unique
                                challenges.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                🌍 Lifelong access to a vibrant community of
                                learners and mentors.
                            </Typography>
                        </li>
                    </ul>
                </Col>
                <Col md={6}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Our Global Impact
                    </Typography>
                    <Typography variant="body1" className="mt-3">
                        From Lagos to London, New York to Toronto, our mentees
                        have excelled in tech roles at companies like{" "}
                        <span className="highlight">Google</span>,{" "}
                        <span className="highlight">Microsoft</span>,
                        <span className="highlight">Amazon</span>, and top
                        startups. With CodeWithTemi, you’re not just learning –
                        you’re building a global career.
                    </Typography>
                </Col>
            </Row>

            {/* Call to Action */}
            <Row className="text-center my-5">
                <Col>
                    <Typography variant="h5" gutterBottom>
                        Ready to Transform Your Career?
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        component={Link}
                        to="/register"
                    >
                        Join Now for Free
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMentorship;
