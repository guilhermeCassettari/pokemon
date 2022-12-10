import React from 'react'
import headerImage from '../../../assets/International_Pokémon_logo.svg.png'
import { useNavigation } from '@react-navigation/native';
import * as S from './style'

import backArrow from '../../../assets/icon/back.png'
import FadeAnimation from '../animations/FadeAnimation';
import EnterAnimation from '../animations/EnterAnimation';

const Header = () => {
    const { getState, goBack } = useNavigation();
    const { index } = getState()
    return (
        <FadeAnimation duration={600}>
            <S.Wrapper>
                {!!index && (
                    <S.Touch onPress={() => goBack()}>
                        <S.Icon source={backArrow} />
                    </S.Touch>
                )}
                <EnterAnimation
                    duration={600}
                    delay={300}
                >
                    <S.Image source={headerImage} />
                </EnterAnimation>
            </S.Wrapper>
        </FadeAnimation>
    )
}

export default Header