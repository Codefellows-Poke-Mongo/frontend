import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";


class DisplayedSearchedPokemon extends React.Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemon.id}.png`}/>
                    <Card.Body>
                        <Card.Title>{this.props.pokemon.name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card’s content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {/* <ListGroup.Item>{this.props.pokemon.types[0]}</ListGroup.Item> */}
                        {/* <ListGroup.Item>{this.props.pokemon.stats[0]}</ListGroup.Item> */}
                        <ListGroup.Item>{this.props.pokemon.moves[0].move.name}</ListGroup.Item>
                    </ListGroup>
                     <Card.Body>
                        <Button className="nes-btn is-primary" type="button" variant="primary">Trade Me!</Button>
                    </Card.Body> 
                    <Button className="nes-btn is-primary" type="button" variant="primary" onClick={this.props.savePokemon}>Save</Button>
                </Card>
            </>
        )
    }
}
export default DisplayedSearchedPokemon