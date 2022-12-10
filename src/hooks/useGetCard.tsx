import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import POKE_CARD from '../query/POKE_CARD'
import { PokeCard } from "../types/PokeCardType";
import { fomatPokeList } from '../helper/formatPokeList'
import { Alert } from "react-native";

export const useGetCard = () => {
    const [pokeData, setPokeData] = useState<PokeCard[]>([])
    const [offset, setOffset] = useState(0)
    const { data, loading, error } = useQuery(POKE_CARD, {
        fetchPolicy: "cache-and-network",
        nextFetchPolicy: "cache-first",
        variables: {
            off: offset
        }
    })

    useEffect(() => {
        if (data) {
            try {
                const pokeList = fomatPokeList(data)
                setPokeData([...pokeData, ...pokeList])
            } catch (error) {
                Alert.alert(
                    "Ocurrent a error",
                    "Try again more latter",
                    [{ text: "OK" }]
                )
            }
        }
    }, [data, loading])

    function fetchMoreData() {
        if (!loading) {
            const nestFetchOffset = offset + 12
            setOffset(nestFetchOffset)
        }
    }

    return {
        pokeData,
        loading,
        getCardError: error,
        fetchMoreData
    }
}