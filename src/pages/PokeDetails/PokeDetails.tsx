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
import FadeAnimation from "../../components/animations/FadeAnimation";
import EnterAnimation from "../../components/animations/EnterAnimation";
import WidthAnimation from "../../components/animations/WidthAnimation";

type RouteParams = {
    pokemon: PokeCard;
};

const PokeDetails = () => {
    const route = useRoute();
    const { pokemon } = route.params as RouteParams;
    const { name, color, id, type: types } = pokemon

    const duration = 600

    const { fetchPokeDetais, pokeDetail, loading } = useGetPokeDetails()

    useEffect(() => {
        fetchPokeDetais(id)
    }, [])

    return (
        <FadeAnimation duration={duration} >
            <S.Wrapper>
                <S.HeaderWrapper color={color}>
                    <S.ImageWrapper color={color} >
                        <EnterAnimation
                            duration={800}
                            delay={300}
                        >
                            <S.Image source={getImgUrl(id)} />
                        </EnterAnimation>
                    </S.ImageWrapper>
                    <S.HeaderInfo>
                        <FadeAnimation
                            duration={duration}
                            delay={400}
                        >
                            <Tag
                                isId={true}
                                color={'default'}
                            >
                                {formatCardId(id)}
                            </Tag>
                        </FadeAnimation>
                        <FadeAnimation
                            duration={duration}
                            delay={500}
                        >
                            <Title>
                                {name}
                            </Title>
                        </FadeAnimation>
                        <S.TagWrapper>
                            {types.map((type, index) => {
                                return (
                                    <FadeAnimation
                                        duration={duration}
                                        delay={(index * 120) + 700}
                                    >
                                        <Tag
                                            key={index}
                                            isId={false}
                                            color={color}
                                        >
                                            {type}
                                        </Tag>
                                    </FadeAnimation>
                                )
                            })}
                        </S.TagWrapper>
                    </S.HeaderInfo>
                </S.HeaderWrapper>
                <S.CardWrapper>
                    {pokeDetail ? (
                        <>
                            <S.PokeDescription>
                                <FadeAnimation
                                    duration={duration}
                                >
                                    <S.DescriptionText> {pokeDetail?.description}</S.DescriptionText>
                                </FadeAnimation>
                            </S.PokeDescription>
                            <S.SecondTagWrapper>
                                <FadeAnimation
                                    duration={duration}
                                    delay={300}
                                >
                                    <S.SingleTagWrapper>
                                        <S.TagText>Wieght:</S.TagText>
                                        <Tag
                                            isId={false}
                                            color={color}
                                        >
                                            {pokeDetail?.weight}
                                        </Tag>
                                    </S.SingleTagWrapper>
                                </FadeAnimation>
                                <FadeAnimation
                                    duration={duration}
                                    delay={400}
                                >
                                    <S.SingleTagWrapper>
                                        <S.TagText>Height:</S.TagText>
                                        <Tag
                                            isId={false}
                                            color={color}
                                        >
                                            {pokeDetail?.height}
                                        </Tag>
                                    </S.SingleTagWrapper>
                                </FadeAnimation>
                                <FadeAnimation
                                    duration={duration}
                                    delay={500}
                                >
                                    <S.SingleTagWrapper>
                                        <S.TagText>Major Move:</S.TagText>
                                        <Tag
                                            isId={false}
                                            color={color}
                                        >
                                            {pokeDetail?.majorMove}
                                        </Tag>
                                    </S.SingleTagWrapper>
                                </FadeAnimation>
                            </S.SecondTagWrapper>
                            <S.StatsWrapper>
                                <FadeAnimation
                                    duration={duration}
                                    delay={600}
                                >
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
                                </FadeAnimation>
                                {pokeDetail?.stats.map((stat, index) => (
                                    <FadeAnimation
                                        duration={duration}
                                        delay={duration + (index * 100)}
                                    >
                                        <S.Line>
                                            <S.TextStatName>{stat.statName}</S.TextStatName>
                                            <S.LevelWrapper>
                                                <S.TextStatValue>{stat.stat}</S.TextStatValue>
                                                <S.LevelBarWrapper>
                                                    {stat.statName != 'Total' ? (
                                                        <WidthAnimation
                                                            duration={duration}
                                                            delay={700 + (index * 100)}
                                                        >
                                                            <S.LevelBar
                                                                value={stat.stat}
                                                                color={stat.stat < 50 ? '#E63950' : '#45C0A3'}
                                                            />
                                                        </WidthAnimation>
                                                    ) : (
                                                        <WidthAnimation
                                                            duration={duration}
                                                            delay={700 + (index * 100)}
                                                        >
                                                            <S.LevelBar
                                                                value={(stat.stat / 6)}
                                                                color={(stat.stat / 6) < 50 ? '#E63950' : '#45C0A3'}
                                                            />
                                                        </WidthAnimation>
                                                    )}
                                                </S.LevelBarWrapper>
                                            </S.LevelWrapper>
                                        </S.Line>
                                    </FadeAnimation>
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
        </FadeAnimation>
    )
}

export default PokeDetails 