import React, { useContext } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { PokemonContext } from "../../context/PokemonContext";
import PokeCard from '../../components/PokemonCard'
import SearchBar from "../../components/SearchBar";

const Home = () => {
    const { pokeData, loading } = useContext(PokemonContext)

    return (
        <>
            <SearchBar/>
            {loading ? (
                <Text>Loading</Text>
            ) : (
                <FlatList
                    numColumns={2}
                    data={pokeData}
                    keyExtractor={pokemon => pokemon.id.toString()}
                    renderItem={({ item: pokemon }) => (
                        <PokeCard
                            pokemon={pokemon}
                        />
                    )}
                />
            )}
        </>
    )
}

export default Home