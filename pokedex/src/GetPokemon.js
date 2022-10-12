import React from "react";
import axios from "axios";
import PokemonDisplay from "./PokemonDisplay";
import { Profile } from "./src/Profile.js"
import { withAuth0 } from '@auth0/auth0-react';


const API_SERVER = process.env.REACT_APP_SERVER;

class GetPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: [],
      show: false,
      showUpdate: false,
      selectedPokemon: {}
    }
  }

  onClick = (e) => {
    e.preventDefault();
    this.updatePokemon();
  }

  handleShow = () => {
    this.setState({
      show: true,
    });
  }

  handleShowUpdate = (selectedPokemon) => {
    this.setState({
      showUpdate: true,
      selectedPokemon: selectedPokemon
    });
  }

  handleClose = () => {
    this.setState({
      show: false,
      showUpdate: false,
    });
  }

  handleAddSubmit = async (e) => {
    e.preventDefault();
    this.addPokemon({
      Name: e.target.Name.value,
      ID: e.target.ID.value,
      Types: e.target.Types.value,
      Stats: e.target.Stats.value,
      Moves: e.target.Moves.value,
    });
  }

  getPokemon = async () => {
    try {
      const response = await axios.get(`${API_SERVER}/register`);
      this.setState({
        pokedex: response.data
      });
    } catch (error) {
      console.log('There is an error', error.response);
    }
  }

  addPokemon = async (pokemonInfo) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER}/pokedex`, pokemonInfo);
      const newPokemon = response.data;
      this.setState({
        pokedex: [...this.state.pokedex, newPokemon],
      });
    } catch (error) {
      console.log(error);
      this.handleClose();
    }
  }

  deletePokemon = async (pokemonToDelete) => {
    try {
      await axios.delete(`${process.env.REACT_APP_SERVER}/pokedex/${pokemonToDelete}`);
      const filteredPokemons = this.state.pokedex.filter(pokemon => {
        return pokemon.ID !== pokemonToDelete;
      });
      this.setState({
        pokedex: filteredPokemons,
      });
    } catch (error) {
      console.log('There is an error: ', error.response);
    }
  }

  updatePokemon = async (pokemonToUpdate) => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/trade`;
      const response = await axios.put(url, {pokeWanted: pokemonToUpdate});
      const updatedPokemon = response.data;
      console.log(updatedPokemon);
      const updatedPokemonArr = this.state.pokedex.map(pokemon => {
        return pokemon.Name === updatedPokemon.data.Name ? updatedPokemon.data : pokemon;
      });
      this.setState({
        pokedex: updatedPokemonArr,
      });
    } catch (error) {
      console.log('There is an error: ', error.response);
    }
    this.componentDidMount();
    this.handleClose();
  }


  componentDidMount() {
    this.getPokemon();
  }



  render() {
    return (
      <>
        {this.state.pokedex.map((pokemon) =>
          <PokemonDisplay pokemon={pokemon} key={pokemon.ID} />
        )
        }
      </>
    );
  }

}

export default GetPokemon;