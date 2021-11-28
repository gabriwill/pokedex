import { Repository } from "../../src/repository/Repository";
import { MockData } from "../testUtils/MockData";

describe('Tests the repository layer of application', () => {
    it('Should obtain a list of ten first pokemon\'s basic data from API whenthe search string is empty', async () => {
        const repository = new Repository();
        await repository.initializer();
        repository.setSearchString('');
        await repository.addNewPokemonsToList();

        expect(repository.getPokemonList()).toEqual(MockData.searchEmptyStringResult)
    });

    it('Should obtain a list of ten first pokemon\'s basic data whose name contains the pattern ar from API when the search string is \'ar\'', async () => {
        const repository = new Repository();
        await repository.initializer();
        repository.setSearchString('ar');
        await repository.addNewPokemonsToList();

        expect(repository.getPokemonList()).toEqual(MockData.tenPokemonWithar)
    });
    jest.setTimeout(10000)
    it('Should obtain a list of ten first pokemon\'s basic data whose name contains the character z from API when the search string is \'z\'', async () => {
        const repository = new Repository();
        await repository.initializer();
        repository.setSearchString('z');
        await repository.addNewPokemonsToList();

        expect(repository.getPokemonList()).toEqual(MockData.tenPokemonWithz)
    });

    it('Should change a list of ten first pokemon\'s basic data to a list of ten first pokemon\'s basic data whose name contains the pattern ar from API when the search string is \'ar\'', async () => {
        const repository = new Repository();
        await repository.initializer();
        repository.setSearchString('');
        await repository.addNewPokemonsToList();
        expect(repository.getPokemonList()).toEqual(MockData.searchEmptyStringResult)

        repository.setSearchString('ar');
        await repository.addNewPokemonsToList();
        expect(repository.getPokemonList()).toEqual(MockData.tenPokemonWithar)
    });

    it('Should begin a search for ten first pokemon\'s, but interrupt it when search string is changed to \'ar\', then search a list of ten first pokemon\'s basic data whose name contains the pattern ar from API', async () => {
        const repository = new Repository();
        await repository.initializer();
        repository.setSearchString('');
        repository.addNewPokemonsToList();
        await new Promise(r => setInterval(r, 500))

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