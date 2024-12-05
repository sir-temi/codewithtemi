import Typography from "@mui/material/Typography";
import { Button, Card, CardContent } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import HomePagePic from "../assets/web_development.svg";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            {/* Hero Section */}
            <Row className="mt-5">
                <Col
                    className="mb-4 d-flex flex-column justify-content-center align-items-start"
                    sm={12}
                    md={6}
                    lg={6}
                >
                    <Typography variant="h3" component="h1" gutterBottom>
                        Unlock Your Potential with{" "}
                        <span className="highlight">Code with Temi</span>
                    </Typography>
                    <Typography variant="h5" component="p" gutterBottom>
                        Join our free training and mentorship program to
                        kickstart your tech career. No fees, no hidden
                        costs—just community-driven learning for aspiring
                        developers and data scientists.
                    </Typography>
                    <div className="d-flex justify-content-center justify-content-sm-start w-100">
                        <div>
                            <Button
                                variant="contained"
                                color="secondary"
                                className="my-4 text-sm-center"
                                size="large"
                                href="#mentorship"
                                component={Link} // Specify the component as a Link
                                to="/register"
                            >
                                Join Now for Free
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={6}>
                    <img
                        src={HomePagePic}
                        alt="Web Development"
                        style={{ width: "100%", objectFit: "contain" }}
                    />
                </Col>
            </Row>

            {/* Why Join Section */}
            <div className="mt-5 text-center">
                <Typography variant="h4" component="h2" gutterBottom>
                    Why Choose <span className="highlight">Code with Temi</span>
                    ?
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                    At Code with Temi, we believe in democratizing tech
                    education. Here’s what you get:
                </Typography>
                <ul className="list-unstyled">
                    <li>
                        <Typography variant="body1" gutterBottom>
                            ✅ Access to free resources, tutorials, and guides.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" gutterBottom>
                            ✅ Weekly mentorship sessions with experienced
                            developers.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" gutterBottom>
                            ✅ Real-world projects to build your portfolio.
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" gutterBottom>
                            ✅ A supportive community of learners and mentors.
                        </Typography>
                    </li>
                </ul>
                <Button
                    variant="contained"
                    color="secondary"
                    className="my-4"
                    size="large"
                    component={Link} // Specify the component as a Link
                    to="/mentorship"
                >
                    Learn More
                </Button>
            </div>

            {/* Mentee Testimonials Section */}
            <div className="mt-5 text-center" id="testimonials">
                <Typography variant="h4" component="h2" gutterBottom>
                    What Our Mentees Are Saying
                </Typography>
                <Row className="mt-4">
                    <Col sm={12} md={4}>
                        <Card
                            variant="outlined"
                            className="mb-4"
                            sx={{
                                backgroundColor: "transparent",
                                borderColor: "#ddd", // Adjust the border color
                                borderRadius: "8px",
                                boxShadow: "none",
                                color: "white",
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Funmi – Data Scientist
                                </Typography>
                                <Typography variant="body1">
                                    "Code with Temi transformed my career! I
                                    went from struggling to understand Python to
                                    building machine learning models with
                                    confidence. Temi's guidance and free
                                    resources are unmatched."
                                </Typography>
                            </CardContent>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card
                            variant="outlined"
                            className="mb-4"
                            sx={{
                                backgroundColor: "transparent",
                                borderColor: "#ddd", // Adjust the border color
                                borderRadius: "8px",
                                boxShadow: "none",
                                color: "white",
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Chukwudi – Web Developer
                                </Typography>
                                <Typography variant="body1">
                                    "As a beginner, I was intimidated by web
                                    development. But with Temi's mentorship, I
                                    now work as a full-stack developer, building
                                    projects for clients globally."
                                </Typography>
                            </CardContent>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card
                            variant="outlined"
                            className="mb-4"
                            sx={{
                                backgroundColor: "transparent",
                                borderColor: "#ddd", // Adjust the border color
                                borderRadius: "8px",
                                boxShadow: "none",
                                color: "white",
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Mary – Mobile App Developer
                                </Typography>
                                <Typography variant="body1">
                                    "I had no coding background, but Temi's free
                                    training helped me land my first internship
                                    as a mobile app developer. It's been a
                                    life-changing journey."
                                </Typography>
                            </CardContent>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col sm={12} md={4}>
                        <Card
                            variant="outlined"
                            className="mb-4"
                            sx={{
                                backgroundColor: "transparent",
                                borderColor: "#ddd", // Adjust the border color
                                borderRadius: "8px",
                                boxShadow: "none",
                                color: "white",
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Ahmed – Frontend Engineer
                                </Typography>
                                <Typography variant="body1">
                                    "The real-world projects I completed with
                                    Code with Temi gave me the confidence to ace
                                    my job interviews. I owe my career to this
                                    mentorship program."
                                </Typography>
                            </CardContent>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card
                            variant="outlined"
                            className="mb-4"
                            sx={{
                                backgroundColor: "transparent",
                                borderColor: "#ddd", // Adjust the border color
                                borderRadius: "8px",
                                boxShadow: "none",
                                color: "white",
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Grace – Data Analyst
                                </Typography>
                                <Typography variant="body1">
                                    "Code with Temi's community is so
                                    supportive! I learned data visualization
                                    techniques that landed me a role in a top
                                    firm."
                                </Typography>
                            </CardContent>
                        </Card>
                    </Col>
                    <Col sm={12} md={4}>
                        <Card
                            variant="outlined"
                            className="mb-4"
                            sx={{
                                backgroundColor: "transparent",
                                borderColor: "#ddd", // Adjust the border color
                                borderRadius: "8px",
                                boxShadow: "none",
                                color: "white",
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Ada – Developer
                                </Typography>
                                <Typography variant="body1">
                                    "Thanks to this great community led by Temi,
                                    always there to support you. Even after I
                                    landed a job, my first few months were hard
                                    by I was always supported"
                                </Typography>
                            </CardContent>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default HomePage;
