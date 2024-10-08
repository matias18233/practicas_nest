import axios from 'axios';
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface.ts';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }

    public readonly id: number;
    public name: string;

    constructor( id: number, name: string ) {
        this.id = id;
        this.name = name;
    }

    public scream() {
        console.log(`${ this.name.toUpperCase() }!!!`); // Para colocar el string en mayúsculas
    }

    public speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    public async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

        return data.moves;
    }
}

export const charmander = new Pokemon( 4, 'Charmander' );

charmander.scream();
charmander.speak();

console.log(charmander.getMoves());