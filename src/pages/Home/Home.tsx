import React, { useContext } from "react";
import { FlatList, Text, View } from "react-native";
import { PokemonContext } from "../../context/PokemonContext";

const Home = () => {
    const { pokeData, loading } = useContext(PokemonContext)
    
    return (
        <>
            { loading ? (
                <Text>Loading</Text>
            ) : (
                <FlatList
                    data={pokeData}
                    keyExtractor={pokemon => pokemon.id.toString()}
                    renderItem={({ item: pokemon }) => (
                        <Text> {pokemon.name} </Text>
                    )}
                />
            )}
        </>
    )
}

export default Home