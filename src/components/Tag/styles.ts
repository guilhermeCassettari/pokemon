import styled, { css } from "styled-components/native";
import {scale} from 'react-native-size-matters'

interface Props {
   color?: string
   isId?: boolean | undefined
}

export const TagWrpapper = styled.View<Props>`
     ${({theme, isId, color}) => css`
        border-radius: ${scale(10)};
        background-color: ${isId ? theme.colors.id : theme.colors.card.boxType[color]};
        padding-left:${scale(10)};
        padding-right:${scale(10)};
        padding-top:${scale(1)};
        padding-bottom:${scale(1)};

        justify-content: center;
        align-items: center;
    `}
`

export const Text = styled.Text<Props>`
     ${({ theme, color, isId }) => css` 
        text-transform: capitalize;
        color: ${isId ? theme.colors.black : theme.colors.card.text[color]};;
     `}
`