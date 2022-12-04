import React, { useMemo } from 'react'
import { Text } from 'react-native'
import { PokeCard } from '../../types/PokeCardType'
import { getImgUrl } from '../../helper/getImgUrl'
import { Title } from '../Text/Title'

import * as S from './styles'
import Tag from '../Tag'

interface Props {
    pokemon: PokeCard
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
    const { name, color, id, type: types } = pokemon

    const url = useMemo(() => {
        return getImgUrl(id)
    }, [id])

    console.log(types)
    return (
        <S.CardWrapper color={color}>
            <S.TagIdWrapper>
                <Tag
                    isId={true}
                    color={'default'}
                >
                    #00{id}
                </Tag>
            </S.TagIdWrapper>
            <S.BackgroundImage color={color}>
                <S.Image source={url} />
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