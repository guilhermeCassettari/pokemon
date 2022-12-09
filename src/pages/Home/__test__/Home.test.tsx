import React from 'react'
import { render } from '@testing-library/react-native';
import { PokemonContext } from '../../../context/PokemonContext';
import Home from '../Home';
import { ThemeContext } from 'styled-components/native';
import theme from '../../../theme';
import 'jest-styled-components'
import { initialState } from '../../../__mocks__/initialState';
import { pokeCardMock } from '../../../__mocks__/responseMock';

jest.mock('@react-navigation/native')

describe('Home', () => {
    it("Should be render Shimmer Card", () => {
        const { toJSON, getAllByTestId } = render(
            <PokemonContext.Provider value={{ ...initialState, loading: true }} >
                <Home />
            </PokemonContext.Provider>
        )
        expect(getAllByTestId(/shimmer/i).length).toBe(4)
        expect(toJSON()).toMatchSnapshot()
    })

    it("Should be render Search Loader", () => {
        const { toJSON, getAllByA11yHint } = render(
            <PokemonContext.Provider value={{ ...initialState, searchLoader: true }} >
                <Home />
            </PokemonContext.Provider>
        )
        expect(getAllByA11yHint(/Await for pokemon initial loader/i).length).toBe(1)
        expect(toJSON()).toMatchSnapshot()
    })

    it("Should be render Pokecards", () => {
        const { toJSON, getByText } = render(
            <ThemeContext.Provider value={theme}>
                <PokemonContext.Provider value={{ ...initialState, card: pokeCardMock }} >
                    <Home />
                </PokemonContext.Provider>
            </ThemeContext.Provider>
        )

        expect(getByText(/teste1/i)).toBeTruthy()
        expect(getByText(/teste2/i)).toBeTruthy()
        expect(getByText(/testea/i)).toBeTruthy()
        expect(getByText(/testeb/i)).toBeTruthy()
        expect(getByText(/testec/i)).toBeTruthy()
        expect(getByText(/tested/i)).toBeTruthy()
        expect(toJSON()).toMatchSnapshot()

    })

})