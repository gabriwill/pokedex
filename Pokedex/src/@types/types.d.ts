interface IPokemonCardData {
    id: number,
    name: string,
    image_url: string,
    types: {
        type: string
    }[]
}

interface IPokemonBasicData {
    id: number,
    name: string,
    types: {
        type: string
    }[]
}

interface IPokemonInfo {
    id: number,
    name: string
}

interface ITypeStatMultiple {
    type: string,
    multiple: string
}

interface IEvolutionChain {
    evolvesTo: IPokemonCardData,
    minLevel: number
}

interface IPokemonData {
    id: number,
    name: string,
    image_url: string,
    types: {
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
    typesWeakness: {
        type: string
    }[],
    typesDefMultiple: ITypeStatMultiple[],
    typesAtkMultiple: ITypeStatMultiple[],
    stats: {
        stat: string,
        base_stat: number,
    }[],
    abilities: {
        name: string,
        isHidden: boolean
    }[],
    evolutionChain: IEvolutionChain[]
}

interface Type {
    icon: (height?: number, width?: number) => Element,
    name: string,
    color: string,
    backgroundColor: string,
    fontColor: string
}

interface CardProps {
    pokemon?: IPokemonData,
    pokemonType: Type
}