import React, { useContext } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import arrow from '../../../assets/icon/arrow.png'
import search from '../../../assets/icon/search.png'

import * as S from './styles'
import { PokemonContext } from "../../context/PokemonContext";

const SearchBar = () => {
    const { pokeSearch, searchValue, setSearchValue } = useContext(PokemonContext)
    return (
        <S.Wrapper>
            <S.Icon source={search} testID="searchIcon"/>
            <S.Input
                accessibilityHint="Type here to search pokemons"
                value={searchValue}
                onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
                    setSearchValue(e.nativeEvent.text)
                }}
                onPointerEnter={() => pokeSearch()}
            />
            <S.Submit onPress={() => pokeSearch()} accessibilityHint="Press to search">
                <S.Icon source={arrow} />
            </S.Submit>
        </S.Wrapper>
    )
}

export default SearchBar