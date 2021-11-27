import { API } from "../../src/api/API";
import { MockAPIResponses } from "../testUtils/mockAPIResponse";
import { MockData } from "../testUtils/MockData";

describe('Tests of the convert data functions', () => {
    it('Should convert the response of API endpoint /pokemon/id to a IPokemonBasicData object', () => {
        const pokemonAPIData = JSON.parse(MockAPIResponses.pokemonIdEndpointResponse);
        const api = new API();
        const pokemonBasicData: IPokemonBasicData = api.getPokemonBasicDataFromApiIdData(pokemonAPIData)

        expect(pokemonBasicData).toEqual(MockData.bulbasaurBasicData)
    });

    it('Should obtain the type multiple attack stats data from /type/id_type endpoints', () => {
        const typeData: IPokemonTypeResponse[] = [
            MockAPIResponses.type12EndpointResponse,
            MockAPIResponses.type4EndpointResponse
        ].map(e => JSON.parse(e));

        const api = new API();
        const pokemonTypeAtkMultiples = api.getTypesAttackMultiples(typeData)

        expect(pokemonTypeAtkMultiples).toEqual(MockData.bulbasaurData.typesAtkMultiple)
    });

    it('should obtain the type multiple defense stats data from /type/id_type endpoints', () => {
        const typeData: IPokemonTypeResponse[] = [
            MockAPIResponses.type12EndpointResponse,
            MockAPIResponses.type4EndpointResponse
        ].map(e => JSON.parse(e));

        const api = new API();
        const pokemonTypeDefMultiples = api.getTypesDefenseMultiples(typeData)

        expect(pokemonTypeDefMultiples).toEqual(MockData.bulbasaurData.typesDefMultiple)
    });

});
export { }
