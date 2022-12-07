import styled from "styled-components/native";
import { getSize } from "../../helper/getSize";


export const FlatList = styled.FlatList`
    width: 100%;
`

export const TextPokeSize = styled.Text`
    font-weight: bold;
    font-size: ${getSize(20)};
    color: #21386E;
    margin-top:${getSize(20)};
    margin-bottom:${getSize(20)};
`

export const Wrapper = styled.SafeAreaView`
    margin-left:${getSize(15)};
    margin-right:${getSize(15)};
    flex: 1;
    position: relative;
    justify-content: center;
    align-items: center;
`

export const WrapperAnimation = styled.View`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.59);    
    top: 0;
    width: 100%;
    height: 100%;
`