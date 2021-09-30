import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Pokeball from '../../../assets/patterns/pokeball-white.svg';
import GridPattern from '../../../assets/patterns/6x3-white.svg';
import TypeCard from "../TypeCard";

const PokemonCard = () =>{

    return (
        <View style={style.container}>
            <View style={style.gridPattern}>
                <GridPattern height={(171/75)*120} width={120} fillOpacity={0.2}/>
            </View>
            <View style={style.pokeball}>
                <Pokeball height={180} width={180} fillOpacity={0.2}/>
            </View>
            
            <View style={style.dataContainer}>
                <Text style={style.pokemonId}>#001</Text>
                <Text style={style.pokemonName}>Bulbasaur</Text>
                <View style={style.typesRow}>
                    <TypeCard type='grass'/>
                    <TypeCard type='poison' />
                </View>
            </View>
            <View>
                <Image 
                    style={style.pokemonImg} 
                    source={require('../../../assets/generations/generation1/001.png')} />
            </View>
            
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#8bbe8a',
        borderRadius: 8,
        height: 150, 
        marginHorizontal: 8,
        marginVertical: 16, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    dataContainer:{
        justifyContent: 'center',
        paddingLeft: 8
    },
    pokemonId:{
        color: '#49604c',
        fontSize: 16,
        fontFamily: 'sf-pro-display-bold'
    },
    pokemonName:{
        color: '#fff',
        fontSize: 32,
        fontFamily: 'sf-pro-display-bold',
        lineHeight: 40
    },
    typesRow:{
        flexDirection: 'row'
    },
    pokemonImg:{
        height: 160,
        width: 160,
        marginTop: -25,
    },
    pokeball:{
        position: 'absolute',
        top: -10,
        right: -15
    },
    gridPattern:{
        position: 'absolute',
        bottom: 0,
        left: 90 
    }
})

export default PokemonCard;