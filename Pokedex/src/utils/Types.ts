export const pokemonDataToPokemonBasicData = ({ id, name, image_url, types }: IPokemonData): IPokemonBasicData => {
    return { id, name, image_url, types }
}