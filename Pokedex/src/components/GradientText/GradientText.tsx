import React from "react";
import { Text } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

interface Props {
    style: any
}

const GradientText: React.FC<Props> = (props) => {
    return (
        <MaskedView maskElement={<Text
            numberOfLines={1}
            {...props}
        />}>
            <LinearGradient colors={['#ffffff77', '#ffffff00']} locations={[0,0.7]}>
                <Text
                    numberOfLines={1}
                    {...props}
                    style={[props.style, { opacity: 0 }]}
                />
            </LinearGradient>
        </MaskedView>
    )
}

export default GradientText;