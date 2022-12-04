import React from "react";
import { TextProps } from 'react-native'

import * as S from './styles'

type Props = {
    children: React.ReactNode
} & TextProps

export const Title = ({children}: Props) => {
    return (
        <S.Title>
            {children}
        </S.Title>
    )
}

