import axios from "axios";
import { convertNumberToFrac } from "../utils/convertNumberToFrac";
import '../@types/string.extensions';

const baseURL = "https://pokeapi.co/api/v2/";


export class API {
    async getPokemonListByName(search: string, unit: number, page: number): Promise<IPokemonBasicData[]> {
        const offset = page * unit;
        const response = await axios.get<IPokemonListReponse>(baseURL + `pokemon?limit=${unit}&offset=${offset}`).then(res => res.data);
        const idList = response.results.filter(({ name }) => (name.match(search))).map(({ url }) => Number(url.replace(/\/$/, '').match(/\d+$/)));
        const data = await Promise.all(idList.map(id => this.getPokemonBasicDataById(id)))
        return data
    }
    async getPokemonIdList(unit: number, page: number): Promise<number[]> {
        const offset = page * unit;
        const response = await axios.get<IPokemonListReponse>(baseURL + `pokemon?limit=${unit}&offset=${offset}`).then(res => res.data);
        return response.results.map(({ url }) => Number(url.replace(/\/$/, '').match(/\d+$/)))
    }
    async getPokemonBasicDataById(id: number): Promise<IPokemonBasicData> {
        const response = await axios.get<IPokemonResponse>(baseURL + `pokemon/${id}`).then(res => res.data);

        return this.getPokemonBasicDataFromApiIdData(response)
    }
    getPokemonBasicDataFromApiIdData(apiIdResponse: IPokemonResponse): IPokemonBasicData {
        return {
            id: Number(apiIdResponse.id),
            name: apiIdResponse.name,
            image_url: apiIdResponse.sprites.other['official-artwork'].front_default,
            types: apiIdResponse.types.map(({ type }) => ({ type: type.name }))
        }
    }

    getTypesDefenseMultiples(typesData: IPokemonTypeResponse[]): ITypeStatMultiple[] {
        const defenseStats: any[] = JSON.parse(JSON.stringify(this.typesMultipleDefault));
        defenseStats.map((item) => {
            const value = item;

            typesData.map(({ damage_relations }) => {
                if (damage_relations.no_damage_from?.some(({ name }) => (name == value.type.toLowerCase()))) value.multiple *= 0;
                if (damage_relations.double_damage_from?.some(({ name }) => (name == value.type.toLowerCase()))) value.multiple *= 2;
                if (damage_relations.half_damage_from?.some(({ name }) => (name == value.type.toLowerCase()))) value.multiple *= 0.5;
            });

            return value;
        });
        return defenseStats.map(e => ({ type: e.type, multiple: convertNumberToFrac(e.multiple) }))
    }
    getTypesAttackMultiples(typesData: IPokemonTypeResponse[]): ITypeStatMultiple[] {
        const attackStats: any[] = JSON.parse(JSON.stringify(this.typesMultipleDefault));
        attackStats.map((item) => {
            const value = item;

            typesData.map(({ damage_relations }) => {
                if (damage_relations.no_damage_to?.some(({ name }) => (name == value.type.toLowerCase()))) value.multiple *= 0;
                if (damage_relations.double_damage_to?.some(({ name }) => (name == value.type.toLowerCase()))) value.multiple *= 2;
                if (damage_relations.half_damage_to?.some(({ name }) => (name == value.type.toLowerCase()))) value.multiple *= 0.5;
            });

            return value;
        });
        return attackStats.map(({ type, multiple }) => ({ type, multiple: convertNumberToFrac(multiple) }))
    }

    async getPokemonEvolutionChain(data: IPokemonEvolutionChainResponse): Promise<IEvolutionChain[]> {
        const evolutionChain: IEvolutionChain[] = []
        let hasOtherEvolution = data.chain.evolves_to.length == 0 ? false : true
        let evolution = data.chain.evolves_to[0]
        while (hasOtherEvolution) {
            const minLevel = evolution.evolution_details[0].min_level
            const specie = await axios.get<IPokemonEvolutionChainResponse>(evolution.species.url).then(res => res.data);
            const evolvesTo = await this.getPokemonBasicDataById(specie.id);
            evolutionChain.push({ minLevel, evolvesTo });
            hasOtherEvolution = evolution.evolves_to.length == 0 ? false : true
            evolution = evolution.evolves_to[0]
        }

        return evolutionChain
    }

    private statNameFormatter(name: string): string {
        switch (name) {
            case 'hp':
                return name.toUpperCase();

            case 'special-attack':
                return "Sp. Atk";

            case 'special-defense':
                return "Sp. Def";

            default:
                return name.capitalize();
        }
    }

    async getPokemonDataById(id: number): Promise<IPokemonData> {
        const data = await axios.get<IPokemonResponse>(baseURL + `pokemon/${id}`).then(res => res.data);
        const specieData = await axios.get<IPokemonSpeciesResponse>(data.species.url).then(res => res.data);
        const evolutionChain = await this.getPokemonEvolutionChain(await axios.get<IPokemonEvolutionChainResponse>(specieData.evolution_chain.url).then(res => res.data));
        const typesAPIData: IPokemonTypeResponse[] = await Promise.all(data.types.map(async ({ type }) => {
            const data = await axios.get<IPokemonTypeResponse>(type.url).then(res => res.data);
            return data
        }));
        const typesAtkMultiple = this.getTypesAttackMultiples(typesAPIData)
        const typesDefMultiple = this.getTypesDefenseMultiples(typesAPIData)

        const types = data.types.map(({ type }) => ({ type: type.name }));
        const stats = data.stats.map(({ base_stat, stat }) => ({
            base_stat: Number(base_stat),
            stat: this.statNameFormatter(stat.name)
        }));

        const baseFriendship = specieData.base_happiness;
        const growRate = specieData.growth_rate.name.stringFormat();
        const habitat = specieData.habitat.name.capitalize();
        const baseExperience = data.base_experience;

        const typesWeakness = typesDefMultiple.filter(({ multiple }: ITypeStatMultiple) => (Number(multiple) >= 2)).map(({ type }: ITypeStatMultiple) => ({ type: type.toLowerCase() }));

        const specieGenera = specieData.genera.find(({ language }) => (language.name == 'en'))?.genus || '';

        const abilities = data.abilities.map(({ ability, is_hidden }) => ({ name: ability.name.capitalize(), isHidden: is_hidden }));

        const descriptions = specieData.flavor_text_entries.filter(({ language }) => (language.name == 'en'));
        const description = descriptions[Math.floor(Math.random() * descriptions.length)].flavor_text;

        return {
            id: data.id,
            name: data.name,
            image_url: data.sprites.other['official-artwork'].front_default,
            types,
            weight: Number(data.weight) / 10,
            height: Number(data.height) / 10,
            stats,
            evolutionChain,
            typesAtkMultiple,
            typesDefMultiple,
            baseFriendship,
            description,
            growRate,
            habitat,
            baseExperience,
            typesWeakness,
            specieGenera,
            abilities
        }
    }


    private typesMultipleDefault = [
        {
            type: 'Grass',
            multiple: 1
        },
        {
            type: 'Poison',
            multiple: 1
        },
        {
            type: 'Bug',
            multiple: 1
        },
        {
            type: 'Dark',
            multiple: 1
        },
        {
            type: 'Dragon',
            multiple: 1
        },
        {

            type: 'Electric',
            multiple: 1
        },
        {
            type: 'Fairy',
            multiple: 1
        },
        {

            type: 'Fighting',
            multiple: 1
        },
        {
            type: 'Fire',
            multiple: 1
        },
        {
            type: 'Flying',
            multiple: 1
        },
        {
            type: 'Ghost',
            multiple: 1
        },
        {
            type: 'Ground',
            multiple: 1
        },
        {
            type: 'Ice',
            multiple: 1
        },
        {
            type: 'Normal',
            multiple: 1
        },
        {

            type: 'Psychic',
            multiple: 1
        },
        {
            type: 'Rock',
            multiple: 1
        },
        {
            type: 'Steel',
            multiple: 1
        },
        {
            type: 'Water',
            multiple: 1
        },

    ];
}
