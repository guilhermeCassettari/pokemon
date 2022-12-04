import React, { createContext, ReactNode } from "react";
import { useGetCard } from "../../hooks/useGetCard";

import { PokeCard} from '../../types/PokeCardType'

interface ContextProps {
    pokeData: PokeCard[] | [],
    loading: boolean
}

interface Props {
    children?: ReactNode
}

const defaultState: ContextProps = {
    pokeData: [],
    loading: false
}
export const PokemonContext= createContext(defaultState)

export const PokemonProvider: React.FC<Props> = ({ children }) => {   
    const { pokeData, loading } = useGetCard()  

    return (
        <PokemonContext.Provider value={{ pokeData, loading }}>
            {children}
        </PokemonContext.Provider>
    )
}

/**
query MyQuery {
  pokemon_v2_pokemon(limit: 20, order_by: {id: asc}) {
    id
    name
    height
    weight
    pokemon_v2_pokemonspecy {
      pokemon_v2_pokemoncolor {
        name
      }
    }
  }
}


query MyQuery {
  pokemon_v2_pokemon(limit: 5, order_by: {id: asc}) {
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

  pokemon_v2_pokemon(limit: 5, order_by: {id: asc}) {
    name
    pokemon_v2_pokemonstats {
      pokemon_v2_stat {
        pokemon_v2_characteristics {
          pokemon_v2_characteristicdescriptions(where: {language_id: {_eq: 9}}) {
            description
          }
        }
      }
    }
  }
}



 */