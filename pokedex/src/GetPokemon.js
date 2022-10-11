import React from "react";
import axios from "axios";
import createAuth0Client from "@auth0/auth0-spa-js";

const API_SERVER = process.env.REACT_APP_SERVER;

class GetPokemon extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        pokedex: []
        }
    }

    getPokemon = async () => {
    try{
        const response = await axios.get(`${API_SERVER}/pokedex`);
        this.setState({
          pokedex: response.data
        });
      }   catch(error) {
        console.log('There is an error', error.response);
      }
    }

    addPokemons = async (pokemonInfo) => {
      try{
        const response = await axios.post(`${process.env.REACT_APP_SERVER}/pokedex`, pokemonInfo);
        const newPokemon = response.data;
        this.setState({
          pokedex: [...this.state.pokedex, newPokemon],
        });
      }catch(error) {
        console.log(error);
      }
    }

    deletePokemon = async (pokemonToDelete) => {
      try{
        await axios.delete(`${process.env.REACT_APP_SERVER}/pokedex/${pokemonToDelete}`);
        const filteredPokemons = this.state.pokedex.filter(pokemon => {
          return pokemon.ID !== pokemonToDelete;
        });
        this.setState({
          pokedex: filteredPokemons,
        });
      }catch(error) {
        console.log('There is an error: ', error.response);
      }
    }

    updatePokemon = async (pokemonToUpdate) => {
      try{
        const url = `${process.env.REACT_APP_SERVER}/pokedex/${pokemonToUpdate.ID}`;
        const response = await axios.put(url, pokemonToUpdate);
        const updatedPokemon = response.data;
        console.log(updatedPokemon);
        const updatedPokemonArr = this.state.pokedex.map(pokemon => {
          return pokemon.ID === updatedPokemon.data.ID ? updatedPokemon.data : pokemon;
        });
        this.setState({
          pokedex: updatedPokemonArr,
        });
      }catch(error) {
        console.log('There is an error: ', error.response);
      }
      this.componentDidMount();
    }

    componentDidMount() {
      this.getPokemon();
    }



  render() {
    return(
        <>

        </>
    );
  }
    
}

export default GetPokemon;