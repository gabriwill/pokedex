import React from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native'

const MainScreen = () => {

    return (
        <View>
            <View style={style.view2}></View>
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
    contentContainer: {
        padding: 8
    },
    view2:{
        backgroundColor: 'red',
        height: 50,
        width: '100%',
        position: 'absolute',
        top: 0
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 34
    },
    subTitle: {
        fontSize: 20,
        color: '#555'
    },
    textInputContainer: {
        backgroundColor: '#eee',
        borderRadius: 8
    }
});

export default MainScreen;
