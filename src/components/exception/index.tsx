import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { THEME } from '../../constants/index';
import { styles } from './styles';

function Exception({ loading=false }): React.JSX.Element {

    return (
        <View style={styles.container}>
            {loading ?
                <ActivityIndicator size="small" color={THEME} />
                :
                <Text style={styles.text}>Failed to load stocks</Text>
            }
        </View>
    );
};

export default Exception;