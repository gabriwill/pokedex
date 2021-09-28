import React from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Pokeball from '../../../assets/patterns/pokeball-grad.svg';

const MainScreen = () => {

    return (
        <View style={style.container}>
            <View style={style.pokeball}>
                <Pokeball height={500} width={500} />
            </View>
            <View style={style.contentContainer}>
                <Text style={style.title} >Pokédex</Text>
                <Text style={style.subTitle}>Search for Pokémon by name or using the National Pokédex number.</Text>
                <View style={style.textInputContainer}>
                    <TextInput placeholder="What Pokémon are you looking for?" />
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    contentContainer: {
        padding: 24
    },
    pokeball: {
        width: '100%',
        position: 'absolute',
        top: -250,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 34,
        margin: 8,
        marginTop:32
    },
    subTitle: {
        fontSize: 20,
        color: '#666',
        margin: 8
    },
    textInputContainer: {
        backgroundColor: '#eee',
        borderRadius: 8,
        margin: 8
    }
});

export default MainScreen;
