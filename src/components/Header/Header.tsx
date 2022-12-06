import React from 'react'
import headerImage from '../../../assets/International_Pokémon_logo.svg.png'
import { useNavigation } from '@react-navigation/native';
import * as S from './style'

import backArrow from '../../../assets/icon/back.png'

const Header = () => {
    const { getState, goBack } = useNavigation();
    const { index } = getState()
    return (
        <S.Wrapper>
            {!!index && (
                <S.Touch onPress={() => goBack()}>
                    <S.Icon source={backArrow} />
                </S.Touch>
            )}
            <S.Image source={headerImage} />
        </S.Wrapper>
    )
}

export default Header