import React, { useEffect } from "react";
import { ViewProps } from "react-native";
import { useSharedValue, useAnimatedStyle, withTiming, Easing, withDelay } from 'react-native-reanimated'

import * as S from './styles'

type EnterAnimationProps = {
    delay?: number
    duration: number
    children: React.ReactNode
} & ViewProps

const EnterAnimation = ({ delay = 0, duration, children, ...rest }: EnterAnimationProps) => {
    const size = useSharedValue(0.4)

    const animatedStyle = useAnimatedStyle(() => {
        'worklet'
        return {
            transform: [
                {
                    scale: size.value
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

export default EnterAnimation
