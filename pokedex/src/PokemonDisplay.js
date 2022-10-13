import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col } from "react-bootstrap";


class PokemonDisplay extends React.Component {
    render() {
        let pokemon = this.props.pokemon
        return (
            <>
                    <Col >
                    <Card className="mx-auto  nes-container is-centered is-rounded is-dark" style={{ width: '26rem' }}>
                        <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
                        <Card.Body>
                            <Card.Title className="nes-container is-centered is-rounded is-dark">{pokemon.name}</Card.Title>
                        </Card.Body>
                        <Card.Text> </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className="nes-container is-centered is-rounded is-dark">{`Type: ${pokemon.types[0].type.name}`}</ListGroup.Item>
                            <ListGroup.Item className="nes-container is-centered is-rounded is-dark">{`Stats: ${pokemon.stats[0].stat.name}`}</ListGroup.Item>
                            <ListGroup.Item className="nes-container is-centered is-rounded is-dark">{`Moves: ${pokemon.moves[0]}`}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button className="nes-btn is-normal" type="button" variant="primary">Trade Me!</Button>
                        </Card.Body>
                    </Card>
                    </Col>
            </>
        )
    }
}

export default PokemonDisplay;