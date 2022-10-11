import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { withAuth0 } from '@auth0/auth0-react';

const API_SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pokedex: []
        }
    }


  async componentDidMount() {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/pokedex'
      }
    }
  }
}



// getPokemons = async () => {
//   const response = await axios.get(`${API_SERVER}/pokedex,`);
//   this.setState({})
// }


render() {
    return (
        <>

        </>
    )
}


export default withAuth0(App);