import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Col } from "react-bootstrap";




class DisplayedSearchedPokemon extends React.Component {
    render() {
        return (
            <>
                <Col className='py-3'>
                    <Card style={{ width: '26rem', backgroundColor: "#B08FB3" }} className="h-100 mx-auto my-1 px-1 nes-container is-centered is-rounded is-dark" >
                        <Card.Title style={{ backgroundColor: "#817090" }} className="nes-container is-centered is-rounded is-dark">You Cached a Pokemon! </Card.Title>
                        <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokemon.id}.png`} />
                        <Card.Body>
                            <Card.Title className="nes-container is-centered is-rounded is-dark">{this.props.pokemon.name}</Card.Title>
                            <Card.Text>
                                {this.props.pokemonDescription2}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded">{`Type: ${this.props.pokemon.types[0].type.name}`}</ListGroup.Item>
                            <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded">{`Stats: ${this.props.pokemon.stats[0].base_stat}`}</ListGroup.Item>
                            <ListGroup.Item style={{ backgroundColor: "#8CD4A6" }} className="nes-container is-centered is-rounded">{`Moves: ${this.props.pokemon.moves[0].move.name}`}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button className="nes-btn is-warning" type="button" variant="primary">Trade Me!</Button>
                        </Card.Body>
                        <Button className="nes-btn is-success " type="button" variant="primary" onClick={this.props.savePokemon}>Save</Button>
                    </Card>
                </Col>
            </>
        )
    }
}
export default DisplayedSearchedPokemon