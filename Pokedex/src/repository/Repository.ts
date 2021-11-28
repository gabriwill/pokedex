import { API } from "../api/API";

export class Repository {
    private unit = 10;
    private page = 0;
    private api: API;
    private pokemonList: IPokemonCardData[] = [];
    private searchString: string = '';
    private searchIdCode: string = '';
    private pokemonInfoList: IPokemonInfo[] = [];

    constructor() {
        this.api = new API();
        this.page = 0;
    }
    getPokemonList() {
        return this.pokemonList
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
            .sort((a, b) => a.id - b.id)
            .slice(this.page * this.unit, (this.page + 1) * this.unit)
            .map(async ({ id }) => {
                const newItems = await this.api.getPokemonCardDataById(id);
                newEntries.push(newItems)

            })
        );
        newEntries.sort((a, b) => a.id - b.id)
        if (this.searchIdCode != idCode) return [];
        if (this.page > 0) this.page++;
        this.pokemonList.push(...newEntries)
        return this.pokemonList
    }

    static async getPokemonData(id: number): Promise<IPokemonData> {
        const api = new API();
        return await api.getPokemonDataById(id)
    }
}