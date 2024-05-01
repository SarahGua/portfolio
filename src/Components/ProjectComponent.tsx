import { Card, Carousel, Col, Container, Row } from "react-bootstrap"
import eventConnect from '../img/EventConnect.png'
import netflix from '../img/netflix.png'

const ProjectComponents = () => {
    return (
        <Container className="d-flex flex-column align-items-center justify-content-evenly">
            <Carousel>
                <Carousel.Item className="text-center">
                        <Card className="border-0 bg-trans">
                            <Card.Text className="fs-1 m-0">
                                EventConnect: a web app for Exhibitions
                            </Card.Text>
                            <a href="https://github.com/SarahGua/CAPSTONE---FRONTEND">
                            <Card.Img variant="top" src={eventConnect} alt="img"/>
                            </a>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                </Carousel.Item>
                <Carousel.Item className="text-center">
                        <Card className="border-0 bg-trans">
                            <Card.Text className="fs-1 m-0">
                                Netflix clone
                            </Card.Text>
                            <a href="https://github.com/SarahGua/PROGETTO-SETTIMANALE-U3W1L5---NETFLIX-HOME-CLONE">
                            <Card.Img variant="top" src={netflix} alt="img"/>
                            </a>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                </Carousel.Item>
            </Carousel>
            <p className="fs-4">For other projects visit my <a href="https://github.com/SarahGua" className="text-black">GitHube page</a></p>
        </Container>
    )
}

export default ProjectComponents