export const pokemonIds = [1, 20, 30, 34, 66];

pokemonIds.push(5);

console.log(pokemonIds);

interface Pokemon {
    id: number,
    name: string
}

export const Bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur',
}

console.log(Bulbasaur);
