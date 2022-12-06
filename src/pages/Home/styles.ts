import styled from "styled-components/native";
import {scale} from 'react-native-size-matters'

export const FlatList = styled.FlatList`
    width: 100%;
`

export const TextPokeSize = styled.Text`
    font-weight: bold;
    font-size: ${scale(20)};
    color: #21386E;
    margin-top:${scale(20)};
    margin-bottom:${scale(20)};
`

export const Wrapper = styled.SafeAreaView`
    margin-left:${scale(15)};
    margin-right:${scale(15)};
    flex: 1;
    position: relative;
    justify-content: center;
    align-items: center;
`