import React, { Component } from 'react'
import User from '../interfaces/User.Interface';

export class PokemonSearch extends Component<User> {
	pokemonRef: React.RefObject<HTMLInputElement>;

	constructor(props: User) {
		super(props);
		this.state = {
			name: '',
			numberOfAbilities: null,
			baseExp: null,
			imageUrl: ''
		}

		this.pokemonRef = React.createRef();
	}

	render() {
		const { name, numberOfPokemon } = this.props;
		return (
			<div>
				<p>{name} {numberOfPokemon && <span>{numberOfPokemon} Pokemon</span>}</p>	
				<input type="text" ref={this.pokemonRef} />
				<button onClick={this.onSearchClick} className="search-button">
					Search
				</button>
			</div>
		)
	}
}

export default PokemonSearch
