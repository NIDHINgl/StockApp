import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { CustomHeaderProps } from '../../types/index';

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CustomHeader;
