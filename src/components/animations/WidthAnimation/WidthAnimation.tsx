import React, { useEffect } from "react";
import { ViewProps } from "react-native";
import { useSharedValue, useAnimatedStyle, withTiming, Easing, withDelay } from 'react-native-reanimated'

import * as S from './styles'

type WidthAnimationProps = {
    delay?: number
    duration: number
    children: React.ReactNode
} & ViewProps

const WidthAnimation = ({ delay = 0, duration, children, ...rest }: WidthAnimationProps) => {
    const size = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => {
        'worklet'
        return {
            transform: [
                { scale: size.value }
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

export default WidthAnimation
