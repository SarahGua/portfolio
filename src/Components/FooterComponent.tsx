import { Container, Nav, Navbar } from "react-bootstrap"

const FooterComponent = () => {
    return (
        <Navbar>
            <Container className="d-flex justify-content-center position-fixed bottom-0">
                <Nav>
                    <Nav.Link href="#home" className="fs-4">GitHub</Nav.Link>
                    <Nav.Link href="#features" className="fs-4">Linkedin</Nav.Link>
                    <Nav.Link href="#pricing" className="fs-4">Curriculum</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default FooterComponent