import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";

function Footer() {
    return (
        <footer className="footer py-4 bg-dark text-white text-center">
            <Container>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Code with Temi. All Rights
                    Reserved.
                </Typography>
            </Container>
        </footer>
    );
}

export default Footer;
