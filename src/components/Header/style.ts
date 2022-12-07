import styled, { } from "styled-components/native";
import { getSize } from "../../helper/getSize";

export const Wrapper = styled.View`
    width: 100%;
    height: ${getSize(75)};
    background-color: #21386E;
    border-bottom-left-radius: ${getSize(15)};
    border-bottom-right-radius: ${getSize(15)};
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Image = styled.Image`
    width: ${getSize(122)};
    height: ${getSize(45)};
`

export const Icon = styled.Image`
    width: ${getSize(34)};
    height: ${getSize(32)};
`

export const Touch = styled.TouchableOpacity`
position: absolute;
top: ${getSize(25)};
left: ${getSize(12)};
`