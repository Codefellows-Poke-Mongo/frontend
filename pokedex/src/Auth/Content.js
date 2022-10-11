import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';


class Content extends React.Component {

  async componentDidMount() {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/register'
      }
      const pokemonsResponse = await axios(config);
      this.setState({ books: pokemonsResponse.data })
    }
  }


  render() {
    return (
      <>
      </>
    )
  }
}


export default withAuth0(Content);