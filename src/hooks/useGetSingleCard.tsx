import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import SINGLE_POKE_CARD from '../query/SINGLE_POKE_CARD'
import { PokeAtackType, PokeCard, PokeQueryCard } from "../types/PokeCardType";

export const useGetSingleCard = (pokeName: string) => {
    const [singltPokeData, setSingltPokeData] = useState<PokeCard[]>([])
    const [pokeSearch, { data, loading }] = useLazyQuery(SINGLE_POKE_CARD, {
        variables: {
            pokeName
        }
    })

    useEffect(() => {
        if (data) {
            const pokeList = data.pokemon_v2_pokemon.map((pokemon: PokeQueryCard) => {
                const type = pokemon.pokemon_v2_pokemontypes.map((type: PokeAtackType) => {
                    return type.pokemon_v2_type.name
                })
                return {
                    name: pokemon.name,
                    id: pokemon.id,
                    color: pokemon.pokemon_v2_pokemonspecy.pokemon_v2_pokemoncolor.name,
                    type
                }
            })
            setSingltPokeData(pokeList)
        }
    }, [data, loading])

    return {
        singltPokeData,
        searchLoader: loading,
        pokeSearch
    }
}