import { Container, Nav, Navbar } from "react-bootstrap"

const NavBar = () => {
    return (
        <>
        <Navbar>
            <Container className="d-flex justify-content-center">
                <Nav>
                    <Nav.Link href="/" className="fs-3">Home</Nav.Link>
                    <Nav.Link href="/projects" className="fs-3">Projects</Nav.Link>
                    <Nav.Link href="/contacts" className="fs-3">Contacts</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar