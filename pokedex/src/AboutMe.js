import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col } from "react-bootstrap";
import image1 from "../src/assets/JoseG.jpg";
import image2 from "../src/assets/myProfile.jpg"
import image3 from "../src/assets/Ben.jpg"
import image4 from "../src/assets/diesel.jpg"

class AboutMe extends React.Component {

    render() {
        return (
            <>
                <Container className='mt-5'>
                    <Col>
                        <Card className="mx-auto my-3  nes-container is-centered is-rounded is-dark" style={{ width: '26rem', backgroundColor: "#B08FB3" }} >
                            <Card.Img variant="top" src={image3} />
                            <Card.Body>
                                <Card.Title className="nes-container is-centered is-rounded is-dark">Ben Lieberman</Card.Title>
                            </Card.Body>
                            <Card.Text> Full Stack Software Developer ... </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-2">Type: Full Stack Developer</ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-2">Stats: JS, React, Express, Bootstrap, MongoDB, CSS3, HTML5</ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-1">Moves: </ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-1">Fav Pokemon: </ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                        <Card className="mx-auto my-3  nes-container is-centered is-rounded is-dark" style={{ width: '26rem', backgroundColor: "#B08FB3" }} >
                            <Card.Img variant="top" src={image1} />
                            <Card.Body>
                                <Card.Title className="nes-container is-centered is-rounded is-dark">Jose Gonzalez</Card.Title>
                            </Card.Body>
                            <Card.Text> I am a software developer specializing in Java.I am an Army Veteran with years of experience in leadership, being part of a team and instructing others; with an active security clearance and multilingual in English and Spanish.</Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-2">Type: Full Stack Developer</ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-2">Stats: JS, React, Express, Bootstrap, MongoDB, CSS3, HTML5</ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-1">Moves: </ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-1">Fav Pokemon: Bulbasaur</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                        <Card className="mx-auto my-3  nes-container is-centered is-rounded is-dark" style={{ width: '26rem', backgroundColor: "#B08FB3" }} >
                            <Card.Img variant="top" src={image2} />
                            <Card.Body>
                                <Card.Title className="nes-container is-centered is-rounded is-dark">Maximo Vincente</Card.Title>
                            </Card.Body>
                            <Card.Text> Full Stack Software Developer and Active Duty service member of the United States Army with over 7 years of organizational leadership and mentorship. </Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-2">Type: Full Stack Developer</ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-2">Stats: JS, React, Express, Bootstrap, MongoDB, CSS3, HTML5</ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-1">Moves: </ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-1">Fav Pokemon: Charizard</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                        <Card className="mx-auto my-3  nes-container is-centered is-rounded is-dark" style={{ width: '26rem', backgroundColor: "#B08FB3" }} >
                            <Card.Img variant="top" src={image4} />
                            <Card.Body>
                                <Card.Title className="nes-container is-centered is-rounded is-dark">Mehtab Riar</Card.Title>
                            </Card.Body>
                            <Card.Text> Full Stack Software Developer and Project manager with four years of experience</Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-2">Type: Full Stack Developer</ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-2">Stats: JS, React, Express, Bootstrap, MongoDB, CSS3, HTML5</ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-1">Moves: Sleep </ListGroup.Item>
                                <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-1">Fav Pokemon: Raikou </ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                </Container>

            </>
        )
    }
};

export default AboutMe;