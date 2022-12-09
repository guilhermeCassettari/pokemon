import React from 'react'
import { render } from '@testing-library/react-native';
import { PokemonProvider } from '../../../context/PokemonContext';
import SearchBar from '../SearchBar';
import { MockedProvider } from '@apollo/client/testing'
import { apolloMock } from '../../../__mocks__/apolloMock';

describe('SeatchBar', () => {
    it('Should be render correctly', async () => {
        const { toJSON, getByA11yHint } = render(
            <MockedProvider mocks={[apolloMock.pokeCard]} addTypename={false}>
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

