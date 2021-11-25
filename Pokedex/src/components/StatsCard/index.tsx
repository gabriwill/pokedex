import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import PokeTypes from "../../utils/PokeTypes";
import { CardProps } from "../../utils/Types";

const StatsCard = ({ pokemon, pokemonType }: CardProps) => {
    const { height, width } = Dimensions.get('window');
    let total =0;

    return (
        <View style={[style.infoCardContainer, { width }]}>
            <ScrollView style={{ width: '100%', height: height - 380 }}>
                <Text style={[style.infoCardTitle, { color: pokemonType.color }]}>Base Stats</Text>
                {pokemon.stats.map((value) =>{ 
                    total+= value.base_stat;
                    return (
                    <View key={value.stat} style={style.lineSequence}>
                        <View style={style.titleView}>
                            <Text style={style.title}>{value.stat}</Text>
                        </View>
                        <View style={style.infoView}>
                            <Text style={style.info}>{value.base_stat}</Text>
                        </View>
                        <View style={style.statBarView}>
                            <View style={[style.statBar, { backgroundColor: pokemonType.color }]} />
                        </View>
                        <View style={style.infoView}>
                            <Text style={style.info}>200</Text>
                        </View>
                        <View style={style.infoView}>
                            <Text style={style.info}>294</Text>
                        </View>

                    </View>
                )})}

                <View style={style.lineSequence}>
                    <View style={style.titleView}>
                        <Text style={style.title}>Total</Text>
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.infoTotal}>{total}</Text>
                    </View>
                    <View style={style.statBarView} />
                    <View style={style.infoView}>
                        <Text style={style.infoDescription}>Min</Text>
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.infoDescription}>Max</Text>
                    </View>

                </View>
                <Text style={[style.infoCardTitle, { color: pokemonType.color }]}>Type defense</Text>
                <Text style={style.description}>The effectiveness of each type on Bulbasaur:</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {PokeTypes.map((type) => {
                        const icon = type.icon(18, 18)
                        const mutiple = pokemon.typesDefMultiple.find((value)=>type.name==value.type)?.multiple
                        return (
                            <View key={type.name} style={style.typeAttributes}>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: type.color,
                                        padding: 4,
                                        width: 32,
                                        height: 32,
                                        borderRadius: 4
                                    }}
                                >{icon}</View>
                                <Text style={style.typeMutiple}>{mutiple}</Text>
                            </View>
                        )
                    })}
                </View>

                <Text style={[style.infoCardTitle, { color: pokemonType.color }]}>Type Attack</Text>
                <Text style={style.description}>The effectiveness of Bulbasaur against each type:</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {PokeTypes.map((type) => {
                        const icon = type.icon(18, 18)
                        const mutiple = pokemon.typesDefMultiple.find((value)=>type.name==value.type)?.multiple
                        return (
                            <View key={type.name} style={style.typeAttributes}>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: type.color,
                                        padding: 4,
                                        width: 32,
                                        height: 32,
                                        borderRadius: 4
                                    }}
                                >{icon}</View>
                                <Text style={style.typeMutiple}>{mutiple}</Text>
                            </View>
                        )
                    })}
                </View>
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
        marginVertical: 8,
        fontFamily: 'sf-pro-display-bold'
    },
    lineSequence: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4
    },
    titleView: {
        flex: 0.2
    },
    title: {

    },
    infoView: {
        flex: 0.1,
        margin: 4,
        justifyContent: 'center',
    },
    info: {
        color: '#999',
        fontSize: 20,
        fontFamily: 'sf-pro-display-regular',
        textAlign: 'right',
    },
    statBarView: {
        flex: 0.5,
        marginHorizontal: 4,
        flexDirection: 'row'
    },
    statBar: {
        height: 5,
        backgroundColor: 'green',
        borderRadius: 4,
        flex: 0.45
    },
    infoTotal: {
        fontFamily: 'sf-pro-display-regular',
        color: '#666',
        fontSize: 20
    },
    infoDescription: {
        textAlign: 'center'
    },
    description: {
        fontFamily: 'sf-pro-display-regular',
        color: '#666',
        fontSize: 16,
        marginBottom: 8
    },
    typeAttributes: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 6,
        marginVertical: 8,
    },
    typeMutiple: {
        width: '100%',
        fontFamily: 'sf-pro-display-regular',
        color: '#666',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 4
    }
});

export default StatsCard;