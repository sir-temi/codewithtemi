import { Outlet } from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from "react-bootstrap";


function BodyScreen({ maintenanceMode }: { maintenanceMode: boolean }) {
    return (
        <div>
            <Header maintenanceMode={maintenanceMode} />
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