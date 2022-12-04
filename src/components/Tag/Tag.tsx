import React from "react";
import { ViewProps, Text } from "react-native";

import * as S from './styles'

type Props = {
    children: React.ReactNode
    color?: string
    isId?: string
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