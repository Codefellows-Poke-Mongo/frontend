import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import GetPokemon from './GetPokemon';



class Profile extends Component {
    render() {
        // <Content />
        return <GetPokemon userName={this.props.auth0.user.name}/>;
    }
}

export default withAuth0(Profile);