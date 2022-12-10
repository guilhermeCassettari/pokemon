import React, { useEffect } from "react";
import { useWindowDimensions, ViewProps } from "react-native";
import { useSharedValue, useAnimatedStyle, withTiming, Easing, withDelay } from 'react-native-reanimated'

import * as S from './styles'

type TranslateYAnimationProps = {
    delay?: number
    duration: number
    children: React.ReactNode
} & ViewProps

const TranslateYAnimation = ({ delay = 0, duration, children, ...rest }: TranslateYAnimationProps) => {
    const { width: displayWidth } = useWindowDimensions()

    const size = useSharedValue(0.05 * displayWidth)

    const animatedStyle = useAnimatedStyle(() => {
        'worklet'
        return {
            transform: [
                {
                    translateY: - size.value
                }
            ]
        }
    })

    useEffect(() => {
        size.value = withDelay(delay, withTiming(1, {
            duration,
            easing: Easing.out(Easing.exp)
        }))
    }, [])

    return (
        <S.AnimationContainer {...rest} style={animatedStyle}>
            {children}
        </S.AnimationContainer>
    )
}

export default TranslateYAnimation
