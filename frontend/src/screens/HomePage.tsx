import Typography from "@mui/material/Typography";
import { Col, Row } from "react-bootstrap";
import HomePagePic from "../assets/web_development.svg";

function HomePage() {
    return (
        <div>
            <Row className="mt-3">
                <Col
                    className="mb-3 d-flex align-items-center"
                    sm={12}
                    md={6}
                    lg={5}
                >
                    <Typography variant="h4" gutterBottom>
                        Transform yourself into the{" "}
                        <span className="highlight">
                            Web Development maestro
                        </span>{" "}
                        that companies are dying to recruit!
                    </Typography>
                </Col>
                <Col>
                    <img
                        src={HomePagePic}
                        alt="development"
                        style={{ objectFit: "scale-down" }}
                    />
                </Col>
            </Row>

            <div className="mt-5 text-center">
                <Typography variant="h4" gutterBottom>
                    Wondering why you
                    <span className="highlight"> should Code with Temi</span>?
                </Typography>

                <Typography variant="h3" gutterBottom>
                    Coming soon
                </Typography>
            </div>
        </div>
    );
}

export default HomePage;
