import { ContextProps } from "../context/PokemonContext/PokemonContext";

export const initialState: ContextProps = {
    card: [],
    loading: false,
    pokeData: [],
    pokeSearch: jest.fn(),
    searchLoader: false,
    searchValue: '',
    setSearchValue: jest.fn(),
    fetchMoreData: jest.fn()
}