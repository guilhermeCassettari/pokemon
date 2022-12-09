import { gql } from "@apollo/client"

const POKE_DETAILS = gql`
  query MyQuery($idd: Int!) {
    pokemon_v2_pokemon(where: {id: {_eq: $idd}}) {
      height
      weight
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
        pokemon_v2_pokemon {
          pokemon_v2_pokemonabilities(limit: 2) {
            pokemon_v2_ability {
              name
            }
          }
        }
      }
    }
  }
  
`

export default POKE_DETAILS