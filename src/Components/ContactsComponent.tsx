import { Col, Container, Row } from "react-bootstrap"

const ContactsComponent = () => {
    return (
        <Container className="d-flex flex-column align-items-center p-0">
            <Row className="mt-5">
                <Col className="text-center">
                    <h1 className="m-0 font-7em">A QUESTION?</h1>
                    <h1 className="m-0 font-7em">A PROPOSAL?</h1>
                    <h1 className="m-0 font-7em">CONTACT ME</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <i className ="bi bi-arrow-down fs-1"></i>
                </Col>
            </Row>
        </ Container>
    )
}

export default ContactsComponent