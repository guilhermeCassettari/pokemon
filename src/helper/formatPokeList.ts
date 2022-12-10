import { PokeAtackType, PokeQueryCard } from "../types/PokeCardType"

type PokeArray = {
    pokemon_v2_pokemon: PokeQueryCard[]
}
export const fomatPokeList = (data: PokeArray) => {
    return data.pokemon_v2_pokemon.map((pokemon: PokeQueryCard, index) => {
        const type = pokemon.pokemon_v2_pokemontypes.map((type: PokeAtackType) => {
            return type.pokemon_v2_type.name
        })        
        return {
            name: pokemon.name,
            id: pokemon.id,
            enterAnimation: index * 100,
            color: pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name,
            type
        }
    })
}