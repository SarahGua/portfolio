import { Card, Carousel, Col, Container, Row } from "react-bootstrap"
import eventConnect from '../img/EventConnect.png'

const ProjectComponents = () => {
    return (
        <Container className="mt-5">
            <Carousel>
                <Carousel.Item className="text-center">
                        <Card className="border-0 bg-trans">
                            <Card.Text className="fs-1 m-0">
                                EventConnect: a web app for Exhibitions.
                            </Card.Text>
                            <Card.Img variant="top" src={eventConnect} alt="img"/>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default ProjectComponents