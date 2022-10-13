import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";




class DisplayedSearchedPokemon extends React.Component {
    render() {
        return (
            <>
                <Card style={{ width: '22rem' }} className="h-100 mx-auto my-1 px-1 nes-container is-centered is-rounded is-dark" >
                    <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemon.id}.png`}/>
                    <Card.Body>
                        <Card.Title className="nes-container is-centered is-rounded is-dark">{this.props.pokemon.name}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className="nes-container is-centered is-rounded is-dark">{`Type: ${this.props.pokemon.types[0].type.name}`}</ListGroup.Item>
                        <ListGroup.Item className="nes-container is-centered is-rounded is-dark">{`Stats: ${this.props.pokemon.stats[0].base_stat}`}</ListGroup.Item>
                        <ListGroup.Item className="nes-container is-centered is-rounded is-dark">{`Moves: ${this.props.pokemon.moves[0].move.name}`}</ListGroup.Item>
                    </ListGroup>
                     <Card.Body>
                        <Button className="nes-btn is-normal" type="button" variant="primary">Trade Me!</Button>
                    </Card.Body> 
                    <Button className="nes-btn is-normal" type="button" variant="primary" onClick={this.props.savePokemon}>Save</Button>
                </Card>
            </>
        )
    }
}
export default DisplayedSearchedPokemon