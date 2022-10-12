import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class PokemonWantedForm extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.handleAddSubmit}>
                            <Form.Group className="mb-3" controlId="userName">
                                <Form.Label>Enter Your Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Your Username"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="pokeWanted"
                            >
                                <Form.Label>Enter Pokemon</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Pokemon"
                                    autoFocus
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.props.onClick}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default PokemonWantedForm;