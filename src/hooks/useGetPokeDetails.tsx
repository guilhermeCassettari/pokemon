import { useEffect, useState } from "react";

import { useLazyQuery } from "@apollo/client"
import POKE_DETAILS from '../query/POKE_DETAILS'
import { PokeDetails, PokeDetailsResponse } from "../types/PokeDetailsType";

const useGetPokeDetails = () => {
    const [pokeDetail, setPokeDetail] = useState<PokeDetails>()
    const [fetchData, { data, loading }] = useLazyQuery(POKE_DETAILS)

    useEffect(() => {
        if (data) {
            const response = data.pokemon_v2_pokemon.map((pokeDetails: PokeDetailsResponse) => {
                const stats = pokeDetails.pokemon_v2_pokemonstats.map((pokeStat) => {
                    return {
                        stat: pokeStat.base_stat,
                        statName: pokeStat.pokemon_v2_stat.name
                    }
                })
                return {
                    description: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
                    weight: pokeDetails.weight,
                    height: pokeDetails.height,
                    majorMove: "trombada",
                    gender: {
                        male: 30,
                        female: 70
                    },
                    stats: stats
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