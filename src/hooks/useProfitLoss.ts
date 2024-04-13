import { useMemo } from 'react';
import { UseProfitLossProps } from '../types';

const useProfitLoss = ({ ltp, quantity, avgPrice }: UseProfitLossProps): number => {
    const profitLoss = useMemo(() => {
        const currentValue = ltp * quantity;
        const investmentValue = avgPrice * quantity;
        const profitLossValue = currentValue - investmentValue;
        return profitLossValue;
    }, [ltp, quantity, avgPrice]);

    return profitLoss;
};

export default useProfitLoss;
