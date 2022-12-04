export interface PokeCard {
    name: string
    id: number
    color: string
    type: PokeType[]
}

export type PokeType = {
    type: string
}

export interface PokeQueryCard {
    id: number
    name: string
    pokemon_v2_pokemonspecy: {
        pokemon_v2_pokemoncolor: {
            name: string
        }
    }
    pokemon_v2_pokemontypes: PokeAtackType[]
}

export type PokeAtackType = {
    pokemon_v2_type: {
        name: string
    }
}
