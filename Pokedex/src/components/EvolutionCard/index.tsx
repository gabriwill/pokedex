import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { pokemonDataToPokemonBasicData } from "../../utils/Types";
import LoadingIndicator from "../LoadingIndicator";

const EvolutionCard = ({ pokemon, pokemonType }: CardProps) => {
    const { height, width } = Dimensions.get('window');

    const idToIDString = (id: number) => {
        let text = `#${id}`
        if (id < 10) {
            text = `#00${id}`
        } else if (id < 100) {
            text = `#0${id}`
        }
        return text
    }

    return (
        <View style={[style.infoCardContainer, { width }]}>
            {pokemon ? <ScrollView style={{ width: '100%', height: height - 380 }}>
                <Text style={[style.infoCardTitle, { color: pokemonType.color }]}>Evolution Chart</Text>
                {pokemon.evolutionChain.map((value, index, arr) => {
                    let evolvesFrom = value.origin;
                    if (index != 0) {
                        evolvesFrom = arr[index - 1].evolvesTo;
                    }
                    const minLevel = value.minLevel;
                    const evolvesTo = value.evolvesTo;

                    return (
                        <View key={String(evolvesTo.name)} style={style.lineSequence}>
                            <View>
                                <View style={style.imgView}>
                                    <Image
                                        style={style.pokemonImg}

                                        source={{
                                            uri: evolvesFrom.image_url,
                                        }}
                                    />
                                </View>
                                <View style={style.dataContent}>
                                    <Text style={style.evolutionId}>{idToIDString(evolvesFrom.id)}</Text>
                                    <Text style={style.evolutionName}>{evolvesFrom.name.capitalize()}</Text>
                                </View>
                            </View>
                            <Text style={style.textLevel}>{`(level ${minLevel})`}</Text>
                            <View>
                                <View style={style.imgView}>
                                    <Image
                                        style={style.pokemonImg}

                                        source={{
                                            uri: evolvesTo.image_url,
                                        }}
                                    />
                                </View>
                                <View style={style.dataContent}>
                                    <Text style={style.evolutionId}>{idToIDString(evolvesTo.id)}</Text>
                                    <Text style={style.evolutionName}>{evolvesTo.name.capitalize()}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}

            </ScrollView> :
                <LoadingIndicator />
            }
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
        minHeight: 200
    },
    infoCardTitle: {
        fontSize: 20,
        marginBottom: 30,
        fontFamily: 'sf-pro-display-bold'
    },
    lineSequence: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    imgView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
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
    textLevel: {
        fontWeight: 'bold',
        fontSize: 14
    }
});

export default EvolutionCard;