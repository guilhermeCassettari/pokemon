import React, { ReactNode } from "react";
import { ViewProps, Text } from "react-native";
import { PokeType } from "../../types/PokeCardType";

import * as S from './styles'

type Props = {
    children: string | number 
    color?: string
    isId?: boolean
} & ViewProps

const Tag = ({ children, color, isId }: Props) => {

    return (
        <S.TagWrpapper
            color={color}
            isId={isId}
        >
            <S.Text
                color={color}
                isId={isId}
            >
                {children}
            </S.Text>
        </S.TagWrpapper>

    )
}

export default Tag