import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';



class PokemonDisplay extends React.Component {


    render() {
        let pokemon = this.props.pokemon
        return (
            <>

                <Form className="mb-4">
                    <Form.Group className="mb-2" controlId="searchedPokemon">
                        <Form.Label>Enter Pokemon</Form.Label>
                        <Form.Control onChange={this.props.handleInput} type="value" placeholder="Enter Pokemon" />
                    </Form.Group>
                    <Button className="button1" onClick={this.props.handleSearch } variant="primary" type="submit">
                        Submit Pokemon
                    </Button>
                </Form>


                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.ID}.png`} />
                    <Card.Body>
                        <Card.Title>{pokemon.Name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{pokemon.Types[0].type.name}</ListGroup.Item>
                        <ListGroup.Item>{pokemon.Stats[0].stat.name}</ListGroup.Item>
                        <ListGroup.Item>{pokemon.Moves[0]}</ListGroup.Item>
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