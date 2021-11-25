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
});

export { }