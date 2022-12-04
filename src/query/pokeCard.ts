import { gql } from "@apollo/client"

export const POKE_CARD = gql(`
  query MyQuery {
    pokemon_v2_pokemon(offset: 0, limit: 10) {
      id
      name
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemoncolor {
          name
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
    }
  }
`)