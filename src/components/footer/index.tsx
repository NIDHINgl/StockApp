import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import usePortfolioCalculations from '../../hooks/usePortfolioCalculations';
import { DownArrow, UpArrow } from '../';
import { Holding } from '../../types';
import { styles } from './styles';
import { roundIfDecimal } from '../../utils/index';
import { TITLES, TITLE_DEFAULT, THEME, COLLAPSED_HEIGHT, EXPANDED_HEIGHT, ARROW_SIZE } from '../../constants/index';


const DetailsItem = ({ item, value }: any) => (
    <View style={styles.contentContainer}>
        <Text style={styles.title}>{item}</Text>
        <Text>₹{roundIfDecimal(value, 2)}</Text>
    </View>
)

const BottomSheet: React.FC = ({ holdingsData }: Holding) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const heightAnimatedValue = useSharedValue(COLLAPSED_HEIGHT);
    const { currentValueTotal, totalInvestment, totalPNL, todayPNL } = usePortfolioCalculations(holdingsData || []);

    const toggleBottomSheet = () => {
        heightAnimatedValue.value = withSpring(isExpanded ? COLLAPSED_HEIGHT : EXPANDED_HEIGHT);
        setIsExpanded(!isExpanded);
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: heightAnimatedValue.value,
        };
    });

    const getValue = (index: number) => {
        switch (index) {
            case 0:
                return currentValueTotal;
            case 1:
                return totalInvestment;
            case 2:
                return todayPNL;
        }
    }

    return (
        <TouchableWithoutFeedback onPress={toggleBottomSheet} style={{ flex: 1 }}>
            <Animated.View style={[styles.bottomSheet, animatedStyle]}>
                <View style={styles.iconContainer}>
                    {isExpanded ? <DownArrow size={ARROW_SIZE} color={THEME} /> : <UpArrow size={ARROW_SIZE} color={THEME} />}
                </View>
                <View>
                    {isExpanded && TITLES?.map((item, index) => (
                        <DetailsItem item={item} value={getValue(index)} />
                    ))}

                    <DetailsItem item={TITLE_DEFAULT} value={totalPNL} />
                </View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};


export default BottomSheet;
