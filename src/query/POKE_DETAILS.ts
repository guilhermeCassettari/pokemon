import { gql } from "@apollo/client"

const POKE_DETAILS =  gql`
    query MyQuery($idd: Int!) {
        pokemon_v2_pokemon(where: {id: {_eq: $idd}}) {
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

export default POKE_DETAILS

// pokemon_v2_pokemon(limit: 5, order_by: {id: asc}) {
//   name
//   pokemon_v2_pokemonstats {
//     pokemon_v2_stat {
//       pokemon_v2_characteristics {
//         pokemon_v2_characteristicdescriptions(where: {language_id: {_eq: 9}}) {
//           description
//         }
//       }
//     }
//   }
// }