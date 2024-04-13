import { StyleSheet, Dimensions } from 'react-native';


export const styles = StyleSheet.create({
    stockItemContainer: {
        width: '100%',
        height: 66,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: '3%',
    },
    symbolContainer: {
        width: '92%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    quantityContainer: {
        width: '92%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    symbol: {
        fontWeight: 'bold',
        fontSize: 14
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    content: {
        fontWeight: '600',
        fontSize: 14
    },


});
