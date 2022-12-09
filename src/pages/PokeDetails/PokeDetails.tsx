import React, { useEffect, useMemo } from "react";
import { useRoute } from '@react-navigation/native';
import { PokeCard } from "../../types/PokeCardType";
import useGetPokeDetails from "../../hooks/useGetPokeDetails";

import * as S from './styles'
import { getImgUrl } from "../../helper/getImgUrl";
import { Title } from "../../components/Text/Title";
import Tag from "../../components/Tag";
import { formatCardId } from "../../helper/formatCardId";

import male from '../../../assets/icon/male.png'
import female from '../../../assets/icon/female.png'
import AnimatedLottieView from "lottie-react-native";

type RouteParams = {
    pokemon: PokeCard;
};

const PokeDetails = () => {
    const route = useRoute();
    const { pokemon } = route.params as RouteParams;
    const { name, color, id, type: types } = pokemon

    const { fetchPokeDetais, pokeDetail, loading } = useGetPokeDetails()

    useEffect(() => {
        fetchPokeDetais(id)
    }, [])

    return (
        <S.Wrapper>
            <S.HeaderWrapper color={color}>
                <S.ImageWrapper color={color} >
                    <S.Image source={getImgUrl(id)} />
                </S.ImageWrapper>
                <S.HeaderInfo>
                    <Tag
                        isId={true}
                        color={'default'}
                    >
                        {formatCardId(id)}
                    </Tag>
                    <Title>
                        {name}
                    </Title>
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
                </S.HeaderInfo>
            </S.HeaderWrapper>
            <S.CardWrapper>
                {pokeDetail ? (
                    <>
                        <S.PokeDescription>
                            <S.DescriptionText> {pokeDetail?.description}</S.DescriptionText>
                        </S.PokeDescription>
                        <S.SecondTagWrapper>
                            <S.SingleTagWrapper>
                                <S.TagText>Wieght:</S.TagText>
                                <Tag
                                    isId={false}
                                    color={color}
                                >
                                    {pokeDetail?.weight}
                                </Tag>
                            </S.SingleTagWrapper>
                            <S.SingleTagWrapper>
                                <S.TagText>Height:</S.TagText>
                                <Tag
                                    isId={false}
                                    color={color}
                                >
                                    {pokeDetail?.height}
                                </Tag>
                            </S.SingleTagWrapper>
                            <S.SingleTagWrapper>
                                <S.TagText>Major Move:</S.TagText>
                                <Tag
                                    isId={false}
                                    color={color}
                                >
                                    {pokeDetail?.majorMove}
                                </Tag>

                            </S.SingleTagWrapper>
                        </S.SecondTagWrapper>
                        <S.StatsWrapper>
                            <S.Line>
                                <S.TextStatName>Gender</S.TextStatName>
                                <S.GenderWrapper>
                                    <S.SingleGender>
                                        <S.GenderIcon source={male} />
                                        <S.TextStatValue>{pokeDetail?.gender.male}%</S.TextStatValue>
                                    </S.SingleGender>
                                    <S.SingleGender>
                                        <S.GenderIcon source={female} />
                                        <S.TextStatValue>{pokeDetail?.gender.female}%</S.TextStatValue>
                                    </S.SingleGender>
                                </S.GenderWrapper>
                            </S.Line>
                            {pokeDetail?.stats.map((stat) => (
                                <S.Line>
                                    <S.TextStatName>{stat.statName}</S.TextStatName>
                                    <S.LevelWrapper>
                                        <S.TextStatValue>{stat.stat}</S.TextStatValue>
                                        <S.LevelBarWrapper>
                                            {stat.statName != 'Total' ? (
                                                <S.LevelBar
                                                    value={stat.stat}
                                                    color={stat.stat < 50 ? '#E63950' : '#45C0A3'}
                                                />
                                            ) : (
                                                <S.LevelBar
                                                    value={(stat.stat / 6)}
                                                    color={(stat.stat / 6) < 50 ? '#E63950' : '#45C0A3'}
                                                />
                                            )}
                                        </S.LevelBarWrapper>
                                    </S.LevelWrapper>
                                </S.Line>
                            ))}
                        </S.StatsWrapper>
                    </>
                ) : (
                    <S.WrapperAnimation>
                        <AnimatedLottieView
                            autoPlay={true}
                            source={require('../../../assets/loader/pokeLoader.json')}
                            loop={true}
                        />
                    </S.WrapperAnimation>
                )}
            </S.CardWrapper>
        </S.Wrapper>
    )
}

export default PokeDetails 