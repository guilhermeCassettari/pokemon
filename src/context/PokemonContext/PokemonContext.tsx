import { QueryResult } from "@apollo/client";
import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { useGetCard } from "../../hooks/useGetCard";
import { LazyQueryExecFunction } from "@apollo/client";
import { PokeCard } from '../../types/PokeCardType'
import { useGetSingleCard } from "../../hooks/useGetSingleCard";



interface ContextProps {
  pokeData: PokeCard[] | [],
  loading: boolean,
  pokeSearch: LazyQueryExecFunction<any, {
    pokeName: string;
  }>,
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>> 
  card: PokeCard[],
  searchLoader: boolean
}

interface Props {
  children?: ReactNode
}


export const PokemonContext = createContext<ContextProps>({} as ContextProps)

export const PokemonProvider: React.FC<Props> = ({ children }) => {
  const [card, setCard] = useState<PokeCard[]>([])
  const [searchValue, setSearchValue] = useState('')
  const { pokeData, loading } = useGetCard()
  const { pokeSearch, singltPokeData, searchLoader } = useGetSingleCard(searchValue)

  useEffect(() => {
    if(!!singltPokeData.length) {
      setCard(singltPokeData)
    } else if(!!pokeData.length) {
      setCard(pokeData)
    }
  }, [loading, searchLoader, pokeData, singltPokeData])

  return (
    <PokemonContext.Provider value={{
      pokeData,
      loading,
      pokeSearch,
      searchLoader,
      searchValue,
      card,
      setSearchValue
    }}>
      {children}
    </PokemonContext.Provider>
  )
}
