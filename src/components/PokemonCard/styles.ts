import styled, { css } from 'styled-components/native'
import { PokeCard } from '../../types/PokeCardType'
import {scale} from 'react-native-size-matters'


interface Props {
    color?: string
}

export const CardWrapper = styled.TouchableOpacity<Props>`
    ${({ theme, color }) => css`
        background-color: ${theme.colors.card.background[color]};
        width: ${scale(140)};
        height: ${scale(189)};
        border-radius: ${scale(15)};
        justify-content: center;
        align-items: center;
        position: relative;
        margin-top: ${scale(12)};
        margin-bottom: ${scale(12)};
    `}
`

export const TagIdWrapper = styled.View`
    position: absolute;
    top: ${scale(-10)};
`

export const BackgroundImage = styled.View<Props>`
    ${({ theme, color }) => css`
        width: ${scale(109)};
        height: ${scale(109)};
        border-radius: ${scale(55)};
        justify-content: center;
        align-items: center;
        opacity: 1;
        background-color: ${theme.colors.card.backgroundImage[color]};
    `}
`

export const Image = styled.Image`
    width: ${scale(93)};
    height: ${scale(93)};
`

export const TagWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: ${scale(7)};
`