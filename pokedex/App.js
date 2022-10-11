import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';

const API_SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
    constructor(props) {
        this.state = {
          pokedex: []
        }
    }
}

getPokemons = async () => {
  const response = await axios.get(`${API_SERVER}/pokedex,`);
  this.setState({})
}


render() {
    return (
        <>

        </>
    )
}


export default App;