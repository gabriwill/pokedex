import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import PokeTypes from "../../utils/PokeTypes";
import { IPokemonData } from "../../utils/Types";

interface Props { pokemon: IPokemonData }

const EvolutionCard = ({ pokemon }: Props) => {
    const { height, width } = Dimensions.get('window');

    const pokemonType = PokeTypes.find(element => element.name.toLowerCase() === pokemon.types[0].type.toLowerCase()) || PokeTypes[0];

    return (
        <View style={[style.infoCardContainer, { width }]}>
            <View style={{ width: '100%', height: height - 380 }}>
                <Text style={[style.infoCardTitle, { color: pokemonType.color }]}>Evolution Chart</Text>
                <View style={style.lineSequence}>
                    <View>
                        <View style={style.imgView}>
                            <Image
                                style={style.pokemonImg}

                                source={{
                                    uri: pokemon.image_url,
                                }}
                            />
                        </View>
                        <View style={style.dataContent}>
                            <Text style={style.evolutionId}>#001</Text>
                            <Text style={style.evolutionName}>Bulbasaur</Text>
                        </View>
                    </View>
                    <Text style={style.textLevel}>(level 16)</Text>
                    <View>
                        <View style={style.imgView}>
                            <Image
                                style={style.pokemonImg}

                                source={{
                                    uri: pokemon.image_url,
                                }}
                            />
                        </View>
                        <View style={style.dataContent}>
                            <Text style={style.evolutionId}>#001</Text>
                            <Text style={style.evolutionName}>Bulbasaur</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>);
}

const style = StyleSheet.create({
    pokemonImg: {
        height: 80,
        width: 80,
    },
    infoCardContainer: {
        borderRadius: 40,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 40,
    },
    infoCardTitle: {
        fontSize: 20,
        marginBottom:30,
        fontFamily: 'sf-pro-display-bold'
    },
    lineSequence:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef',
        padding: 16,
        borderRadius: 100,
        margin: 8
    },
    dataContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    evolutionId: {
        color: '#666',
        fontSize: 14
    },
    evolutionName: {
        fontWeight: 'bold',
        fontSize: 16
    },
    textLevel:{
        fontWeight: 'bold',
        fontSize: 14
    }
});

export default EvolutionCard;