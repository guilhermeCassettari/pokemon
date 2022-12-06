import React, { useContext } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { PokemonContext } from "../../context/PokemonContext";
import PokeCard from '../../components/PokemonCard'
import SearchBar from "../../components/SearchBar";
import { Dimensions } from 'react-native';
import {scale} from 'react-native-size-matters'

import * as S from './styles'

const windowWidth = Dimensions.get('window').width;
const Home = () => {
    const { card, loading, searchLoader } = useContext(PokemonContext)

    return (
        <S.Wrapper>
            <S.TextPokeSize>
                More than 1249 Pokemons for you choose your favorite
            </S.TextPokeSize>
            <SearchBar />
            {(loading || searchLoader) ? (
                <Text>Loading</Text>
            ) : (
                <FlatList
                    numColumns={2}
                    columnWrapperStyle={{ 
                        justifyContent: 'space-evenly', 
                        width: Math.floor(windowWidth - 30)
                    }}
                    data={card}
                    keyExtractor={pokemon => pokemon.id.toString()}
                    renderItem={({ item: pokemon }) => (
                        <PokeCard
                            pokemon={pokemon}
                        />
                    )}
                />
            )}
        </S.Wrapper>
    )
}

export default Home