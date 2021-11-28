import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { findPokeTypeByName } from "../../utils/PokeTypes";
import LoadingIndicator from "../LoadingIndicator";

const AboutCard = ({ pokemon, pokemonType }: CardProps) => {
    const { height, width } = Dimensions.get('window');

    return (
        <View style={[style.infoCardContainer, { width }]}>
            {pokemon ? <ScrollView style={{ width: '100%', height: height - 380 }}>
                <Text style={style.infoCardTextDescription}>{pokemon.description}</Text>
                <Text style={[style.infoCardTitle, { color: pokemonType.color }]}>Pokédex Data</Text>

                <View style={style.data}>
                    <View style={style.dataTitle}>
                        <Text style={style.attributeTitle}>Species</Text>
                    </View>
                    <View style={style.dataContent}>
                        <Text style={style.attributeInfoText}>{pokemon.specieGenera}</Text>
                    </View>
                </View>
                <View style={style.data}>
                    <View style={style.dataTitle}>
                        <Text style={style.attributeTitle}>Height</Text>
                    </View>
                    <View style={style.dataContent}>
                        <Text style={style.attributeInfoText}>{`${pokemon.height}m`}</Text>
                    </View>
                </View>
                <View style={style.data}>
                    <View style={style.dataTitle}>
                        <Text style={style.attributeTitle}>Weight</Text>
                    </View>
                    <View style={style.dataContent}>
                        <Text style={style.attributeInfoText}>{`${pokemon.weight}kg`}</Text>
                    </View>
                </View>
                <View style={style.data}>
                    <View style={style.dataTitle}>
                        <Text style={style.attributeTitle}>Abilities</Text>
                    </View>
                    <View style={style.dataContent}>
                        {pokemon.abilities.filter((value) => (!value.isHidden)).map((value, index) => {
                            return <Text key={value.name} style={style.attributeInfoText}>{`${index + 1}. ${value.name}`}</Text>
                        })}
                        {pokemon.abilities.filter((value) => value.isHidden).map((value) => {
                            return <Text key={value.name} style={style.attributeExtraText}>{`${value.name} (hidden ability)`}</Text>
                        })}
                    </View>
                </View>
                <View style={style.data}>
                    <View style={style.dataTitle}>
                        <Text style={style.attributeTitle}>Weakness</Text>
                    </View>
                    <View style={[style.dataContent, { flexDirection: 'row' }]}>
                        {pokemon.typesWeakness.map((value) => {
                            const type = findPokeTypeByName(value.type)
                            return (
                                <View
                                    key={type.name}
                                    style={[style.typeIcon, { backgroundColor: type.color }]}
                                >{type.icon(20, 20)}</View>)
                        })}
                    </View>
                </View>
                <View style={style.data}>
                    <View style={style.dataTitle}>
                        <Text style={style.attributeTitle}>Habitat</Text>
                    </View>
                    <View style={style.dataContent}>
                        <Text style={style.attributeInfoText}>{pokemon.habitat}</Text>
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
                        <Text style={style.attributeInfoText}>{pokemon.baseFriendship}</Text>
                    </View>
                </View>
                <View style={style.data}>
                    <View style={style.dataTitle}>
                        <Text style={style.attributeTitle}>Base Exp</Text>
                    </View>
                    <View style={style.dataContent}>
                        <Text style={style.attributeInfoText}>{pokemon.baseExperience}</Text>
                    </View>
                </View>
                <View style={style.data}>
                    <View style={style.dataTitle}>
                        <Text style={style.attributeTitle}>Growth Rate</Text>
                    </View>
                    <View style={style.dataContent}>
                        <Text style={style.attributeInfoText}>{pokemon.growRate}</Text>
                    </View>
                </View>
                <View style={{ height: 20 }} />
            </ScrollView> :
                <LoadingIndicator height={500} />
            }
        </View>);
}

const style = StyleSheet.create({
    infoCardContainer: {
        borderRadius: 40,
        backgroundColor: '#fff',
        paddingTop: 40,
        paddingHorizontal: 40,
        minHeight: 200
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
    dataContent: {
        flex: 0.65,
    },
    typeIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 4,
        marginRight: 8,
        width: 32,
        height: 32,
        borderRadius: 4
    }
});

export default AboutCard;