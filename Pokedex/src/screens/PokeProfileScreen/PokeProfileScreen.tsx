import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import Pokeball from '../../../assets/patterns/pokeball-grad.svg';
import GridPattern from '../../../assets/patterns/10x5.svg';
import Circle from '../../../assets/patterns/circle.svg';
import BackSvg from '../../../assets/icons/back.svg'
import TypeCard from "../../components/TypeCard";
import PokeTypes from "../../utils/PokeTypes";
import GradientText from "../../components/GradientText";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParamsList";

type Props = NativeStackScreenProps<RootStackParamList,'PokeProfile'>;

const PokeProfileScreen = ({ navigation, route }: Props) => {
    const pokemon = route.params.pokemon

    function idToIDString(id: number) {
        let text = `#${id}`
        if (id < 10) {
            text = `#00${id}`
        } else if (id < 100) {
            text = `#0${id}`
        }
        return text
    }

    const pokemonType = PokeTypes.find(element => element.name.toLowerCase() === pokemon.types[0].type.toLowerCase()) || PokeTypes[0]

    function capitalize(s: string) {
        return s[0].toUpperCase() + s.slice(1);
    }

    return (
        <View style={[style.container, { backgroundColor: pokemonType.backgroundColor }]}>
            <View style={style.gridPattern}>
                <GridPattern height={(161 / 75) * 200} width={200} fillOpacity={0.2} />
            </View>
            <View style={style.pokeball}>
                <Pokeball height={120} width={120} />
            </View>
            <View style={style.pokemonNameEffectView}>
                <GradientText style={style.pokemonNameEffect}>{pokemon.name.toUpperCase()}</GradientText>
            </View>
            <TouchableOpacity style={style.backButton} onPress={()=>navigation.goBack()}>
            <BackSvg height={30} width={30} />
            </TouchableOpacity>
            <View style={style.imageContainer}>
                <Circle style={style.circleImg} height={140} width={140} /> 
                <Image
                    style={style.pokemonImg}

                    source={{
                        uri: pokemon.image_url,
                    }}
                />
            </View>
            <View style={style.dataContainer}>
                <Text style={[style.pokemonId, { color: pokemonType.fontColor }]}>{idToIDString(pokemon.id)}</Text>
                <Text style={style.pokemonName}>{capitalize(pokemon.name)}</Text>
                <View style={style.typesRow}>
                    {pokemon.types.map(e => <TypeCard key={e.type} type={e.type.toLowerCase()} />)}
                </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#aaa',
        height: 350,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 16
    },
    dataContainer: {
        justifyContent: 'center',
        paddingLeft: 8
    },
    imageContainer: {
        justifyContent: 'center',
    },
    pokemonId: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'sf-pro-display-bold'
    },
    pokemonName: {
        color: '#fff',
        fontSize: 32,
        fontFamily: 'sf-pro-display-bold',
        lineHeight: 40
    },
    typesRow: {
        flexDirection: 'row'
    },
    pokemonImg: {
        height: 160,
        width: 160,
        marginTop: -25,
    },
    pokeball: {
        position: 'absolute',
        bottom: -10,
        left: 15
    },
    gridPattern: {
        position: 'absolute',
        bottom: -90,
        right: -70
    },
    circleImg: {
        position: 'absolute',
        right: 0
    },
    pokemonNameEffectView: {
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',

    },
    pokemonNameEffect: {
        fontFamily: 'Goffik-O',
        fontSize: 120,
        color: '#fff',
        textAlign: 'center',
        width: '100%',
    },
    backButton:{
        position:'absolute',
        top: 20
    }
})

export default PokeProfileScreen;