import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


class PokemonDisplay extends React.Component {
    render() {
        let pokemon = this.props.pokemon
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
                    <Card.Body>
                        <Card.Title>{pokemon.name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{pokemon.types[0].type.name}</ListGroup.Item>
                        <ListGroup.Item>{pokemon.stats[0].stat.name}</ListGroup.Item>
                        <ListGroup.Item>{pokemon.moves[0]}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Button variant="primary">Trade Me!</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default PokemonDisplay;