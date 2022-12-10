import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { PokeCard } from '../../types/PokeCardType'
import { getImgUrl } from '../../helper/getImgUrl'
import { Title } from '../Text/Title'

import * as S from './styles'
import Tag from '../Tag'
import { RootStackParamList } from '../../routes/app.routes';
import { TouchableOpacityProps } from 'react-native';
import { formatCardId } from '../../helper/formatCardId';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TranslateYAnimation from '../animations/TranslateYAnimation';
import EnterAnimation from '../animations/EnterAnimation';
import FadeAnimation from '../animations/FadeAnimation';

type Props = {
    pokemon: PokeCard,
    delay?: number
} & TouchableOpacityProps

const duration = 600

const PokemonCard: React.FC<Props> = ({ pokemon, delay = 0 }) => {
    const { name, color, id, type: types } = pokemon
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    function handleNavigation(pokemon: PokeCard) {
        navigation.navigate('Pokedetails', {
            pokemon
        })
    }

    return (
        <FadeAnimation
            duration={duration}
        >
            <S.CardWrapper color={color}
                onPress={() => {
                    handleNavigation(pokemon)
                }}
            >
                <S.TagIdWrapper>
                    <TranslateYAnimation
                        duration={duration}
                        delay={delay}
                    >
                        <Tag
                            isId={true}
                            color={'default'}
                        >
                            {formatCardId(id)}
                        </Tag>
                    </TranslateYAnimation>
                </S.TagIdWrapper>
                <S.BackgroundImage color={color}>
                    <EnterAnimation
                        duration={duration}
                        delay={delay + 200}
                    >
                        <S.Image source={getImgUrl(id)} />
                    </EnterAnimation>
                </S.BackgroundImage>
                <EnterAnimation
                    duration={duration}
                    delay={delay + 300}
                >
                    <Title>{name}</Title>
                </EnterAnimation>
                <S.TagWrapper>
                    {types.map((type, index) => {
                        return (
                            <EnterAnimation
                                duration={duration}
                                delay={delay + (index * 200)}
                                key={index}
                            >
                                <Tag                                    
                                    isId={false}
                                    color={color}
                                >
                                    {type}
                                </Tag>
                            </EnterAnimation>
                        )
                    })}
                </S.TagWrapper>
            </S.CardWrapper>
        </FadeAnimation>
    )
}

export default PokemonCard