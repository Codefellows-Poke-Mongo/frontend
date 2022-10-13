import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


class DisplayedSearchedPokemon {

    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>{this.props.pokemon.Name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{this.props.pokemon.Types}</ListGroup.Item>
                        <ListGroup.Item>{this.props.pokemon.Stats}</ListGroup.Item>
                        <ListGroup.Item>{this.props.pokemon.Moves}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Button variant="primary">Trade Me!</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}


export default DisplayedSearchedPokemon