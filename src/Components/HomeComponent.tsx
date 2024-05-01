import { Col, Row } from "react-bootstrap"

const HomeComponent = () => {
    return (
        <>
            <Row className="mt-5">
                <Col>
                    <i className="bi bi-stars d-flex align-items-end justify-content-end h-100 m-0 fs-1 cl-white"></i>
                </Col>
                <Col className="col-6">
                    <div className="d-flex flex-column align-items-center">
                        <h1 className="font-7em">Hi. I'm Sarah.</h1>
                        <h1 className="text-center">A full-stack web developer</h1>
                    </div>
                </Col>
                <Col>
                <i className="bi bi-stars d-flex align-items-start h-100 m-0 h-100 fs-1 cl-white"></i>
                </Col>        
            </Row>
            <Row className="mt-5">
                <Col>
                    <p className="m-0 fs-3 text-center">"Welcome to my corner of the web! 
                    I'm Sarah, a passionate web developer dedicated to crafting immersive 
                    digital experiences. With a keen eye for detail and a commitment to excellence, 
                    I specialize in designing and developing user-friendly websites that not only 
                    look great but also function flawlessly across all devices. From sleek and 
                    modern designs to robust e-commerce platforms, I thrive on bringing creative 
                    visions to life through clean, efficient code and innovative solutions. 
                    Whether you're a small business looking to establish your online presence 
                    or a larger corporation in need of a website overhaul, I'm here to transform 
                    your ideas into reality. Take a look around and explore my portfolio to see 
                    some of my latest projects and discover how I can help elevate your online presence."
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default HomeComponent