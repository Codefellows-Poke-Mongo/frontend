import React from "react";
import axios from "axios";
import PokemonDisplay from "./PokemonDisplay";
import Profile  from "./Profile.js"
import PokemonWantedForm from "./PokeWantedForm";
import { withAuth0 } from '@auth0/auth0-react';
import DisplayedSearchedPokemon from "./DisplaySearchedPokemon";
import FormSearch from "./FormSearch";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";


const API_SERVER = process.env.REACT_APP_SERVER;

class GetPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: [],
      show: false,
      showUpdate: false,
      selectedPokemon: {},
      searchedPokemon: null,
      searchQuery: ''
    }
  }
  // hey
  savePokemon = async (e) => {
    e.preventDefault();
    let {name, id, moves, types, stats} = this.state.searchedPokemon
    let pokemon = {name:name, id:id, moves:moves, types:types, stats:stats}
    const response = await axios.post(`${API_SERVER}/save`, {pokemon:pokemon})
    console.log(response);
  }
  
  handleInput = (event) => {
    this.setState({ searchQuery: event.target.value });
    console.log(this.state.searchQuery);
  }

  handleSearch = async (event) => {
    event.preventDefault();
    try {
      const API = `https://pokeapi.co/api/v2/pokemon/${this.state.searchQuery}`;
      const response = await axios.get(API);
      this.setState({ searchedPokemon: response.data });
      console.log(this.state.searchQuery)
      console.log(response.data);
    } catch (error) {
      console.log('There is an error', error.response);
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
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: `/register?name=${this.props.userName}`
      }
      const response = await axios(config)
      console.log(response.data.Pokemon)
      this.setState({
        pokedex: response.data.Pokemon
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
      <FormSearch handleSearch={this.handleSearch} input={this.handleInput}/>
        {
        this.state.pokedex.map((pokemon) =>
          <PokemonDisplay pokemon={pokemon} key={pokemon.ID} />
        )
        }
        <PokemonWantedForm />
        {this.state.searchedPokemon && 
        <DisplayedSearchedPokemon pokemon={this.state.searchedPokemon} savePokemon={this.savePokemon}/>
         }
      </>
    );
  }

}

export default withAuth0(GetPokemon);


