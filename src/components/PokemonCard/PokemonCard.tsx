import React, { useMemo } from 'react'
import { useNavigation } from '@react-navigation/native';

import { PokeCard } from '../../types/PokeCardType'
import { getImgUrl } from '../../helper/getImgUrl'
import { Title } from '../Text/Title'

import * as S from './styles'
import Tag from '../Tag'
import { RootStackParamList } from '../../reoutes/app.routes';
import { TouchableOpacityProps } from 'react-native';
import { formatCardId } from '../../helper/formatCardId';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
    pokemon: PokeCard
} & TouchableOpacityProps 

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
    const { name, color, id, type: types } = pokemon
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    function handleNavigation(pokemon: PokeCard) {
        navigation.navigate('Pokedetails', {
            pokemon
        })
    }

    return (
        <S.CardWrapper color={color}
            onPress={() => {
                handleNavigation(pokemon)
            }}
        >
            <S.TagIdWrapper>
                <Tag
                    isId={true}
                    color={'default'}
                >
                    {formatCardId(id)}
                </Tag>
            </S.TagIdWrapper>
            <S.BackgroundImage color={color}>
                <S.Image source={getImgUrl(id)} />
            </S.BackgroundImage>
            <Title>{name}</Title>
            <S.TagWrapper>
                {types.map((type, index) => {
                    return (
                        <Tag
                            key={index}
                            isId={false}
                            color={color}
                        >
                            {type}
                        </Tag>
                    )
                })}
            </S.TagWrapper>
        </S.CardWrapper>
    )
}

export default PokemonCard