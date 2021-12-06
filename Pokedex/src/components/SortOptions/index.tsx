import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Repository } from "../../repository/Repository";
import { SortType } from "../../repository/SortType";

interface Props {
    repository: Repository
    onChangeSortType: (searchString: string) => void
}
const SortOptions = ({ repository, onChangeSortType }: Props) => {
    const [currentOption, setCurrentOption] = useState<SortType>(repository.sortType);
    const setSortType = (sortType: SortType) => {
        if (sortType != repository.sortType) {
            repository.sortType = sortType;
            setCurrentOption(sortType);
            onChangeSortType(repository.searchString);
        }
    }
    return (
        <View style={style.container}>
            <Text style={style.title}>Sort</Text>
            <Text style={style.description}>Sort Pokémons alphabetically or by National Pokédex Number!</Text>
            <View style={style.optionsContainer}>
                <TouchableOpacity
                    style={[
                        style.optionButton,
                        {
                            backgroundColor: currentOption == SortType.NUMERIC_ASC ? '#ea5d60' : '#f2f2f2'
                        }]}
                    onPress={() => setSortType(SortType.NUMERIC_ASC)}
                >
                    <Text style={[style.option,
                    { color: currentOption == SortType.NUMERIC_ASC ? '#fff' : '#999' }]}
                    >Smallest number first</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        style.optionButton,
                        {
                            backgroundColor: currentOption == SortType.NUMERIC_DESC ? '#ea5d60' : '#f2f2f2'
                        }]}
                    onPress={() => setSortType(SortType.NUMERIC_DESC)}
                >
                    <Text style={[style.option,
                    { color: currentOption == SortType.NUMERIC_DESC ? '#fff' : '#999' }]}
                    >Highest number first</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        style.optionButton,
                        {
                            backgroundColor: currentOption == SortType.ALPHABETIC ? '#ea5d60' : '#f2f2f2'
                        }]}
                    onPress={() => setSortType(SortType.ALPHABETIC)}
                >
                    <Text style={[style.option,
                    { color: currentOption == SortType.ALPHABETIC ? '#fff' : '#999' }]}
                    >A-Z</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        style.optionButton,
                        {
                            backgroundColor: currentOption == SortType.ALPHABETIC_DESC ? '#ea5d60' : '#f2f2f2'
                        }]}
                    onPress={() => setSortType(SortType.ALPHABETIC_DESC)}
                >
                    <Text style={[style.option,
                    { color: currentOption == SortType.ALPHABETIC_DESC ? '#fff' : '#999' }]}
                    >Z-A</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    title: {
        fontWeight: 'bold',
        fontFamily: 'sf-pro-display-bold',
        color: 'black',
        fontSize: 34,
        marginHorizontal: 24,
        marginTop: 24
    },
    description: {
        fontSize: 20,
        fontFamily: 'sf-pro-display-regular',
        color: '#999',
        marginHorizontal: 24,
        marginTop: 0
    },
    optionsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    optionButton: {
        width: 440,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginVertical: 8,
        marginHorizontal: 16
    },
    option: {
        color: '#999',
        fontSize: 16
    }
})

export default SortOptions;