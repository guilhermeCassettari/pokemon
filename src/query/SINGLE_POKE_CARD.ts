import { gql } from "@apollo/client"

const SINGLE_POKE_CARD = gql(`
  query MyQuery($pokeName: String!) {
    pokemon_v2_pokemon(where: {name: {_eq: $pokeName}}) {
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

export default SINGLE_POKE_CARD