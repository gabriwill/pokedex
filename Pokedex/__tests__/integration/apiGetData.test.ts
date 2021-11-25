import { API } from "../../src/api/API";
import { MockAPIResponses } from "../testUtils/MockAPIResponse";
import { MockData } from "../testUtils/MockData";

describe('Obtain data from API', () => {
    it('Should obtain pokemon basic data from API using the pokemon\'s id number', async () => {
        const id = 1;
        const api = new API();
        const pokemonBasicData = await api.getPokemonBasicDataById(id);

        expect(pokemonBasicData).toEqual(MockData.bulbasaurBasicData)
    });

    it('Should obtain pokemon evolution chain from evolution-chain/id API endpoint', async () => {
        const evolutionChainData = JSON.parse(MockAPIResponses.evolutionChainEndpointResponse);
        const api = new API();
        const evolutionChain = await api.getPokemonEvolutionChain(evolutionChainData);

        expect(evolutionChain).toEqual(MockData.bulbasaurData.evolutionChain)
    });

    it('Should obtain pokemon data from API using the pokemon\'s id number', async () => {
        const id = 1;
        const api = new API();
        const pokemonData = await api.getPokemonDataById(id);
        const mockData = MockData.bulbasaurData;
        if (!pokemonData.description) throw 'Invalid value on description field';
        mockData.description = pokemonData.description;

        expect(pokemonData).toEqual(mockData);
    });

    it('Should obtain a list of ten first pokemon\'s id from API', async () => {
        const api = new API();
        const page = 0;
        const unit = 10;
        const mockList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const idList = await api.getPokemonIdList(unit, page);

        expect(idList).toEqual(mockList);
    });

    it('Should obtain a list of ten pokemon\'s id from the id 30 from API', async () => {
        const api = new API();
        const page = 3;
        const unit = 10;
        const mockList = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
        const idList = await api.getPokemonIdList(unit, page);

        expect(idList).toEqual(mockList);
    });

    it('Should obtain a list of ten first pokemon\'s basic data from API when search pokemon with empty string', async () => {
        const api = new API();
        const page = 0;
        const unit = 10;
        const pokemonList = await api.getPokemonListByName('', unit, page);
        expect(pokemonList).toEqual(MockData.searchEmptyStringResult);
    });

    it('Should obtain a Bulbasaur, Venusaur and Ivysaur pokemon\'s basic data from API when search pokemon with \'saur\' string', async () => {
        const api = new API();
        const page = 0;
        const unit = 10;
        const pokemonList = await api.getPokemonListByName('saur', unit, page);
        expect(pokemonList).toEqual(MockData.threeSaursResult);
    });
});

export { }