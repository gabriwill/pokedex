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
    }
}