
import styled from "styled-components/native";
import { getSize } from "../../helper/getSize";


export const Wrapper = styled.View`
    width: 100%;
    height: ${getSize(40)};
    border-radius: ${getSize(20)};
    border: 1px solid #3663AD;
    justify-content: space-between;
    align-items: center;
    padding-top: ${getSize(12)};
    padding-bottom: ${getSize(12)};
    padding-left: ${getSize(14)};
    padding-right: ${getSize(14)};
    flex-direction: row;
    margin-bottom: ${getSize(20)};
`

export const Submit = styled.TouchableOpacity``

export const Icon = styled.Image`
    width: ${getSize(25)};
    height: ${getSize(25)};
    
`

export const Input = styled.TextInput`
    width: ${getSize(220)};
    font-size: ${getSize(14)};
    text-align: left;
    color: #21386E;
    opacity: 0.5;
`

export const Button = styled.TouchableOpacity`
    width: ${getSize(15)};
    height: ${getSize(15)};
    background-color: '#000';
`

