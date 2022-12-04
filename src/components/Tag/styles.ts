import styled, { css } from "styled-components/native";

export const TagWrpapper = styled.View`
     ${({theme, isId, color}) => css`
        border-radius: 10px;
        background-color: ${isId ? theme.colors.id : theme.colors.card.boxType[color]};
        padding:0  10px;
        justify-content: center;
        align-items: center;
    `}
`

export const Text = styled.Text`
     ${({ theme, color, isId }) => css` 
        text-transform: capitalize;
        color: ${isId ? theme.colors.black : theme.colors.card.text[color]};;
     `}
`