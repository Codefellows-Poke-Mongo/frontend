import React from "react";
import axios from "axios";
import PokemonDisplay from "./PokemonDisplay";
import PokemonWantedForm from "./PokeWantedForm";
import { withAuth0 } from '@auth0/auth0-react';
import DisplayedSearchedPokemon from "./DisplaySearchedPokemon";
import FormSearch from "./FormSearch";
import { Row } from "react-bootstrap";



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
      searchQuery: '',
      pokedexPokemon: [],
      pokedex2: [],
      searchPokemonDescription: null,
    }
  }


  getDescription =  async () => {
    try {
     for (let pokemon of this.state.pokedex) {
       const API = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`)
       this.setState({pokedex2: [...this.state.pokedex2, API.data.flavor_text_entries.filter(flavor_text => flavor_text.language.name === 'en')[0].flavor_text]})
     }
    } catch (error) {
      console.log('I am the description error', error.response);
    }
  }

  getSearchDescription = async () => {
    try {
      const API = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${this.state.searchQuery}`)
      const response = API.data.flavor_text_entries[0].flavor_text
      console.log(response);
      this.setState({searchPokemonDescription: response }, 
        () => {console.log(this.state.searchPokemonDescription)});
    } catch (error) {
      console.log('I am the description error', error.response);
    }
  }

  savePokemon = async (e) => {
    e.preventDefault();
    let {name, id} = this.state.searchedPokemon
    let pokemon = {name:name, id:id}
    const res = await axios.post(`${API_SERVER}/save`, {pokemon:pokemon})
    console.log(res.data);
    const createdPokemon = res.data
    this.setState({
      pokedexPokemon: [...this.state.pokedexPokemon, createdPokemon]
    })
    console.log(this.state.pokedexPokemon)
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
      this.setState({ searchedPokemon: response.data}, this.getSearchDescription);
      console.log(this.state.searchQuery)
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
      id: e.target.id.value,
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
      console.log(response.data.Pokemon[0].moves.length)
      this.setState({
        pokedex: response.data.Pokemon
      }, this.getDescription);
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
      console.log(error.message);
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
      const response = await axios.post(url, {pokeSent: {name: pokemonToUpdate, id: 23}, pokeWanted: {name: 'raikou', id: 12}});
      const updatedPokemon = response.data;
      console.log(updatedPokemon);
      const updatedPokemonArr = this.state.pokedex.map(pokemon => {
        return pokemon.name === updatedPokemon.data.name ? updatedPokemon.data : pokemon;
      });
      this.setState({
        pokedex: updatedPokemonArr,
      });
    } catch (error) {
      console.log('There is an error: ', error.message);
    }
  }

  reroll = async () => {
    try {
      const url = `${process.env.REACT_APP_SERVER}/update?name=${this.props.userName}`;
      const response = await axios.get(url);
      this.setState({pokedex: response.data.Pokemon})
    } catch (error) {
      console.log('There is an error: ', error.response);
    }
  }

  componentDidMount() {
    this.getPokemon();
  }


  render() {
    return (
      <>
      <FormSearch handleSearch={this.handleSearch} input={this.handleInput} reroll={this.reroll}/>
        <Row lg={3}>
        {
        this.state.pokedex.map((pokemon, index) =>
          <PokemonDisplay pokemon={pokemon} key={pokemon.id} description={this.state.pokedex2[index]} updatePokemon={this.updatePokemon}/>
        )
        }
        </Row>
        <PokemonWantedForm />
        {this.state.searchedPokemon &&
        <DisplayedSearchedPokemon pokemon={this.state.searchedPokemon} savePokemon={this.savePokemon}  pokemonDescription2={this.state.searchPokemonDescription} />
        }
      </>
    );
  }

}

export default withAuth0(GetPokemon);


