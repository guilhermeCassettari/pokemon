import React, { createContext, useState, PropsWithChildren, useEffect, ReactNode } from "react";
import { useGetCard } from "../../hooks/useGetCard";

import { PokeCard, PokeQueryCard, PokeAtackType } from '../../types/PokeCard'

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
    const [pokeData, setPokeData] = useState<PokeCard[]>([])

    const { data, loading } = useGetCard()
    

    useEffect(() => {
        if (data) {
            const pokeList = data.pokemon_v2_pokemon.map((pokemon: PokeQueryCard) => {
                const type = pokemon.pokemon_v2_pokemontypes.map(( type: PokeAtackType ) => {
                    return type.pokemon_v2_type.name
                })
                return {
                    name: pokemon.name,
                    id: pokemon.id,
                    color: pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name,
                    type
                }
            })
            setPokeData(pokeList)
        }
    }, [data, loading])

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