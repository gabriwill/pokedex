import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { CardProps, pokemonDataToPokemonBasicData } from "../../utils/Types";

const EvolutionCard = ({ pokemon, pokemonType }: CardProps) => {
    const { height, width } = Dimensions.get('window');

    const idToIDString= (id: number)=>{
        let text = `#${id}`
        if (id < 10) {
            text = `#00${id}`
        } else if (id < 100) {
            text = `#0${id}`
        }
        return text
    }

    const capitalize=(s: string)=> s[0].toUpperCase() + s.slice(1);

    return (
        <View style={[style.infoCardContainer, { width }]}>
            <ScrollView style={{ width: '100%', height: height - 380 }}>
                <Text style={[style.infoCardTitle, { color: pokemonType.color }]}>Evolution Chart</Text>
                {pokemon.evolutionChain.map((value, index, arr) => {
                    let evolvesFrom =pokemonDataToPokemonBasicData(pokemon);
                    if(index!=0){
                        evolvesFrom = arr[index-1].evolvesTo;
                    }
                    const minLevel = value.minLevel;
                    const evolvesTo = value.evolvesTo;

                    return (
                        <View key={minLevel} style={style.lineSequence}>
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
                                    <Text style={style.evolutionName}>{capitalize(evolvesFrom.name)}</Text>
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
                                    <Text style={style.evolutionName}>{capitalize(evolvesTo.name)}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}
                
            </ScrollView>
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