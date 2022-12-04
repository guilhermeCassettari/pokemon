import styled, { css } from 'styled-components/native'
import { PokeCard } from '../../types/PokeCardType'





export const CardWrapper = styled.View<PokeCard>`
    ${({ theme, color }) => css`
        background-color: ${theme.colors.card.background[color]};
        width: 140px;
        height: 189px;
        border-radius: 15px;
        justify-content: center;
        align-items: center;
        position: relative;
        margin: 11.5px 5px;
    `}
`

export const TagIdWrapper = styled.View`
    position: absolute;
    top: -10px;
`

export const BackgroundImage = styled.View<PokeCard>`
    ${({ theme, color }) => css`
        width: 109px;
        height: 109px;
        border-radius: 50px;
        justify-content: center;
        align-items: center;
        opacity: 1;
        background-color: ${theme.colors.card.backgroundImage[color]};
    `}
`

export const Image = styled.Image`
    width: 93px;
    height: 93px;
`

export const TagWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 7px;
`