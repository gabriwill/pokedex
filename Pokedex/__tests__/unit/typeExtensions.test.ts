import '../../src/@types/string.extensions'

describe("Tests to new type extensions", () => {
    it('Should transform only the initial to upper case', () => {
        expect('pokemon'.capitalize()).toEqual("Pokemon");
    });

    it('Should format a string like \'pokemon-api\' to \'Pokemon Api\'', () => {
        expect('pokemon-api'.stringFormat()).toEqual('Pokemon Api');
        expect('-test-string'.stringFormat()).toEqual('Test String');
        expect('abcd-efg-ert-'.stringFormat()).toEqual('Abcd Efg Ert');
    });
});
export { }