import React from 'react'
import { render } from '@testing-library/react-native';
import { PokemonContext } from '../../../context/PokemonContext';
import PokeDetails from '../PokeDetails';
import { ContextProps } from '../../../types/PokeCardType';
import { ThemeContext } from 'styled-components/native';
import theme from '../../../theme';
import 'jest-styled-components'
import 'react-native-gesture-handler/jestSetup';
import 'react-native-reanimated'
import { MockedProvider } from '@apollo/client/testing';
import POKE_DETAILS from '../../../query/POKE_DETAILS';

const initialState: ContextProps = {
    card: [],
    loading: false,
    pokeData: [],
    pokeSearch: jest.fn(),
    searchLoader: false,
    searchValue: '',
    setSearchValue: jest.fn()
}

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');
    Reanimated.default.call = () => { };
    return Reanimated;
});

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
    };
});

const mocks = [
    {
        request: {
            query: POKE_DETAILS
        },
        result: {
            "data": {
                "pokemon_v2_pokemon": [
                    {
                        "height": 7,
                        "weight": 69,
                        "pokemon_v2_pokemonstats": [
                            {
                                "base_stat": 45,
                                "pokemon_v2_stat": {
                                    "name": "hp"
                                }
                            },
                            {
                                "base_stat": 49,
                                "pokemon_v2_stat": {
                                    "name": "attack"
                                }
                            },
                            {
                                "base_stat": 49,
                                "pokemon_v2_stat": {
                                    "name": "defense"
                                }
                            },
                            {
                                "base_stat": 65,
                                "pokemon_v2_stat": {
                                    "name": "special-attack"
                                }
                            },
                            {
                                "base_stat": 65,
                                "pokemon_v2_stat": {
                                    "name": "special-defense"
                                }
                            },
                            {
                                "base_stat": 45,
                                "pokemon_v2_stat": {
                                    "name": "speed"
                                }
                            }
                        ]
                    }
                ]
            },
            loading: false
        }
    }
];


describe('PokeDetails', () => {
    it("Should be render Correctly", () => {
        const { toJSON, getByText } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
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