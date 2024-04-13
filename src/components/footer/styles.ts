import { StyleSheet } from 'react-native';
import { WHITE } from '../../constants/index';

export const styles = StyleSheet.create({
    iconContainer: {
        right: 10,
        zIndex: 10,
        alignSelf: 'center'
    },
    bottomSheet: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: WHITE,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 20,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%'
    },
    title: {
        fontWeight: 'bold'
    }
});
