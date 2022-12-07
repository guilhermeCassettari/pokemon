import styled, { css } from "styled-components/native";
import { getSize } from "../../helper/getSize";


interface Props {
   color?: string
   isId?: boolean | undefined
}

export const TagWrpapper = styled.View<Props>`
     ${({theme, isId, color}) => css`
        border-radius: ${getSize(10)};
        background-color: ${isId ? theme.colors.id : theme.colors.card.boxType[color]};
        padding-left:${getSize(10)};
        padding-right:${getSize(10)};
        padding-top:${getSize(1)};
        padding-bottom:${getSize(1)};

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