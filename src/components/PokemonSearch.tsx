import React, { Component } from 'react'
import User from '../interfaces/User.Interface';

export class PokemonSearch extends Component<User> {
	render() {
		const { name, numberOfPokemon } = this.props;
		return (
			<div>
				<p>{name} {numberOfPokemon && <span>{numberOfPokemon} Pokemon</span>}</p>	
			</div>
		)
	}
}

export default PokemonSearch
