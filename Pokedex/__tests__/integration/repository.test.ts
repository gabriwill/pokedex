import { Repository } from "../../src/repository/Repository";
import { MockData } from "../testUtils/MockData";

describe('Tests the repository layer of application', () => {
    it('Should obtain a list of ten first pokemon\'s basic data from API whenthe search string is empty', async () => {
        const repository = new Repository();
        repository.setSearchString('');
        await repository.addNewPokemonsToList();

        expect(repository.getPokemonList()).toEqual(MockData.searchEmptyStringResult)
    });

    it('Should obtain a list of ten first pokemon\'s basic data whose name contains the pattern ar from API when the search string is \'ar\'', async () => {
        const repository = new Repository();
        repository.setSearchString('ar');
        await repository.addNewPokemonsToList();

        expect(repository.getPokemonList()).toEqual(MockData.tenPokemonWithar)
    });

    it('Should change a list of ten first pokemon\'s basic data to a list of ten first pokemon\'s basic data whose name contains the pattern ar from API when the search string is \'ar\'', async () => {
        const repository = new Repository();
        repository.setSearchString('');
        await repository.addNewPokemonsToList();
        expect(repository.getPokemonList()).toEqual(MockData.searchEmptyStringResult)

        repository.setSearchString('ar');
        await repository.addNewPokemonsToList();
        expect(repository.getPokemonList()).toEqual(MockData.tenPokemonWithar)
    });

    it('Should obtain pokemon data from API using the pokemon\'s id number', async () => {
        const id = 1;
        const pokemonData = await Repository.getPokemonData(id);
        const mockData = MockData.bulbasaurData;
        if (!pokemonData.description) throw 'Invalid value on description field';
        mockData.description = pokemonData.description;

        expect(pokemonData).toEqual(mockData);
    });
});

export { }