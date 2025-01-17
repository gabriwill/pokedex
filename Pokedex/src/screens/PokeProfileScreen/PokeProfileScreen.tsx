import React, { useEffect, useRef, useState } from "react"
import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import Pokeball from '../../../assets/patterns/pokeball-grad.svg';
import GridPattern from '../../../assets/patterns/10x5.svg';
import Circle from '../../../assets/patterns/circle.svg';
import BackSvg from '../../../assets/icons/back.svg'
import TypeCard from "../../components/TypeCard";
import { findPokeTypeByName } from "../../utils/PokeTypes";
import GradientText from "../../components/GradientText";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParamsList";
import { SharedElement } from "react-navigation-shared-element";
import AboutCard from "../../components/AboutCard";
import EvolutionCard from "../../components/EvolutionCard";
import StatsCard from "../../components/StatsCard";
import { Repository } from "../../repository/Repository";
import { API } from "../../api/API";

type Props = NativeStackScreenProps<RootStackParamList, 'PokeProfile'>;

const PokeProfileScreen = ({ navigation, route }: Props) => {
    const [update, setUpdate] = useState(false)
    const pokemon: IPokemonCardData = route.params.pokemon
    const { height, width } = Dimensions.get('window');
    let menuList: any;
    const [pokemonData, setPokemonData] = useState<IPokemonData | undefined>();
    useEffect(() => {
        async function fetchData() {
            const data = await Repository.getPokemonData(new API(), pokemon.id);
            setPokemonData(data);
        }
        fetchData();
    }, [update]);
    const scrollX = useRef(new Animated.Value(0)).current;
    const translateX = scrollX.interpolate({
        inputRange: [0, width, width * 2],
        outputRange: [0, 120, 260]
    });
    const opacity = (i: number) => scrollX.interpolate({
        inputRange: [0, width, width * 2],
        outputRange: [i == 0 ? 1 : 0.5, i == 1 ? 1 : 0.5, i == 2 ? 1 : 0.5]
    });

    const idToIDString = (id: number) => {
        let text = `#${id}`
        if (id < 10) {
            text = `#00${id}`
        } else if (id < 100) {
            text = `#0${id}`
        }
        return text
    }

    const pokemonType = findPokeTypeByName(pokemon.types[0].type);

    const scrollListToIndex = (index: number) => { menuList?.scrollToIndex({ index }) }

    return (
        <View style={{ backgroundColor: '#fff', height }}>
            <View style={[style.cardContainer, { backgroundColor: pokemonType.backgroundColor, width }]}>
                <View style={style.gridPattern}>
                    <GridPattern height={(161 / 75) * 200} width={200} fillOpacity={0.2} />
                </View>
                <Animated.View
                    style={[
                        style.pokeball, {
                            transform: [{ translateX }]
                        }
                    ]}>
                    <Pokeball height={120} width={120} />
                </Animated.View>
                <View style={style.pokemonNameEffectView}>
                    <GradientText style={style.pokemonNameEffect}>{pokemon.name.toUpperCase()}</GradientText>
                </View>
                <TouchableOpacity style={style.backButton} onPress={() => navigation.goBack()}>
                    <BackSvg height={30} width={30} />
                </TouchableOpacity>
                <View style={style.imageContainer}>
                    <Circle style={style.circleImg} height={140} width={140} />
                    <SharedElement id={`${pokemon.id}`}>
                        <Image
                            style={style.pokemonImg}

                            source={{
                                uri: pokemon.image_url,
                            }}
                        />
                    </SharedElement>
                </View>
                <View style={style.dataContainer}>
                    <Text style={[style.pokemonId, { color: pokemonType.fontColor }]}>{idToIDString(pokemon.id)}</Text>
                    <Text ellipsizeMode="clip" numberOfLines={1} style={style.pokemonName}>{pokemon.name}</Text>
                    <View style={style.typesRow}>
                        {pokemon.types.map(({ type }) => <TypeCard key={type} type={type} />)}
                    </View>
                </View>

            </View>
            <View style={style.infoContainer}>
                <View style={style.infoMenuContainer}>
                    <TouchableOpacity onPress={() => scrollListToIndex(0)}>
                        <Animated.Text style={[style.infoMenuText, { opacity: opacity(0) }]}>About</Animated.Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => scrollListToIndex(1)}>
                        <Animated.Text style={[style.infoMenuText, { opacity: opacity(1) }]}>Stats</Animated.Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => scrollListToIndex(2)}>
                        <Animated.Text style={[style.infoMenuText, { opacity: opacity(2) }]}>Evolutions</Animated.Text>
                    </TouchableOpacity>
                </View>
                <Animated.FlatList
                    data={[<AboutCard pokemon={pokemonData} pokemonType={pokemonType} />,
                    <StatsCard pokemon={pokemonData} pokemonType={pokemonType} />,
                    <EvolutionCard pokemon={pokemonData} pokemonType={pokemonType} />]}
                    renderItem={({ item }) => item}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    getItemLayout={(data, index) => ({ length: width, offset: width * index, index })}
                    ref={list => { menuList = list }}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true }
                    )}
                />

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    infoMenuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 16
    },
    infoMenuText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: 'bold',
        fontFamily: 'sf-pro-display-regular'
    },
    infoContainer: {
        marginTop: -100,
        width: '100%'
    },
    cardContainer: {
        backgroundColor: '#aaa',
        height: 350,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 32
    },
    dataContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 8
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    pokemonId: {
        color: '#000',
        fontSize: 18,
        fontFamily: 'sf-pro-display-bold'
    },
    pokemonName: {
        color: '#fff',
        fontSize: 36,
        fontFamily: 'sf-pro-display-bold',
        lineHeight: 40,
        textTransform: 'capitalize'
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
        bottom: -20,
        left: 40
    },
    gridPattern: {
        position: 'absolute',
        bottom: -90,
        right: -70
    },
    circleImg: {
        position: 'absolute',
        left: 16
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
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20
    }
})

export default PokeProfileScreen;