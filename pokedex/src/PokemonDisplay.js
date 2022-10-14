import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';





class PokemonDisplay extends React.Component {


    render() {
        let pokemon = this.props.pokemon
        return (
            <>
                <Col>
                    <Card className="mx-auto my-3  nes-container is-centered is-rounded is-dark" style={{ width: '26rem', backgroundColor: "#B08FB3" }} >
                        <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
                        <Card.Body>
                            <Card.Title className="nes-container is-centered is-rounded is-dark">{pokemon.name}</Card.Title>
                        </Card.Body>
                        <Card.Text> 
                        {this.props.description}
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-2">{`Type: ${pokemon.types[0].type.name}`}</ListGroup.Item>
                            <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-2">{`Stats: ${pokemon.stats[0].stat.name}`}</ListGroup.Item>
                            <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded my-1">{`Moves: ${pokemon.moves[0]}`}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                        <Button className="nes-btn is-normal is-warning my-2" type="button" variant="primary" onClick={() => this.props.updatePokemon(pokemon.name)}>Trade Me!</Button>
                        </Card.Body>
                    </Card>
                    </Col>
            </>
        )
    }
}


export default PokemonDisplay;