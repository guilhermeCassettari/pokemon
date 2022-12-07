import { LazyQueryExecFunction } from "@apollo/client"
import { Dispatch, SetStateAction } from "react"

export interface PokeCard {
    name: string
    id: number
    color: string
    type: string[]
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

export interface ContextProps {
    pokeData: PokeCard[] | [],
    loading: boolean,
    pokeSearch: LazyQueryExecFunction<any, { pokeName: string}>,
    searchValue: string
    setSearchValue: Dispatch<SetStateAction<string>> 
    card: PokeCard[],
    searchLoader: boolean
  }
