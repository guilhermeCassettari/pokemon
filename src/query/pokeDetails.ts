import { gql } from "@apollo/client"

export default gql`
    query MyQuery {
        pokemon_v2_pokemon(where: {name: {_eq: "bulbasaur"}}) {
            id
            name
            height
            weight
            pokemon_v2_pokemonstats {
                base_stat
                pokemon_v2_stat {
                name
                }
            }
        }
    }
  
`