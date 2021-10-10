import { IPokemonBasicData } from "../utils/Types";

export type RootStackParamList = {
    Home: undefined;
    PokeProfile: { pokemon: IPokemonBasicData};
};