import { useEffect, useState } from "react";

import { useLazyQuery } from "@apollo/client"
import POKE_DETAILS from '../query/POKE_DETAILS'
import { PokeDetails, PokeDetailsResponse } from "../types/PokeDetailsType";
import { Alert } from "react-native";

const useGetPokeDetails = () => {
    const [pokeDetail, setPokeDetail] = useState<PokeDetails>()
    const [fetchData, { data, loading, error }] = useLazyQuery(POKE_DETAILS, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    })

    useEffect(() => {
        if(error) {
          Alert.alert(
            "Ocurrent a error",
            "Try again more latter",
            [{ text: "OK"}]
          )
        }
      }, [error])

    useEffect(() => {
        if (data) {
            const response = data.pokemon_v2_pokemon.map((pokeDetails: PokeDetailsResponse) => {
                let total = 0
                let majorMove
                const stats = pokeDetails.pokemon_v2_pokemonstats.map((pokeStat) => {
                    total = total + pokeStat.base_stat
                    majorMove = pokeStat.pokemon_v2_pokemon.pokemon_v2_pokemonabilities[1].pokemon_v2_ability.name
                    return {
                        stat: pokeStat.base_stat,
                        statName: pokeStat.pokemon_v2_stat.name
                    }
                })      
                return {
                    description: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
                    weight: pokeDetails.weight,
                    height: pokeDetails.height,
                    majorMove: majorMove,
                    gender: {
                        male: 30,
                        female: 70
                    },
                    stats: [...stats, {
                        stat: total,
                        statName: "Total"
                    }]
                }
            })
            setPokeDetail(response[0])
        }
    }, [data, loading])


    function fetchPokeDetais(id: number) {
        fetchData({
            variables: {
                idd: id
            }
        })
    }
    
    return {
        fetchPokeDetais,
        pokeDetail,
        loading
    }
}

export default useGetPokeDetails