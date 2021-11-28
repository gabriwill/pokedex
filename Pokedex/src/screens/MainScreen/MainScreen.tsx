import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import PokemonCard from "../../components/PokemonCard";
import Pokeball from '../../../assets/patterns/pokeball-grad.svg';
import Search from '../../../assets/icons/search.svg';
import Generations from '../../../assets/icons/generation.svg';
import Filter from '../../../assets/icons/filter.svg';
import Sort from '../../../assets/icons/sort.svg';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParamsList";
import { Repository } from "../../repository/Repository";
import LoadingIndicator from "../../components/LoadingIndicator";

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const MainScreen = ({ navigation }: HomeScreenProps) => {
    const repository = useMemo(() => new Repository(), []);
    const { height, width } = Dimensions.get('window');
    const [update, setUpdate] = useState(false)
    const [loading, setLoading] = useState(false)
    const [pokemonList, setPokemonList] = useState<IPokemonCardData[]>([]);

    async function fetchPokemonList() {
        setLoading(true)
        await repository.initializer()
        await repository.addNewPokemonsToList();
        setPokemonList(repository.getPokemonList())
        setLoading(false)
    }

    useEffect(() => {
        fetchPokemonList()
    }, [update]);
    const onChangeTextHandler = (searchName: string) => {
        repository.setSearchString(searchName.trim());
        setUpdate(!update);
    }

    return (
        <View style={[style.container, { maxHeight: height }]}>
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
                    <Search height={24} width={24} />
                    <TextInput
                        style={style.textInput}
                        placeholder="What Pokémon are you looking for?"
                        onChangeText={onChangeTextHandler}
                    />
                </View>
                <FlatList
                    style={style.pokemonsList}
                    data={pokemonList}
                    renderItem={({ item }) => {
                        return (<PokemonCard pokemon={item} navigation={navigation} />)
                    }}
                    keyExtractor={(item, index) => String(item.id)}
                    onEndReached={() => fetchPokemonList()}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={() => {
                        return loading ? <LoadingIndicator /> : null
                    }}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    optionsBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 16
    },
    optionsItens: {
        padding: 16
    },
    contentContainer: {
        paddingHorizontal: 24
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
    pokemonsList: {
        marginTop: 16
    }
});

export default MainScreen;
