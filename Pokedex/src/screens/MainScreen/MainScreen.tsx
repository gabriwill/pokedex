import React from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native'
import PokemonCard from "../../components/PokemonCard";
import Pokeball from '../../../assets/patterns/pokeball-grad.svg';
import Search from '../../../assets/icons/search.svg';
import Generations from '../../../assets/icons/generation.svg';
import Filter from '../../../assets/icons/filter.svg';
import Sort from '../../../assets/icons/sort.svg';
import { IPokemonData } from "../../utils/Types";

const bulbasaur: IPokemonData = {
    id: 1,
    name: 'bulbasaur',
    image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    types: [{type: 'grass'},{type: 'poison'}]
}

const graveler: IPokemonData = {
    id: 75,
    name: 'graveler',
    image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png',
    types: [{type: 'rock'},{type: 'ground'}]
}

const MainScreen = () => {

    return (
        <View style={style.container}>
            <View style={style.pokeball}>
                <Pokeball height={500} width={500} />
            </View>
            <View style={style.optionsBar}>
                <View style={style.optionsItens}>
                    <Generations height={32} width={32} />
                </View>
                <View style={style.optionsItens}>
                    <Sort height={32} width={32} />
                </View>
                <View style={style.optionsItens}>
                    <Filter height={32} width={32} />
                </View>
            </View>
            <View style={style.contentContainer}>
                <Text style={style.title} >Pokédex</Text>
                <Text style={style.subTitle}>Search for Pokémon by name or using the National Pokédex number.</Text>
                <View style={style.textInputContainer}>
                    <Search height={24} width={24}/>
                    <TextInput style={style.textInput} placeholder="What Pokémon are you looking for?" />
                </View>
                <View style={style.pokemonsList}>
                    <PokemonCard pokemon={bulbasaur} />
                    <PokemonCard pokemon={graveler} />
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
    optionsBar:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 16
    },
    optionsItens:{
        padding: 16
    },
    contentContainer: {
        paddingHorizontal: 24,
    },
    pokeball: {
        width: '100%',
        position: 'absolute',
        top: -250,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontFamily: 'sf-pro-display-bold',
        color: 'black',
        fontSize: 34,
        margin: 8,
    },
    subTitle: {
        fontSize: 20,
        fontFamily: 'sf-pro-display-regular',
        color: '#999',
        margin: 8
    },
    textInputContainer: {
        backgroundColor: '#eee',
        borderRadius: 8,
        margin: 8,
        padding: 8,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        fontSize: 20,
        marginHorizontal: 10,
        fontFamily: 'sf-pro-display-medium',
    },
    pokemonsList:{
        marginTop: 16
    }
});

export default MainScreen;