export const pokemonDataToPokemonBasicData = ({ id, name, image_url, types }: IPokemonData): IPokemonCardData => {
    return { id, name, image_url, types }
}