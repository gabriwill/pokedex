import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import PokeTypes, { findPokeTypeByName } from "../../utils/PokeTypes";
import { IPokemonData } from "../../utils/Types";

interface Props { pokemon: IPokemonData }

const StatsCard = ({ pokemon }: Props) => {
    const { height, width } = Dimensions.get('window');

    const pokemonType = findPokeTypeByName(pokemon.types[0].type);

    return (
        <View style={[style.infoCardContainer, { width }]}>
            <ScrollView style={{ width: '100%', height: height - 380 }}>
                <Text style={[style.infoCardTitle, { color: pokemonType.color }]}>Base Stats</Text>
                <View style={style.lineSequence}>
                    <View style={style.titleView}>
                        <Text style={style.title}>HP</Text>
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>45</Text>
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
                <View style={style.lineSequence}>
                    <View style={style.titleView}>
                        <Text style={style.title}>Attack</Text>
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>49</Text>
                    </View>
                    <View style={style.statBarView}>
                        <View style={[style.statBar, { backgroundColor: pokemonType.color }]} />
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>92</Text>
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>216</Text>
                    </View>

                </View>
                <View style={style.lineSequence}>
                    <View style={style.titleView}>
                        <Text style={style.title}>Defense</Text>
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>49</Text>
                    </View>
                    <View style={style.statBarView}>
                        <View style={[style.statBar, { backgroundColor: pokemonType.color }]} />
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>92</Text>
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>216</Text>
                    </View>

                </View>
                <View style={style.lineSequence}>
                    <View style={style.titleView}>
                        <Text style={style.title}>Sp. Atk</Text>
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>64</Text>
                    </View>
                    <View style={style.statBarView}>
                        <View style={[style.statBar, { backgroundColor: pokemonType.color }]} />
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>121</Text>
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>251</Text>
                    </View>

                </View>
                <View style={style.lineSequence}>
                    <View style={style.titleView}>
                        <Text style={style.title}>Sp.Def</Text>
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>64</Text>
                    </View>
                    <View style={style.statBarView}>
                        <View style={[style.statBar, { backgroundColor: pokemonType.color }]} />
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>121</Text>
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>251</Text>
                    </View>

                </View>
                <View style={style.lineSequence}>
                    <View style={style.titleView}>
                        <Text style={style.title}>Speed</Text>
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>45</Text>
                    </View>
                    <View style={style.statBarView}>
                        <View style={[style.statBar, { backgroundColor: pokemonType.color }]} />
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>85</Text>
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.info}>207</Text>
                    </View>

                </View>
                <View style={style.lineSequence}>
                    <View style={style.titleView}>
                        <Text style={style.title}>Total</Text>
                    </View>
                    <View style={style.infoView}>
                        <Text style={style.infoTotal}>813</Text>
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
                    {PokeTypes.map((value) => {
                        const icon = value.icon(18, 18)
                        return (
                            <View key={value.name} style={style.typeAttributes}>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: value.color,
                                        padding: 4,
                                        width: 32,
                                        height: 32,
                                        borderRadius: 4
                                    }}
                                >{icon}</View>
                                <Text style={style.typeMutiple}>2</Text>
                            </View>
                        )
                    })}
                </View>

                <Text style={[style.infoCardTitle, { color: pokemonType.color }]}>Type Attack</Text>
                <Text style={style.description}>The effectiveness of Bulbasaur against each type:</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {PokeTypes.map((value) => {
                        const icon = value.icon(18, 18)
                        return (
                            <View key={value.name} style={style.typeAttributes}>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: value.color,
                                        padding: 4,
                                        width: 32,
                                        height: 32,
                                        borderRadius: 4
                                    }}
                                >{icon}</View>
                                <Text style={style.typeMutiple}>1/2</Text>
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
        marginBottom:8
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
        textAlign:'center',
        marginVertical: 4
    }
});

export default StatsCard;