import { Container, Nav, Navbar } from "react-bootstrap"

const NavBar = () => {
    return (
        <>
        <Navbar>
            <Container className="d-flex justify-content-center">
                <Nav>
                    <Nav.Link href="#home" className="fs-3">Home</Nav.Link>
                    <Nav.Link href="#features" className="fs-3">About</Nav.Link>
                    <Nav.Link href="#pricing" className="fs-3">Projects</Nav.Link>
                    <Nav.Link href="#pricing" className="fs-3">Contacts</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar