import { API } from "../api/API";
import { SortType } from "./SortType";

export class Repository {
    private _unit = 10;
    private _page = 0;
    private _api: API;
    private _pokemonList: IPokemonCardData[] = [];
    private _searchString: string = '';
    private _searchIdCode: string = '';
    private _pokemonInfoList: IPokemonInfo[] = [];
    private sortFunction: (a: IPokemonInfo, b: IPokemonInfo) => number;
    private _sortType: SortType = SortType.NUMERIC_ASC;


    constructor() {
        this._api = new API();
        this._page = 0;
        this.sortFunction = (a, b) => (a.id - b.id);
    }
    public get pokemonList() {
        return this._pokemonList
    }
    public get sortType() { return this._sortType; }

    public set sortType(type: SortType) {
        switch (type) {
            case SortType.ALPHABETIC:
                this._sortType = SortType.ALPHABETIC
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
                this._sortType = SortType.ALPHABETIC_DESC
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
                this._sortType = SortType.NUMERIC_DESC
                this.sortFunction = (a, b) => (b.id - a.id);
                break;
            case SortType.NUMERIC_ASC:
                this._sortType = SortType.NUMERIC_ASC
                this.sortFunction = (a, b) => (a.id - b.id);
                break;
        }

    }

    async initializer() {
        if (this._pokemonInfoList.length == 0)
            this._pokemonInfoList = await this._api.getAllPokemons();
    }

    public get searchString() { return this._searchString; }

    public set searchString(newString: string) {
        if (!newString) this._searchString = '';
        else this._searchString = newString.trim();
        this._searchIdCode = '';
        this._pokemonList = [];
        this._page = 0;
    }

    private filterFuntion({ id, name }: IPokemonInfo, searchString: string): boolean {
        const numberId = Number(searchString)
        if (!isNaN(numberId) && searchString != '') {
            return id == numberId
        } else {
            return name.match(searchString) ? true : false
        }
    }

    async addNewPokemonsToList(): Promise<IPokemonCardData[]> {
        if (!this._api) return [];
        if (this._pokemonInfoList.length == 0) throw 'Repository not initalize';
        const idCode = String(Math.random());
        this._searchIdCode = idCode;
        const newEntries: IPokemonCardData[] = []
        await Promise.all(this._pokemonInfoList
            .filter(pokeInfo => this.filterFuntion(pokeInfo, this._searchString))
            .sort(this.sortFunction)
            .slice(this._page * this._unit, (this._page + 1) * this._unit)
            .map(async ({ id }) => {
                const newItems = await this._api.getPokemonCardDataById(id);
                newEntries.push(newItems)

            })
        );
        newEntries.sort(this.sortFunction)
        if (this._searchIdCode != idCode) return [];
        this._page++;
        this._pokemonList.push(...newEntries)
        return newEntries
    }

    static async getPokemonData(id: number): Promise<IPokemonData> {
        const api = new API();
        return await api.getPokemonDataById(id)
    }
}