interface INameAndUrlObject {
    name: string, url: string
}
interface FlavorTextEntry {
    flavor_text: string;
    language: INameAndUrlObject;
    version: INameAndUrlObject;
}
interface IPokemonSpeciesResponse {
    base_happiness: number;
    capture_rate: number;
    color: INameAndUrlObject;
    egg_groups: INameAndUrlObject[];
    evolution_chain: {
        url: string
    };
    evolves_from_species?: any;
    flavor_text_entries: FlavorTextEntry[];
    form_descriptions: any[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: {
        genus: string;
        language: INameAndUrlObject;
    }[];
    generation: INameAndUrlObject;
    growth_rate: INameAndUrlObject;
    habitat: INameAndUrlObject | null;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names: {
        language: INameAndUrlObject;
        name: string;
    }[];
    order: number;
    pal_park_encounters: {
        area: INameAndUrlObject;
        base_score: number;
        rate: number;
    }[];
    pokedex_numbers: {
        entry_number: number;
        pokedex: INameAndUrlObject;
    }[];
    shape: INameAndUrlObject;
    varieties: {
        is_default: boolean;
        pokemon: INameAndUrlObject;
    }[];
}
interface IPokemonResponse {
    abilities: {
        ability: INameAndUrlObject;
        is_hidden: boolean;
        slot: number;
    }[];
    base_experience: number;
    height: number;
    id: number;
    is_default: boolean;
    name: string;
    order: number;
    past_types: any[];
    species: INameAndUrlObject;
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            };
        };
    }
    ;
    stats: {
        base_stat: number;
        effort: number;
        stat: INameAndUrlObject;
    }[];
    types: {
        slot: number;
        type: INameAndUrlObject;
    }[];
    weight: number;
}
interface IPokemonTypeResponse {
    damage_relations: {
        double_damage_from: INameAndUrlObject[];
        double_damage_to: INameAndUrlObject[];
        half_damage_from: INameAndUrlObject[];
        half_damage_to: INameAndUrlObject[];
        no_damage_from: INameAndUrlObject[];
        no_damage_to: INameAndUrlObject[];
    };
    game_indices: {
        game_index: number;
        generation: INameAndUrlObject;
    }[];
    generation: INameAndUrlObject;
    id: number;
    name: string;
    past_damage_relations: any[];
}
interface EvolvesTo {
    evolution_details: {
        min_level: number;
    }[];
    evolves_to: EvolvesTo[];
    is_baby: boolean;
    species: INameAndUrlObject;
}
interface IPokemonEvolutionChainResponse {
    baby_trigger_item?: any;
    chain: EvolvesTo;
    id: number;
}

interface IPokemonListReponse {
    count: number;
    next: string;
    prev: string;
    results: INameAndUrlObject[];
}
