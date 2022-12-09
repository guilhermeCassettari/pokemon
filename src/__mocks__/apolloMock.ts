import POKE_CARD from "../query/POKE_CARD";
import POKE_DETAILS from "../query/POKE_DETAILS";

export const apolloMock = {
    pokeCard: {
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
    },
    pokeDetails: {
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
}
