/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import RegistrationImage from "../assets/registration_image.jpeg";
import Loader from "../components/Loader";
import { useSnackbar } from "notistack";

function RegistrationPage() {
    const { enqueueSnackbar } = useSnackbar();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        interest: "",
    });

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(
                "https://temilimited.com/api/register",
                formData
            );
            if (response.status === 200) {
                enqueueSnackbar(
                    "We have received your submission, please expect us to contact you for onboardng in a few days.",
                    { variant: "success" }
                );
            }
        } catch (error) {
            enqueueSnackbar("Something went wrong. Please try again.", {
                variant: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return loading ? (
        <Loader />
    ) : (
        <Container fluid className="registration-page py-5">
            <Row className="align-items-center">
                {/* Form Section */}
                <Col md={6}>
                    <Typography variant="h4" gutterBottom>
                        Join Now for Free
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Fill in your details below to start your journey with
                        CodeWithTemi.
                    </Typography>
                    <Form className="mt-4" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                placeholder="Enter your full name"
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                placeholder="Enter your email"
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formInterest">
                            <Form.Label>
                                What area are you interested in?
                            </Form.Label>
                            <Form.Control
                                as="select"
                                name="interest"
                                value={formData.interest}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    Select an option
                                </option>
                                <option>Web Development</option>
                                <option>Mobile App Development</option>
                                <option>Data Science</option>
                            </Form.Control>
                        </Form.Group>
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                            className="w-100"
                        >
                            Register Now
                        </Button>
                    </Form>
                </Col>

                {/* Image Section */}
                <Col md={6} className="d-none d-md-flex justify-content-center">
                    <img
                        src={RegistrationImage}
                        alt="Join us"
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default RegistrationPage;
