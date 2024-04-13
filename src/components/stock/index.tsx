import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { StockItemProps } from '../../types/index';
import useProfitLoss from '../../hooks/useProfitLoss';
import { roundIfDecimal } from '../../utils/index';

const StockItem: React.FC<StockItemProps> = ({ item, index }) => {

  const profitLossValue = useProfitLoss(item);

  return (
    <View key={index} style={styles.stockItemContainer}>
      <View style={styles.symbolContainer}>
        <Text style={styles.symbol}>{item?.symbol}</Text>
        <View style={styles.contentContainer}>
          <Text>LTP: </Text>
          <Text style={styles.content}>₹ {item?.ltp}</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <Text>{item?.quantity}</Text>
        <View style={styles.contentContainer}>
          <Text>P/L: </Text>
          <Text style={styles.content}>₹ {roundIfDecimal(profitLossValue, 2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default StockItem;