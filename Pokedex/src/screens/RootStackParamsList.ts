import { IPokemonData } from "../utils/Types";

export type RootStackParamList = {
    Home: undefined;
    PokeProfile: { pokemon: IPokemonData};
};