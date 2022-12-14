import React, { useContext, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { PokemonContext } from "../../context/PokemonContext";
import PokeCard from '../../components/PokemonCard'
import SearchBar from "../../components/SearchBar";
import { Dimensions } from 'react-native';
import AnimatedLottieView from 'lottie-react-native'

import * as S from './styles'
import CardShimmer from "../../components/CardShimmer";
import EnterAnimation from "../../components/animations/EnterAnimation";
import FadeAnimation from "../../components/animations/FadeAnimation";

const windowWidth = Dimensions.get('window').width;
const Home = () => {
    const { card, loading, searchLoader, fetchMoreData } = useContext(PokemonContext)
    const [showShimmer, setShowShimmer] = useState(true)
    const fetchMorePokemons = () => {
        if (card.length >= 4) {
            fetchMoreData()
        }
    }

    useEffect(() => {
        if (showShimmer && !loading) {
            setShowShimmer(false)
        }
    }, [loading])
    return (
        <S.Wrapper>
            <FadeAnimation
                duration={800}
            >
                <EnterAnimation
                    duration={600}
                    delay={200}
                >
                    <S.TextPokeSize>
                        More than 1249 Pokemons for you choose your favorite
                    </S.TextPokeSize>
                </EnterAnimation>
                <EnterAnimation
                duration={600}>
                <SearchBar />
                </EnterAnimation>
                {loading && showShimmer ? (
                    <CardShimmer />
                ) : (
                    <FlatList
                        numColumns={2}
                        columnWrapperStyle={{
                            justifyContent: 'space-evenly',
                            width: Math.floor(windowWidth - 30)
                        }}
                        onEndReached={fetchMorePokemons}
                        onEndReachedThreshold={0.1}
                        data={card}
                        keyExtractor={pokemon => pokemon.id.toString()}
                        renderItem={({ item: pokemon }) => (
                            <PokeCard
                                pokemon={pokemon}
                                delay={(pokemon.enterAnimation)}
                            />
                        )}
                    />
                )}
                {(searchLoader || (!showShimmer && loading)) && (
                    <S.WrapperAnimation accessibilityHint="Await for pokemon initial loader">
                        <AnimatedLottieView
                            autoPlay={true}
                            source={require('../../../assets/loader/pokeLoader.json')}
                            loop={true}
                        />
                    </S.WrapperAnimation>
                )}
            </FadeAnimation>
        </S.Wrapper>
    )
}

export default Home