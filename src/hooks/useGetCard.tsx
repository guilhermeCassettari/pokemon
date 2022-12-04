import React from "react";
import { useQuery } from "@apollo/client";
import {POKE_CARD} from '../query/pokeCard'

export const useGetCard = () => {
    const { data, loading } = useQuery(POKE_CARD)
    
    return {
        data,
        loading,
    }
}