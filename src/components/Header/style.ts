import styled, { } from "styled-components/native";
import { scale } from 'react-native-size-matters'

export const Wrapper = styled.View`
    width: 100%;
    height: ${scale(75)};
    background-color: #21386E;
    border-bottom-left-radius: ${scale(15)};
    border-bottom-right-radius: ${scale(15)};
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Image = styled.Image`
    width: ${scale(122)};
    height: ${scale(45)};
`

export const Icon = styled.Image`
    width: ${scale(34)};
    height: ${scale(32)};
`

export const Touch = styled.TouchableOpacity`
position: absolute;
top: ${scale(25)};
left: ${scale(12)};
`