import styled, { css } from "styled-components/native";
import { getSize } from "../../helper/getSize";


interface Props {
    color?: string
    value?: number
}

export const Wrapper = styled.View`
    height: ${getSize(400)};
    align-items: center;
    background-color: #FFF;
    margin-top: ${getSize(20)};
    margin-right: ${getSize(15)};
    margin-left: ${getSize(15)};
    border-top-left-radius: ${getSize(60)};
    border-top-right-radius: ${getSize(60)};

    border-bottom-left-radius: ${getSize(15)};
    border-bottom-right-radius: ${getSize(15)};
`

export const CardWrapper = styled.View`
    width: 100%;
    height: ${getSize(250)};
    background-color: #FFF;
    align-items: center;
    padding-left: ${getSize(20)};
    padding-right: ${getSize(20)};
    
`

export const HeaderWrapper = styled.View<Props>`
    ${({ theme, color }) => css`
        background-color: ${theme.colors.card.background[color]};
        flex-direction: row;
        width: 100%;
        height: ${getSize(120)};
        align-items: center;
        padding-left: ${getSize(20)};
        padding-right: ${getSize(20)};
        border-top-left-radius: ${getSize(15)};
        border-top-right-radius: ${getSize(15)};
        position: relative;
        z-index: 99;
    `}
`

export const ImageWrapper = styled.View<Props>`
    ${({ theme, color }) => css`
        height: ${getSize(121)};
        width: ${getSize(121)};
        border-top-left-radius: ${getSize(60)};
        border-top-right-radius: ${getSize(60)};
        border-bottom-right-radius: ${getSize(60)};
        border-bottom-left-radius: ${getSize(60)};
        position: absolute;
        top: ${getSize(10)};
        left: ${getSize(20)};
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.card.backgroundImage[color]};
    `}
`

export const Image = styled.Image`
    height: ${getSize(110)};
    width: ${getSize(110)};
`

export const HeaderInfo = styled.View`
    width: 100%;
    height: ${getSize(80)};
    justify-content: center;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: ${getSize(140)};
`

export const TagWrapper = styled.View`
    width: ${getSize(110)};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const PokeDescription = styled.View`
    margin-top: ${getSize(10)};
    margin-bottom: ${getSize(10)};
    justify-content: center;
    align-items: center;
    height: ${getSize(45)};
`

export const SecondTagWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: ${getSize(15)};
`

export const StatsWrapper = styled.View`
    justify-content: space-between;
    flex: 1;
    width: 100%;
`

export const WrapperAnimation = styled.View `
    margin-top: ${getSize(50)};
    width: ${getSize(200)};
    height: ${getSize(200)};
`

export const Line = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;
`

export const TagText = styled.Text`
    color: #395BA7;
    font-size: ${getSize(10)};
    margin-bottom: ${getSize(4)};

`

export const SingleTagWrapper = styled.View`
    justify-content: center;
    align-items: center;
`

export const DescriptionText = styled.Text`
    color: #21386E;
    font-size: ${getSize(12)};
`

export const TextStatName = styled.Text`
    color: #21386E;
    font-size: ${getSize(12)};
    font-weight: 600;
    width: ${getSize(80)};
`

export const TextStatValue = styled.Text`
    color: #21386E;
    font-size: ${getSize(12)};
    margin-right: ${getSize(4)};
`

export const LevelWrapper = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const LevelBarWrapper = styled.View`
    width: ${getSize(100)};
    height: ${getSize(5)};
    background-color: #B7B7B8;
    margin-top: ${getSize(3)};
    border-radius: ${getSize(10)};
    position: relative;
`

export const LevelBar = styled.View<Props>`
    ${({ value, color }) => css`
        width: ${value ? value <= 100 ? getSize(value) : getSize(100) : 0};
        height: ${getSize(5)};
        background-color: ${color}
        border-radius: ${getSize(10)};
        position: absolute;
        top: 0;
        left: 0;
    `}
`

export const GenderWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${getSize(118)};
`

export const GenderIcon = styled.Image`
    width: ${getSize(12)};
    height: ${getSize(12)};
    margin-right: ${getSize(6)};
`

export const SingleGender = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`