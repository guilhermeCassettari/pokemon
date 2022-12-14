export interface PokeDetailsResponse {
    height: number
    weight: number
    pokemon_v2_pokemonstats: PokeStatsResponse[]
}

export type PokeStatsResponse = {
    base_stat: number,
    pokemon_v2_stat: {
        name: string
    },
    // sorry im tired :(
    pokemon_v2_pokemon: any
}


export type PokeDetails = {
    description: string
    weight: number
    height: number
    majorMove: string
    gender: {
        male: number
        female: number
    }
    stats: PokeStat[]
}

export type PokeStat = {
    stat: number
    statName: string
}

export interface Pokename {
    pokeName: string
}




