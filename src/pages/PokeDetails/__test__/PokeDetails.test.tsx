import React from 'react'
import { render } from '@testing-library/react-native';
import { PokemonContext } from '../../../context/PokemonContext';
import PokeDetails from '../PokeDetails';
import { ThemeContext } from 'styled-components/native';
import theme from '../../../theme';
import 'jest-styled-components'
import 'react-native-gesture-handler/jestSetup';
import 'react-native-reanimated'
import { MockedProvider } from '@apollo/client/testing';
import { initialState } from '../../../__mocks__/initialState';
import { apolloMock } from '../../../__mocks__/apolloMock';

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');
    Reanimated.default.call = () => { };
    return Reanimated;
});

jest.mock('@react-navigation/native')

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => {
    return {
        useRoute: () => {
            return {
                params: {
                    pokemon: {
                        name: 'testName',
                        color: 'red',
                        id: 1,
                        type: [
                            'typeOne',
                            'typeTwo'
                        ]
                    }
                }
            }
        },
        useNavigation: jest.fn()
    };
});

describe('PokeDetails', () => {
    it("Should be render Correctly", () => {
        const { toJSON, getByText } = render(
            <MockedProvider mocks={[apolloMock.pokeDetails]} addTypename={false}>
                <ThemeContext.Provider value={theme}>
                    <PokemonContext.Provider value={{ ...initialState, loading: true }} >
                        <PokeDetails />
                    </PokemonContext.Provider>
                </ThemeContext.Provider>
            </MockedProvider>
        )

        expect(getByText(/# 001/i)).toBeTruthy()
        expect(getByText(/testName/i)).toBeTruthy()
        expect(getByText(/typeOne/i)).toBeTruthy()
        expect(getByText(/typetwo/i)).toBeTruthy()

        expect(toJSON()).toMatchSnapshot()
    })

})