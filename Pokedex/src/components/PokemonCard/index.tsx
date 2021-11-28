import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import Pokeball from '../../../assets/patterns/pokeball-white.svg';
import GridPattern from '../../../assets/patterns/6x3-white.svg';
import TypeCard from "../TypeCard";
import { findPokeTypeByName } from "../../utils/PokeTypes";
import { SharedElement } from "react-navigation-shared-element";

interface Props {
    pokemon: IPokemonCardData,
    navigation: any
}

const PokemonCard = ({ pokemon, navigation }: Props) => {
    //const navigator = useNavigation<HomeScreenProps>();

    const onPress = () => {
        navigation.navigate('PokeProfile', { pokemon })
    }

    function idToIDString(id: number) {
        let text = `#${id}`
        if (id < 10) {
            text = `#00${id}`
        } else if (id < 100) {
            text = `#0${id}`
        }
        return text
    }

    const pokemonType = findPokeTypeByName(pokemon.types[0].type);

    return (
        <TouchableOpacity
            style={[style.container, { backgroundColor: pokemonType.backgroundColor }]}
            onPress={onPress}
        >
            <View style={style.gridPattern}>
                <GridPattern height={(171 / 75) * 120} width={120} fillOpacity={0.2} />
            </View>
            <View style={style.pokeball}>
                <Pokeball height={180} width={180} fillOpacity={0.2} />
            </View>

            <View style={style.dataContainer}>
                <Text style={[style.pokemonId, { color: pokemonType.fontColor }]}>{idToIDString(pokemon.id)}</Text>
                <Text numberOfLines={1} ellipsizeMode={'clip'} style={style.pokemonName}>{pokemon.name}</Text>
                <View style={style.typesRow}>
                    {pokemon.types.map(({ type }) => <TypeCard key={type} type={type.toLowerCase()} />)}
                </View>
            </View>
            <View>
                <SharedElement id={`${pokemon.id}`}>
                    <Image
                        style={style.pokemonImg}

                        source={{
                            uri: pokemon.image_url,
                        }}
                    />
                </SharedElement>
            </View>

        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#aaa',
        borderRadius: 8,
        height: 150,
        marginHorizontal: 8,
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    dataContainer: {
        justifyContent: 'center',
        paddingLeft: 8,
        maxWidth: '50%'
    },
    pokemonId: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'sf-pro-display-bold'
    },
    pokemonName: {
        color: '#fff',
        fontSize: 32,
        fontFamily: 'sf-pro-display-bold',
        lineHeight: 40,
        textTransform: 'capitalize',
    },
    typesRow: {
        flexDirection: 'row'
    },
    pokemonImg: {
        height: 160,
        width: 160,
        marginTop: -25,
    },
    pokeball: {
        position: 'absolute',
        top: -10,
        right: -15
    },
    gridPattern: {
        position: 'absolute',
        bottom: 0,
        left: 90
    }
})

export default PokemonCard;