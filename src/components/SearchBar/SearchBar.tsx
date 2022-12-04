import React, { useState } from "react";
import { Text, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { ChangeEvent } from 'react';

import seachIcon from '../../../assets/icon/searchIcon.svg'



import * as S from './styles'

const SearchBar = () => {
    const [value, setValue] = useState('')
    return (
        <S.Wrapper>
            <S.Icon

            />
            <S.Input
                placeholder="Search Pokémon"
                value={value}
                onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>): void=> {                    
                    setValue(e.nativeEvent.text)
                }}
            />
            <S.Button><Text>{'->'}</Text></S.Button>
        </S.Wrapper>
    )
}

export default SearchBar