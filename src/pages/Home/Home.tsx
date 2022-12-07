import React, { useContext } from "react";
import { FlatList, Text } from "react-native";
import { PokemonContext } from "../../context/PokemonContext";
import PokeCard from '../../components/PokemonCard'
import SearchBar from "../../components/SearchBar";
import { Dimensions } from 'react-native';
import AnimatedLottieView from 'lottie-react-native'

import * as S from './styles'
import CardShimmer from "../../components/CardShimmer";

const windowWidth = Dimensions.get('window').width;
const Home = () => {
    const { card, loading, searchLoader } = useContext(PokemonContext)

    return (
        <S.Wrapper>
            <S.TextPokeSize>
                More than 1249 Pokemons for you choose your favorite
            </S.TextPokeSize>
            <SearchBar />
            {loading ? (
                <CardShimmer />
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
            {searchLoader && (
                <S.WrapperAnimation accessibilityHint="Await for pokemon initial loader">
                    <AnimatedLottieView
                        autoPlay={true}
                        source={require('../../../assets/loader/pokeLoader.json')}
                        loop={true}
                    />
                </S.WrapperAnimation>
            )}
        </S.Wrapper>
    )
}

export default Home