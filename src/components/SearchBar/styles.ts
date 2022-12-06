
import styled from "styled-components/native";
import {scale} from 'react-native-size-matters'

export const Wrapper = styled.View`
    width: 100%;
    height: ${scale(40)};
    border-radius: ${scale(20)};
    border: 1px solid #3663AD;
    justify-content: space-between;
    align-items: center;
    padding-top: ${scale(12)};
    padding-bottom: ${scale(12)};
    padding-left: ${scale(14)};
    padding-right: ${scale(14)};
    flex-direction: row;
    margin-bottom: ${scale(20)};
`

export const Submit = styled.TouchableOpacity``

export const Icon = styled.Image`
    width: ${scale(25)};
    height: ${scale(25)};
    
`

export const Input = styled.TextInput`
    width: ${scale(220)};
    font-size: ${scale(14)};
    text-align: left;
    color: #21386E;
    opacity: 0.5;
`

export const Button = styled.TouchableOpacity`
    width: ${scale(15)};
    height: ${scale(15)};
    background-color: '#000';
`

