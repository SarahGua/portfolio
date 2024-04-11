import { Col, Container, Row } from "react-bootstrap"

const ContactsComponent = () => {
    return (
        <Container className="d-flex flex-column align-items-center">
            <Row className="mt-8">
                <Col className="text-center">
                    <h1 className="m-0 font-7em">A QUESTION?</h1>
                    <h1 className="m-0 font-7em">A PROPOSAL?</h1>
                    <h1 className="m-0 font-7em">CONTACT ME</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        <p className="m-0 fs-3 me-5">Linkedin</p>
                        <p className="m-0 fs-3">Email</p>
                    </div>
                </Col>
            </Row>
        </ Container>
    )
}

export default ContactsComponent