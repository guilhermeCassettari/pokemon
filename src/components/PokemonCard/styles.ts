import styled, { css } from 'styled-components/native'
import { getSize } from "../../helper/getSize";


interface Props {
    color?: string
}

export const CardWrapper = styled.TouchableOpacity<Props>`
    ${({ theme, color }) => css`
        background-color: ${theme.colors.card.background[color]};
        width: ${getSize(140)};
        height: ${getSize(189)};
        border-radius: ${getSize(15)};
        justify-content: center;
        align-items: center;
        position: relative;
        margin-top: ${getSize(12)};
        margin-bottom: ${getSize(12)};
    `}
`

export const TagIdWrapper = styled.View`
    position: absolute;
    top: ${getSize(-10)};
`

export const BackgroundImage = styled.View<Props>`
    ${({ theme, color }) => css`
        width: ${getSize(109)};
        height: ${getSize(109)};
        border-radius: ${getSize(55)};
        justify-content: center;
        align-items: center;
        opacity: 1;
        background-color: ${theme.colors.card.backgroundImage[color]};
    `}
`

export const Image = styled.Image`
    width: ${getSize(93)};
    height: ${getSize(93)};
`

export const TagWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: ${getSize(7)};
`