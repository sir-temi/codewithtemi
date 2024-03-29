import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

function Header({ maintenanceMode }: { maintenanceMode: boolean }) {
    return (
        <Navbar expand="lg" className="" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={Logo} alt="logo" height="60px" width="60px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {!maintenanceMode && (
                        <Nav className="ms-auto">
                            <NavLink to="/about" className="nav-link">
                                About Me
                            </NavLink>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
