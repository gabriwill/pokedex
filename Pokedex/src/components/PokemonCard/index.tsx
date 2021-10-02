import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";

import Pokeball from '../../../assets/patterns/pokeball-white.svg';
import GridPattern from '../../../assets/patterns/6x3-white.svg';
import TypeCard from "../TypeCard";
import { IPokemonData } from "../../utils/Types";
import PokeTypes from "../../utils/PokeTypes";

interface Props {
    pokemon: IPokemonData,
    navigation: any
}

const PokemonCard = ({ pokemon,navigation }: Props) =>{
    //const navigator = useNavigation<HomeScreenProps>();

    const onPress = ()=>{
        navigation.navigate('PokeProfile',{pokemon})
    }

    function idToIDString(id: number) {
        let text = `#${id}`
        if(id<10) {
            text = `#00${id}`
        }else if(id<100){
            text = `#0${id}`
        }
        return text
    }

    const pokemonType = PokeTypes.find(element => element.name.toLowerCase() === pokemon.types[0].type.toLowerCase()) || PokeTypes[0]

    function capitalize(s: string){
        return s[0].toUpperCase() + s.slice(1);
    }

    return (
        <TouchableOpacity 
            style={[style.container,{backgroundColor: pokemonType.backgroundColor}]} 
            onPress={onPress}
            >
            <View style={style.gridPattern}>
                <GridPattern height={(171/75)*120} width={120} fillOpacity={0.2}/>
            </View>
            <View style={style.pokeball}>
                <Pokeball height={180} width={180} fillOpacity={0.2}/>
            </View>
            
            <View style={style.dataContainer}>
                <Text style={[style.pokemonId,{color: pokemonType.fontColor}]}>{idToIDString(pokemon.id)}</Text>
                <Text style={style.pokemonName}>{capitalize(pokemon.name)}</Text>
                <View style={style.typesRow}>
                    {pokemon.types.map(e=> <TypeCard key={e.type} type={e.type.toLowerCase()}/>)}
                </View>
            </View>
            <View>
                <Image 
                    style={style.pokemonImg} 
                    
                    source={{
                        uri: pokemon.image_url,
                      }}
                    />
            </View>
            
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#aaa',
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
        color: '#000',
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