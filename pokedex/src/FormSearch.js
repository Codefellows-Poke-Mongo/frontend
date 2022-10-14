
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class FormSearch extends React.Component {
    render() {
        return(
            <>
             <Form  className="mb-4">
                    <Form.Group className="mb-2" controlId="searchedPokemon">
                        <Form.Label> </Form.Label>
                        <Form.Control style={{ backgroundColor: "#CFA4D4" }} className="nes-input is-primary  nes-text my-4 mx-3 text-center mx-auto 200 text-center w-50 d-flex flex-row"  onChange={this.props.input} type="value" placeholder="Enter Pokemon" />
                    </Form.Group>
                    <Button className="nes-btn is-primary my-2 mx-3 text-center mx-auto 200 text-center w-20 d-flex flex-row" onClick={ this.props.handleSearch } type="button">
                        Submit Pokemon
                    </Button>
                </Form>
                <Button className="nes-btn is-primary my-2 mx-3 text-center mx-auto 200 text-center w-20 d-flex flex-row" onClick={this.props.reroll}>Reroll your Pokemon!</Button>
            </>
        )
    }
}

export default FormSearch;