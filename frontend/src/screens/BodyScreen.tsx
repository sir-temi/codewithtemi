import { Outlet } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from "react-bootstrap";


function BodyScreen() {
    return (
        <div>
            <Header />
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </div>
    )
}

export default BodyScreen