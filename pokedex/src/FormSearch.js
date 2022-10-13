
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class FormSearch extends React.Component {
    render() {
        return(
            <>
             <Form className="mb-4">
                    <Form.Group className="mb-2" controlId="searchedPokemon">
                        <Form.Label>Enter Pokemon</Form.Label>
                        <Form.Control onChange={this.props.input} type="value" placeholder="Enter Pokemon" />
                    </Form.Group>
                    <Button className="nes-btn is-success" onClick={ this.props.handleSearch } type="button">
                        Submit Pokemon
                    </Button>
                </Form>
            </>
        )
    }
}

export default FormSearch;