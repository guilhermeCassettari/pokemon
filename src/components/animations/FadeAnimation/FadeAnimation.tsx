import React, { useEffect } from "react";
import { ViewProps } from "react-native";
import { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated'

import * as S from './styles'

type FadeAnimationProps = {
    delay?: number
    duration: number
    children: React.ReactNode
} & ViewProps

const FadeAnimation = ({ delay = 0, duration, children, ...rest }: FadeAnimationProps) => {
    const cardOpacity = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => {
        'worklet'
        return {
            opacity: cardOpacity.value,
        }
    })

    useEffect(() => {
        cardOpacity.value = withDelay(delay, withTiming(1, { duration }))
    }, [])

    return (
        <S.AnimationContainer {...rest} style={animatedStyle}>
            {children}
        </S.AnimationContainer>
    )
}

export default FadeAnimation
