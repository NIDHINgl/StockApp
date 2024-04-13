import { StyleSheet } from 'react-native';
import { THEME, WHITE } from '../../constants/index';

export const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: THEME,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: WHITE,
    },
});
