import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import PokeTypes, { findPokeTypeByName } from "../../utils/PokeTypes";
import { IPokemonData } from "../../utils/Types";

interface Props { pokemon: IPokemonData}

const AboutCard = ({pokemon}: Props)=>{
    const { height,width } = Dimensions.get('window');

    const pokemonType = findPokeTypeByName(pokemon.types[0].type);

    return (
    <View style={[style.infoCardContainer,{width}]}>
        <ScrollView style={{ width: '100%',  height: height-380}}>
            <Text style={style.infoCardTextDescription}>Sdnf jdj nsfjnekfnen jnrj nrkjnf rnjf nrjnf jkrn kjn kjrnkj nrk nrk krn kjnrkjn kjrn kjnrk nkren kjrenk rekj nfkerjnvkjoksdjk kn </Text>
            <Text style={[style.infoCardTitle, { color: pokemonType.color }]}>Pokédex Data</Text>

            <View style={style.data}>
                <View style={style.dataTitle}>
                    <Text style={style.attributeTitle}>Species</Text>
                </View>
                <View style={style.dataContent}>
                    <Text style={style.attributeInfoText}>Seed Pokémon</Text>
                </View>
            </View>
            <View style={style.data}>
                <View style={style.dataTitle}>
                    <Text style={style.attributeTitle}>Height</Text>
                </View>
                <View style={style.dataContent}>
                    <Text style={style.attributeInfoText}>0,7m</Text>
                </View>
            </View>
            <View style={style.data}>
                <View style={style.dataTitle}>
                    <Text style={style.attributeTitle}>Weight</Text>
                </View>
                <View style={style.dataContent}>
                    <Text style={style.attributeInfoText}>6,9kg</Text>
                </View>
            </View>
            <View style={style.data}>
                <View style={style.dataTitle}>
                    <Text style={style.attributeTitle}>Abilities</Text>
                </View>
                <View style={style.dataContent}>
                    <Text style={style.attributeInfoText}>1. Overgrow</Text>
                    <Text style={style.attributeExtraText}>Chlorophill (hidden ability)</Text>
                </View>
            </View>
            <View style={style.data}>
                <View style={style.dataTitle}>
                    <Text style={style.attributeTitle}>Weakness</Text>
                </View>
                <View style={[style.dataContent,{ flexDirection: 'row' }]}>
                    <View 
                        style={{ 
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: PokeTypes[8].color,
                            padding: 4,
                            marginRight:8,
                            width: 32,
                            height: 32,
                            borderRadius:4
                         }}
                        >{PokeTypes[8].icon(20,20)}</View>
                        <View 
                        style={{ 
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: PokeTypes[9].color,
                            padding: 4,
                            marginRight:8,
                            width: 32,
                            height: 32,
                            borderRadius:4
                         }}
                        >{PokeTypes[9].icon(20,20)}</View>
                </View>
            </View>
            <Text style={[style.infoCardTitle, { color: pokemonType.color }]}>Training data</Text>

            <View style={style.data}>
                <View style={style.dataTitle}>
                    <Text style={style.attributeTitle}>EV Yield</Text>
                </View>
                <View style={style.dataContent}>
                    <Text style={style.attributeInfoText}>1 Special Attack</Text>
                </View>
            </View>
            <View style={style.data}>
                <View style={style.dataTitle}>
                    <Text style={style.attributeTitle}>Catch Rate</Text>
                </View>
                <View style={style.dataContent}>
                    <Text style={style.attributeInfoText}>45</Text>
                </View>
            </View>
            <View style={style.data}>
                <View style={style.dataTitle}>
                    <Text style={style.attributeTitle}>Base Friendship</Text>
                </View>
                <View style={style.dataContent}>
                    <Text style={style.attributeInfoText}>70</Text>
                </View>
            </View>
            <View style={style.data}>
                <View style={style.dataTitle}>
                    <Text style={style.attributeTitle}>Base Exp</Text>
                </View>
                <View style={style.dataContent}>
                    <Text style={style.attributeInfoText}>64</Text>
                </View>
            </View>
            <View style={style.data}>
                <View style={style.dataTitle}>
                    <Text style={style.attributeTitle}>Growth Rate</Text>
                </View>
                <View style={style.dataContent}>
                    <Text style={style.attributeInfoText}>Medium Slow</Text>
                </View>
            </View>
            <View style={{height:20}} />
        </ScrollView>
    </View>);
}

const style = StyleSheet.create({
    infoCardContainer: {
        borderRadius: 40,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 40,
    },
    infoCardTextDescription: {
        fontSize: 18,
        marginBottom: 8,
        fontFamily: 'sf-pro-display-regular',
        color: '#555'
    },
    infoCardTitle: {
        fontSize: 20,
        marginTop: 24,
        fontFamily: 'sf-pro-display-bold'
    },
    attributeTitle: {
        fontSize: 16,
        lineHeight: 20,
    },
    attributeInfoText: {
        fontSize: 20,
        lineHeight: 20,
        color: '#888',
        fontFamily: 'sf-pro-display-regular'
    },
    attributeExtraText: {
        fontSize: 16,
        color: '#888',
        fontFamily: 'sf-pro-display-regular'
    },
    data: { 
        flexDirection: 'row', 
        width: '100%', 
        marginTop: 24,
    },
    dataTitle: {
        flex: 0.35,
    },
    dataContent:{
        flex: 0.65,
    }
});

export default AboutCard;