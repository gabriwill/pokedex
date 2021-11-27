import { API } from "../api/API";

export class Repository {
    private unit = 10;
    private page = 0;
    private api: API;
    private pokemonList: IPokemonBasicData[] = [];
    private searchString: string = '';
    private searchIdCode: string = '';

    constructor() {
        this.api = new API();
        this.page = 0;
    }
    getPokemonList() {
        return this.pokemonList
    }

    setSearchString(newString?: string) {
        if (!newString) this.searchString = '';
        else this.searchString = newString;
        this.searchIdCode = '';
        this.pokemonList = [];
        this.page = 0;
    }

    async addNewPokemonsToList(): Promise<IPokemonBasicData[]> {
        if (!this.api) return [];
        const idCode = String(Math.random());
        this.searchIdCode = idCode;
        const newEntries: IPokemonBasicData[] = []
        while (this.page < 150) {
            const newItems = await this.api.getPokemonListByName(this.searchString, this.unit, this.page);
            newEntries.push(...newItems)
            if (this.searchIdCode != idCode) return [];
            if (newEntries.length >= this.unit) break;
            this.page++;
        }
        this.pokemonList.push(...newEntries)
        return this.pokemonList
    }

    static async getPokemonData(id: number): Promise<IPokemonData> {
        const api = new API();
        return await api.getPokemonDataById(id)
    }
}