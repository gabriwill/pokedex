import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

interface Props {
    height?: number;
}

const LoadingIndicator = ({ height }: Props) => {
    return <>
        <View style={[style.container, { height: height || 100 }]}>
            <ActivityIndicator size={'large'} />
        </View>
    </>
}

const style = StyleSheet.create({
    container: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default LoadingIndicator;