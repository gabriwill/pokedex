import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PokeTypes from "../../utils/PokeTypes";

interface Props {
    type: string
}

const TypeCard = ({type}:Props) =>{

    const pokemonType = PokeTypes.find(element => element.name.toLowerCase() === type.toLowerCase()) || PokeTypes[0]

    return (
        <View style={[style.container, {backgroundColor: pokemonType.color}]}>
            {pokemonType.icon}
            <Text style={style.text}>{pokemonType.name}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginTop: 8
    },
    text: {
        fontFamily: 'sf-pro-display-regular',
        marginLeft: 8,
        color: '#fff',
        fontSize: 16,
        lineHeight: 20
    }
})

export default TypeCard;