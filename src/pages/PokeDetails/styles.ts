import styled, { css } from "styled-components/native";
import { scale } from 'react-native-size-matters'

interface Props {
    color?: string
    value?: number
}

export const Wrapper = styled.View`
    height: ${scale(400)};
    align-items: center;
    background-color: #FFF;
    margin-top: ${scale(20)};
    margin-right: ${scale(15)};
    margin-left: ${scale(15)};
    border-top-left-radius: ${scale(60)};
    border-top-right-radius: ${scale(60)};

    border-bottom-left-radius: ${scale(15)};
    border-bottom-right-radius: ${scale(15)};
`

export const CardWrapper = styled.View`
    width: 100%;
    height: ${scale(250)};
    background-color: #FFF;
    align-items: center;
    padding-left: ${scale(20)};
    padding-right: ${scale(20)};
    
`

export const HeaderWrapper = styled.View<Props>`
    ${({ theme, color }) => css`
        background-color: ${theme.colors.card.background[color]};
        flex-direction: row;
        width: 100%;
        height: ${scale(120)};
        align-items: center;
        padding-left: ${scale(20)};
        padding-right: ${scale(20)};
        border-top-left-radius: ${scale(15)};
        border-top-right-radius: ${scale(15)};
        position: relative;
        z-index: 99;
    `}
`

export const ImageWrapper = styled.View<Props>`
    ${({ theme, color }) => css`
        height: ${scale(121)};
        width: ${scale(121)};
        border-top-left-radius: ${scale(60)};
        border-top-right-radius: ${scale(60)};
        border-bottom-right-radius: ${scale(60)};
        border-bottom-left-radius: ${scale(60)};
        position: absolute;
        top: ${scale(10)};
        left: ${scale(20)};
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.card.backgroundImage[color]};
    `}
`

export const Image = styled.Image`
    height: ${scale(110)};
    width: ${scale(110)};
`

export const HeaderInfo = styled.View`
    width: 100%;
    height: ${scale(80)};
    justify-content: center;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: ${scale(140)};
`

export const TagWrapper = styled.View`
    width: ${scale(110)};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const PokeDescription = styled.View`
    margin-top: ${scale(10)};
    margin-bottom: ${scale(10)};
    justify-content: center;
    align-items: center;
    height: ${scale(45)};
`

export const SecondTagWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: ${scale(15)};
`

export const StatsWrapper = styled.View`
    justify-content: space-between;
    flex: 1;
    width: 100%;
`

export const Line = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
`

export const TagText = styled.Text`
    color: #395BA7;
    font-size: ${scale(10)};
    margin-bottom: ${scale(4)};

`

export const SingleTagWrapper = styled.View`
    justify-content: center;
    align-items: center;
`

export const DescriptionText = styled.Text`
    color: #21386E;
    font-size: ${scale(12)};
`

export const TextStatName = styled.Text`
    color: #21386E;
    font-size: ${scale(12)};
    font-weight: 600;
    width: ${scale(80)};
`

export const TextStatValue = styled.Text`
    color: #21386E;
    font-size: ${scale(12)};
    margin-right: ${scale(4)};
`

export const LevelWrapper = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const LevelBarWrapper = styled.View`
    width: ${scale(100)};
    height: ${scale(5)};
    background-color: #B7B7B8;
    margin-top: ${scale(3)};
    border-radius: ${scale(10)};
    position: relative;
`

export const LevelBar = styled.View<Props>`
    ${({ value, color }) => css`
        width: ${value ? value <= 100 ? scale(value) : scale(100) : 0};
        height: ${scale(5)};
        background-color: ${color}
        border-radius: ${scale(10)};
        position: absolute;
        top: 0;
        left: 0;
    `}
`

export const GenderWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${scale(118)};
`

export const GenderIcon = styled.Image`
    width: ${scale(12)};
    height: ${scale(12)};
    margin-right: ${scale(6)};
`

export const SingleGender = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`