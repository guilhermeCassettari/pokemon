import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import SINGLE_POKE_CARD from '../query/SINGLE_POKE_CARD'
import { PokeAtackType, PokeCard, PokeQueryCard } from "../types/PokeCardType";
import { fomatPokeList } from "../helper/formatPokeList";
import { Alert } from "react-native";

export const useGetSingleCard = (pokeName: string) => {
    const [singltPokeData, setSingltPokeData] = useState<PokeCard[]>([])
    const [fetchData, { data, loading, error }] = useLazyQuery(SINGLE_POKE_CARD, {
        fetchPolicy: 'no-cache'
    })

    useEffect(() => {
        if (data) {
            try {
                const pokeList = fomatPokeList(data)
                setSingltPokeData(pokeList)
            } catch (error) {
                Alert.alert(
                    "Ocurrent a error",
                    "Try again more latter",
                    [{ text: "OK" }]
                )
            }
        }
    }, [data, loading])

    function pokeSearch() {
        fetchData({
            variables: {
                pokeName
            }
        })
    }

    return {
        singltPokeData,
        searchLoader: loading,
        pokeSearch,
        singleCardError: error
    }
}