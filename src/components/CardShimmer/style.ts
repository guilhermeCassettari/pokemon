import { getSize } from "../../helper/getSize";
import styled from "styled-components/native";

export const Wrapper = styled.View`
    height: 100%;
`

export const Line = styled.View`
    flex-direction: row;
`

export const CardWrapper = styled.View`
    width: ${getSize(140)};
    height: ${getSize(189)};
    border-radius: ${getSize(15)};
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: ${getSize(12)};
    margin-bottom: ${getSize(12)};
    margin-left: ${getSize(5)};
    margin-right: ${getSize(5)};
    background-color: #c5c5c5;
`

export const BackgroundImage = styled.Image`
    width: ${getSize(109)};
    height: ${getSize(109)};
    border-radius: ${getSize(55)};
    justify-content: center;
    align-items: center;
    border-radius: ${getSize(15)};
`