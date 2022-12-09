import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { useGetCard } from "../../hooks/useGetCard";
import { PokeCard } from '../../types/PokeCardType'
import { useGetSingleCard } from "../../hooks/useGetSingleCard";
import { Alert } from "react-native";



export interface ContextProps {
  pokeData: PokeCard[] | [],
  loading: boolean,
  pokeSearch: () => void,
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  card: PokeCard[],
  searchLoader: boolean,
  fetchMoreData: () => void
}

interface Props {
  children?: ReactNode
}


export const PokemonContext = createContext<ContextProps>({} as ContextProps)

export const PokemonProvider: React.FC<Props> = ({ children }) => {
  const [card, setCard] = useState<PokeCard[]>([])
  const [searchValue, setSearchValue] = useState('')
  const { pokeSearch, singltPokeData, searchLoader, singleCardError } = useGetSingleCard(searchValue)
  const { pokeData, loading, getCardError, fetchMoreData } = useGetCard()

  useEffect(() => {
    if (pokeData) {
      setCard(pokeData)
    }
  }, [pokeData])

  useEffect(() => {
    if (!!singltPokeData.length && !searchLoader) {
      setCard(singltPokeData)
    } else if (!!pokeData.length && searchValue && !loading && !searchLoader) {
      setCard(pokeData)
      Alert.alert(
        "Dont find any Pokemon",
        "Try again more latter",
        [{ text: "OK" }]
      )
    }
  }, [singltPokeData])

  useEffect(() => {
    if (!searchValue.length) {
      setCard(pokeData)
    }
  }, [searchValue])

  useEffect(() => {
    if (getCardError || singleCardError) {
      Alert.alert(
        "Ocurrent a error",
        "Try again more latter",
        [{ text: "OK" }]
      )
    }
  }, [getCardError, singleCardError])

  return (
    <PokemonContext.Provider value={{
      pokeData,
      loading,
      pokeSearch,
      searchLoader,
      searchValue,
      card,
      setSearchValue,
      fetchMoreData
    }}>
      {children}
    </PokemonContext.Provider>
  )
}
