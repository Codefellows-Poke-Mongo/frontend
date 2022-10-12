import React from "react";
import axios from "axios";

const API_SERVER = process.env.REACT_APP_SERVER;

class GetPokemon extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
        pokedex: [],
        show: false,
        showUpdate: false,
        selectedPokemon: {}
        }
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
        ID:   e.target.ID.value,
        Types: e.target.Types.value,
        Stats: e.target.Stats.value,
        Moves: e.target.Moves.value,
      });
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

    addPokemon = async (pokemonInfo) => {
      try{
        const response = await axios.post(`${process.env.REACT_APP_SERVER}/pokedex`, pokemonInfo);
        const newPokemon = response.data;
        this.setState({
          pokedex: [...this.state.pokedex, newPokemon],
        });
      }catch(error) {
        console.log(error);
        this.handleClose();
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
      this.handleClose();
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