import React from 'react'
import { FlatList } from 'react-native'
import shimmer from '../../../assets/shimmer.gif'
import { Dimensions } from 'react-native';
import * as S from './style'

const shimmerLength = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]

const CardShimmer = () => {
    const windowWidth = Dimensions.get('window').width;
    return (
        <FlatList
            numColumns={2}
            columnWrapperStyle={{
                justifyContent: 'space-evenly',
                width: Math.floor(windowWidth - 30)
            }}
            data={shimmerLength}
            keyExtractor={item => item.id}
            
            renderItem={() => (
                <S.CardWrapper testID="Shimmer">
                    <S.BackgroundImage source={shimmer} />
                </S.CardWrapper>
            )}
        />
    )
}

export default CardShimmer