import { Container, Nav, Navbar } from "react-bootstrap"

const FooterComponent = () => {
    return (
        <Navbar>
            <Container className="d-flex justify-content-center">
                <Nav>
                    <Nav.Link href="https://github.com/SarahGua" className="fs-4">GitHub</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/sarah-guarneri-webdeveloper/" className="fs-4">Linkedin</Nav.Link>
                    <Nav.Link href="https://drive.google.com/file/d/1R84mZoz9wYdEW4ZpFiRS7PK_dXAlKXNN/view?usp=sharing" className="fs-4">Curriculum</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default FooterComponent