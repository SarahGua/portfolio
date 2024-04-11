import { Carousel, Col, Container, Row } from "react-bootstrap"

const ProjectComponents = () => {
    return (
        <Container className="mt-5">
            <Carousel>
                <Carousel.Item className="text-center">
                    <img src={'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'} alt="img" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center">
                <img src={'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'} alt="img" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center">
                <img src={'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'} alt="img" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Row>
                <Col className=" mt-8">
                    <p className="m-0 fs-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Mollitia omnis tenetur itaque adipisci. Quae atque iste in incidunt maiores. 
                        Praesentium placeat deleniti adipisci mollitia! Facere, harum. 
                        Laudantium incidunt esse ad!</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ProjectComponents