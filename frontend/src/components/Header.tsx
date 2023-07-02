import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";


function Header() {
    return (
        <Navbar expand="lg" className="" bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    CodeWithTemi
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink
                            to="/about"
                            className="nav-link"
                        >
                            About Me
                        </NavLink>
                        <NavLink
                            to="/login"
                            className="nav-link"
                        >
                            Log In
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header