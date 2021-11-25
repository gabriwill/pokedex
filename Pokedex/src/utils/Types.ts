import { Type } from "./PokeTypes"

interface INameAndUrlObject {
    name: string, url: string
}

export interface IPokemonApiResponse {
    abilities: { 
        ability: INameAndUrlObject, 
        is_hidden: boolean, 
        slot: number 
    }[],
    base_experience: number,
    forms: INameAndUrlObject[],
    game_indices: { 
        game_index: number, 
        version: INameAndUrlObject 
    }[],
    height: number,
    held_items: { 
        item: INameAndUrlObject, 
        version_details: { 
            rarity: 50, 
            version: INameAndUrlObject[] 
        }}[],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: { 
        move: INameAndUrlObject 
    }[],
    name: string,
    order: number,
    past_types: string[],
    species: INameAndUrlObject,
    sprites: {
        back_default?: string,
        back_female?: string,
        back_shiny?: string,
        back_shiny_female?: string,
        front_default?: string,
        front_female?: string,
        front_shiny?: string,
        front_shiny_female?: string,
        other: {
            dream_world: {
                front_default?: string,
                front_female?: string
            },
            official_artwork:{
                front_default?: string,
            }
        },
        versions: any
    },
    stats: { 
        base_stat: number, 
        effort: number, 
        stat: INameAndUrlObject 
    }[],
    types: { 
        slot: number, 
        type: INameAndUrlObject 
    }[],
    weight: number
}

export interface ITypeStatMultiple {
    type:string,
    multiple:string
}

export interface IEvolutionChain {
    evolvesTo: IPokemonBasicData,
    minLevel: number
}
export interface IPokemonBasicData {
    id: number,
    name: string,
    image_url: string,
    types:{  
        type: string 
    }[]
}
export interface IPokemonData {
    id: number,
    name: string,
    image_url: string,
    types:{  
        type: string 
    }[],
    description: string,
    height: number,
    weight: number,
    baseFriendship: number,
    baseExperience: number,
    specieGenera: string,
    habitat: string,
    growRate: string,
    typesWeakness:{  
        type: string 
    }[],
    typesDefMultiple:ITypeStatMultiple[],
    typesAtkMultiple:ITypeStatMultiple[],
    stats:{ 
        stat: string,
        base_stat: number,  
    }[],
    abilities:{
        name: string,
        isHidden: boolean
    }[],
    evolutionChain:IEvolutionChain[]
}

export const pokemonDataToPokemonBasicData = ({ id, name, image_url, types } : IPokemonData):IPokemonBasicData=>{
    return {id, name, image_url,types}
}

export interface CardProps { 
    pokemon: IPokemonData ,
    pokemonType: Type
}