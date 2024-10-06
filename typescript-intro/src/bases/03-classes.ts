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
}

export const charmander = new Pokemon( 4, 'Charmander' );

charmander.scream();
charmander.speak();
