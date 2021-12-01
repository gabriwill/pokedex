import { API } from "../api/API";
import { SortType } from "./SortType";

export class Repository {
    private unit = 10;
    private page = 0;
    private api: API;
    private pokemonList: IPokemonCardData[] = [];
    private searchString: string = '';
    private searchIdCode: string = '';
    private pokemonInfoList: IPokemonInfo[] = [];
    private sortFunction: (a: IPokemonInfo, b: IPokemonInfo) => number;


    constructor() {
        this.api = new API();
        this.page = 0;
        this.sortFunction = (a, b) => (a.id - b.id);
    }
    getPokemonList() {
        return this.pokemonList
    }

    setSortType(type: SortType) {
        switch (type) {
            case SortType.ALPHABETIC:
                this.sortFunction = (a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                };
                break;
            case SortType.ALPHABETIC_DESC:
                this.sortFunction = (a, b) => {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                };
                break;
            case SortType.NUMERIC_DESC:
                this.sortFunction = (a, b) => (b.id - a.id);
                break;
            case SortType.NUMERIC_ASC:
                this.sortFunction = (a, b) => (a.id - b.id);
                break;
        }

    }

    async initializer() {
        if (this.pokemonInfoList.length == 0)
            this.pokemonInfoList = await this.api.getAllPokemons();
    }

    setSearchString(newString?: string) {
        if (!newString) this.searchString = '';
        else this.searchString = newString;
        this.searchIdCode = '';
        this.pokemonList = [];
        this.page = 0;
    }

    async addNewPokemonsToList(): Promise<IPokemonCardData[]> {
        if (!this.api) return [];
        if (this.pokemonInfoList.length == 0) throw 'Repository not initalize';
        const idCode = String(Math.random());
        this.searchIdCode = idCode;
        const newEntries: IPokemonCardData[] = []
        await Promise.all(this.pokemonInfoList
            .filter(({ name }) => name.match(this.searchString))
            .sort(this.sortFunction)
            .slice(this.page * this.unit, (this.page + 1) * this.unit)
            .map(async ({ id }) => {
                const newItems = await this.api.getPokemonCardDataById(id);
                newEntries.push(newItems)

            })
        );
        newEntries.sort(this.sortFunction)
        if (this.searchIdCode != idCode) return [];
        this.page++;
        this.pokemonList.push(...newEntries)
        return newEntries
    }

    static async getPokemonData(id: number): Promise<IPokemonData> {
        const api = new API();
        return await api.getPokemonDataById(id)
    }
}