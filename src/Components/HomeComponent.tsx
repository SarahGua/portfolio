import { Col, Row } from "react-bootstrap"
import NavBar from "./NavBar"

const HomeComponent = () => {
    return (
        <>
            <NavBar />
            <Row className="mt-5">
                <Col>
                    <i className="bi bi-stars d-flex align-items-end justify-content-end h-100 m-0 fs-1 cl-white"></i>
                </Col>
                <Col className="col-6">
                    <div className="d-flex flex-column align-items-center">
                        <h1 className="font-7em">Hi. I'm Sarah.</h1>
                        <h1 >A full-stack web developer</h1>
                    </div>
                </Col>
                <Col>
                <i className="bi bi-stars d-flex align-items-start h-100 m-0 h-100 fs-1 cl-white"></i>
                </Col>        
            </Row>
        </>
    )
}

export default HomeComponent