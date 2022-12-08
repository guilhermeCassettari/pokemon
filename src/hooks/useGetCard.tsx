import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import POKE_CARD from '../query/POKE_CARD'
import { PokeAtackType, PokeCard, PokeQueryCard } from "../types/PokeCardType";

export const useGetCard = () => {
    const [pokeData, setPokeData] = useState<PokeCard[]>([])
    const { data, loading, error } = useQuery(POKE_CARD, {
        fetchPolicy: "cache-first",
        returnPartialData: true
    })

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
    
    return {
        pokeData,
        loading,
    }
}