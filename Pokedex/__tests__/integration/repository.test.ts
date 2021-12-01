import { Repository } from "../../src/repository/Repository";
import { SortType } from "../../src/repository/SortType";
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

    it('Should obtain a list of twenty first pokemon\'s basic data from API whenthe search string is empty', async () => {
        const repository = new Repository();
        await repository.initializer();
        repository.setSearchString('');
        await repository.addNewPokemonsToList();
        await repository.addNewPokemonsToList();

        expect(repository.getPokemonList()).toEqual(MockData.firstTwentyPokemons)
    });

    it('Should obtain a list of ten last pokemon\'s basic data from API when the search string is empty and the sortType is numerical descendent', async () => {
        const repository = new Repository();
        await repository.initializer();
        repository.setSearchString('');
        repository.setSortType(SortType.NUMERIC_DESC);
        await repository.addNewPokemonsToList();

        expect(repository.getPokemonList()).toEqual(MockData.searchEmptyStringNumericalDesc)
    });

    it('Should obtain a list of ten pokemon\'s from API in alphabetical descendent order when the search string is empty and the sortType is alphabetical descendent', async () => {
        const repository = new Repository();
        await repository.initializer();
        repository.setSearchString('');
        repository.setSortType(SortType.ALPHABETIC_DESC);
        await repository.addNewPokemonsToList();

        expect(repository.getPokemonList()).toEqual(MockData.searchEmptyStringAlphbeticDesc)
    });

    it('Should obtain a list of ten pokemon\'s from API in alphabetical order when the search string is empty and the sortType is alphabetical', async () => {
        const repository = new Repository();
        await repository.initializer();
        repository.setSearchString('');
        repository.setSortType(SortType.ALPHABETIC);
        await repository.addNewPokemonsToList();

        expect(repository.getPokemonList()).toEqual(MockData.searchEmptyStringAlphbetic)
    });

    it('Should obtain a list of ten first pokemon\'s from API in alphabetical order that contains the pattern ar in its name when the sortType is alphabetical and search string is \'ar\'', async () => {
        const repository = new Repository();
        await repository.initializer();
        repository.setSearchString('ar');
        repository.setSortType(SortType.ALPHABETIC);
        await repository.addNewPokemonsToList();

        expect(repository.getPokemonList()).toEqual(MockData.tenPokemonWitharAlphabetic)
    });
    it('Should obtain a list of ten pokemon\'s from API in alphabetical descendent order that contains the pattern ar in its name when the sortType is alphabetical_desc and search string is \'ar\'', async () => {
        const repository = new Repository();
        await repository.initializer();
        repository.setSearchString('ar');
        repository.setSortType(SortType.ALPHABETIC_DESC);
        await repository.addNewPokemonsToList();

        expect(repository.getPokemonList()).toEqual(MockData.tenPokemonWitharAlphabeticDesc)
    });

    it('Should obtain a list of ten last pokemon\'s from API order that contains the pattern ar in its name when the sortType is numerical descendent and search string is \'ar\'', async () => {
        const repository = new Repository();
        await repository.initializer();
        repository.setSearchString('ar');
        repository.setSortType(SortType.NUMERIC_DESC);
        await repository.addNewPokemonsToList();

        expect(repository.getPokemonList()).toEqual(MockData.tenPokemonWitharNumericalDesc)
    });
});

export { }