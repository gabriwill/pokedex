import PokeTypes from "../utils/PokeTypes";
import { IPokemonBasicData, IPokemonData } from "../utils/Types";

export class Repository {
    getPokemonList(): IPokemonBasicData[]{
        return [{
            id: 1,
            name: 'bulbasaur',
            image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            types: [{type: 'grass'},{type: 'poison'}]
        },{
            id: 75,
            name: 'graveler',
            image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png',
            types: [{type: 'rock'},{type: 'ground'}]
        }]
    }

    static getPokemonData(id: number): IPokemonData{
        const typesDefMultiple = PokeTypes.map((value)=>({type:value.name,multiple:'2'}));
        const typesAtkMultiple = PokeTypes.map((value)=>({type:value.name,multiple:'2'}));
        return {
            id: 1,
            name: 'bulbasaur',
            image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            types: [{type: 'grass'},{type: 'poison'}],
            description: 'dfjnfjihnuif dajf jf jweifj iwjdfi ewfi jewif jewi fjwie jf weif j wji jf',
            height: 0.7,
            weight: 6.9,
            baseFriendship: 70,
            baseExperience: 64,
            specieGenera: 'Seed Pokémon',
            habitat: 'florest',
            growRate: 'Medium Slow',
            typesWeakness:[{type: 'fire'},{type: 'flying'}],
            typesDefMultiple,
            typesAtkMultiple,
            stats:[
                {stat:'hp',base_stat:45},
                {stat:'Attack',base_stat:49},
                {stat:'Defense',base_stat:49},
                {stat:'Sp. Atk',base_stat:64},
                {stat:'Sp. Def',base_stat:64},
                {stat:'Speed',base_stat:45},
            ],
            abilities:[
                {name: 'Overgrow',isHidden: false},
                {name: 'Chlorophill',isHidden: true},
            ],
            evolutionChain: [
                {minLevel: 16, evolvesTo:{
                    id: 2,
                    name: 'ivysaur',
                    image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
                    types: [{type: 'grass'},{type: 'poison'}]
                }},
                {minLevel: 32, evolvesTo:{
                    id: 3,
                    name: 'venusaur',
                    image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
                    types: [{type: 'grass'},{type: 'poison'}]
                }}
            ]
        }
    }
}