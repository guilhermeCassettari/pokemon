import React from 'react'
import { render } from '@testing-library/react-native';
import { PokemonProvider } from '../../../context/PokemonContext';
import SearchBar from '../SearchBar';
import { MockedProvider } from '@apollo/client/testing'
import POKE_CARD from '../../../query/POKE_CARD';

const mocks = [
    {
        request: {
            query: POKE_CARD
        },
        result: {
            data: {
                "pokemon_v2_pokemon": [
                    {
                        "id": 1,
                        "name": "bulbasaur",
                        "pokemon_v2_pokemonspecy": {
                            "pokemon_v2_pokemoncolor": {
                                "name": "green"
                            }
                        },
                        "pokemon_v2_pokemontypes": [
                            {
                                "pokemon_v2_type": {
                                    "name": "grass"
                                }
                            },
                            {
                                "pokemon_v2_type": {
                                    "name": "poison"
                                }
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "ivysaur",
                        "pokemon_v2_pokemonspecy": {
                            "pokemon_v2_pokemoncolor": {
                                "name": "green"
                            }
                        },
                        "pokemon_v2_pokemontypes": [
                            {
                                "pokemon_v2_type": {
                                    "name": "grass"
                                }
                            },
                            {
                                "pokemon_v2_type": {
                                    "name": "poison"
                                }
                            }
                        ]
                    }
                ]
            }
        }
    }
];

describe('SeatchBar', () => {
    it('Should be render correctly', async () => {
        const { toJSON, getByA11yHint } = render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <PokemonProvider>
                    <SearchBar />
                </PokemonProvider>
            </MockedProvider>
        )
        expect(getByA11yHint(/Type here to search pokemons/i)).toBeTruthy()
        expect(getByA11yHint(/Press to search/i)).toBeTruthy()
        expect(toJSON()).toMatchSnapshot()
    })
})

