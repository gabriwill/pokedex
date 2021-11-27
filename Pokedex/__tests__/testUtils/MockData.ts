const typesDefMultiple = [
    { multiple: "1/4", type: "Grass" }, { multiple: "1", type: "Poison" }, { multiple: "1", type: "Bug" }, { multiple: "1", type: "Dark" }, { multiple: "1", type: "Dragon" }, { multiple: "1/2", type: "Electric" }, { multiple: "1/2", type: "Fairy" }, { multiple: "1/2", type: "Fighting" }, { multiple: "2", type: "Fire" }, { multiple: "2", type: "Flying" }, { multiple: "1", type: "Ghost" }, { multiple: "1", type: "Ground" }, { multiple: "2", type: "Ice" }, { multiple: "1", type: "Normal" }, { multiple: "2", type: "Psychic" }, { multiple: "1", type: "Rock" }, { multiple: "1", type: "Steel" }, { multiple: "1/2", "type": "Water" }
];

const typesAtkMultiple = [{ "multiple": "1", "type": "Grass" }, { "multiple": "1/4", "type": "Poison" }, { "multiple": "1/2", "type": "Bug" }, { "multiple": "1", "type": "Dark" }, { "multiple": "1/2", "type": "Dragon" }, { "multiple": "1", "type": "Electric" }, { "multiple": "2", "type": "Fairy" }, { "multiple": "1", "type": "Fighting" }, { "multiple": "1/2", "type": "Fire" }, { "multiple": "1/2", "type": "Flying" }, { "multiple": "1/2", "type": "Ghost" }, { "multiple": "1", "type": "Ground" }, { "multiple": "1", "type": "Ice" }, { "multiple": "1", "type": "Normal" }, { "multiple": "1", "type": "Psychic" }, { "multiple": "1", "type": "Rock" }, { "multiple": "0", "type": "Steel" }, { "multiple": "2", "type": "Water" }];


export const MockData = {
    bulbasaurBasicData: {
        id: 1,
        name: 'bulbasaur',
        image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        types: [{ type: 'grass' }, { type: 'poison' }],
    },
    bulbasaurData: {
        id: 1,
        name: 'bulbasaur',
        image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        types: [{ type: 'grass' }, { type: 'poison' }],
        description: 'dfjnfjihnuif dajf jf jweifj iwjdfi ewfi jewif jewi fjwie jf weif j wji jf',
        height: 0.7,
        weight: 6.9,
        baseFriendship: 70,
        baseExperience: 64,
        specieGenera: 'Seed Pokémon',
        habitat: 'Grassland',
        growRate: 'Medium Slow',
        typesWeakness: [{ type: 'fire' }, { type: 'flying' }, { type: 'ice' }, { type: 'psychic' }],
        typesDefMultiple,
        typesAtkMultiple,
        stats: [
            { stat: 'HP', base_stat: 45 },
            { stat: 'Attack', base_stat: 49 },
            { stat: 'Defense', base_stat: 49 },
            { stat: 'Sp. Atk', base_stat: 65 },
            { stat: 'Sp. Def', base_stat: 65 },
            { stat: 'Speed', base_stat: 45 },
        ],
        abilities: [
            { name: 'Overgrow', isHidden: false },
            { name: 'Chlorophyll', isHidden: true },
        ],
        evolutionChain: [
            {
                minLevel: 16, evolvesTo: {
                    id: 2,
                    name: 'ivysaur',
                    image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
                    types: [{ type: 'grass' }, { type: 'poison' }]
                }
            },
            {
                minLevel: 32, evolvesTo: {
                    id: 3,
                    name: 'venusaur',
                    image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
                    types: [{ type: 'grass' }, { type: 'poison' }]
                }
            }
        ]
    },
    searchEmptyStringResult: [
        {
            id: 1,
            name: "bulbasaur",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            types: [
                {
                    type: "grass"
                },
                {
                    type: "poison"
                }
            ]
        },
        {
            id: 2,
            name: "ivysaur",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
            types: [
                {
                    type: "grass"
                },
                {
                    type: "poison"
                }
            ]
        },
        {
            id: 3,
            name: "venusaur",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
            types: [
                {
                    type: "grass"
                },
                {
                    type: "poison"
                }
            ]
        },
        {
            id: 4,
            name: "charmander",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            types: [
                {
                    type: "fire"
                }
            ]
        },
        {
            id: 5,
            name: "charmeleon",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
            types: [
                {
                    type: "fire"
                }
            ]
        },
        {
            id: 6,
            name: "charizard",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
            types: [
                {
                    type: "fire"
                },
                {
                    type: "flying"
                }
            ]
        },
        {
            id: 7,
            name: "squirtle",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
            types: [
                {
                    type: "water"
                }
            ]
        },
        {
            id: 8,
            name: "wartortle",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
            types: [
                {
                    type: "water"
                }
            ]
        },
        {
            id: 9,
            name: "blastoise",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
            types: [
                {
                    type: "water"
                }
            ]
        },
        {
            id: 10,
            name: "caterpie",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
            types: [
                {
                    type: "bug"
                }
            ]
        }
    ],
    threeSaursResult: [
        {
            id: 1,
            name: "bulbasaur",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            types: [
                {
                    type: "grass"
                },
                {
                    type: "poison"
                }
            ]
        },
        {
            id: 2,
            name: "ivysaur",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
            types: [
                {
                    type: "grass"
                },
                {
                    type: "poison"
                }
            ]
        },
        {
            id: 3,
            name: "venusaur",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
            types: [
                {
                    type: "grass"
                },
                {
                    type: "poison"
                }
            ]
        }
    ],
    tenPokemonWithar: [
        {
            id: 4,
            name: "charmander",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
            types: [
                {
                    type: "fire"
                }
            ]
        },
        {
            id: 5,
            name: "charmeleon",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
            types: [
                {
                    type: "fire"
                }
            ]
        },
        {
            id: 6,
            name: "charizard",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
            types: [
                {
                    type: "fire"
                },
                {
                    type: "flying"
                }
            ]
        },
        {
            id: 8,
            name: "wartortle",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
            types: [
                {
                    type: "water"
                }
            ]
        },
        {
            id: 21,
            name: "spearow",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
            types: [
                {
                    type: "normal"
                },
                {
                    type: "flying"
                }
            ]
        },
        {
            id: 22,
            name: "fearow",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
            types: [
                {
                    type: "normal"
                },
                {
                    type: "flying"
                }
            ]
        },
        {
            id: 24,
            name: "arbok",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
            types: [
                {
                    type: "poison"
                }
            ]
        },
        {
            id: 46,
            name: "paras",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
            types: [
                {
                    type: "bug"
                },
                {
                    type: "grass"
                }
            ]
        },
        {
            id: 47,
            name: "parasect",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
            types: [
                {
                    type: "bug"
                },
                {
                    type: "grass"
                }
            ]
        },
        {
            id: 59,
            name: "arcanine",
            image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
            types: [
                {
                    type: "fire"
                }
            ]
        }
    ],
}