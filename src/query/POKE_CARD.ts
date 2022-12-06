import { gql } from "@apollo/client"

const POKE_CARD = gql(`
  query MyQuery {
    pokemon_v2_pokemon(order_by: {id: asc}) {
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

export default POKE_CARD