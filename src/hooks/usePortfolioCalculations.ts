import { useEffect, useState } from 'react';
import { Holding } from '../types';


const usePortfolioCalculations = (holdings: Holding[]) => {
    const [currentValueTotal, setCurrentValueTotal] = useState<number>(0);
    const [totalInvestment, setTotalInvestment] = useState<number>(0);
    const [totalPNL, setTotalPNL] = useState<number>(0);
    const [todayPNL, setTodayPNL] = useState<number>(0);

    useEffect(() => {
        const calculateValues = () => {
            let currentTotal = 0;
            let investmentTotal = 0;
            let todayProfitLoss = 0;

            holdings.forEach((holding) => {
                const { ltp, quantity, avgPrice, close } = holding;
                const currentValue = ltp * quantity;
                const investmentValue = avgPrice * quantity;

                currentTotal += currentValue;
                investmentTotal += investmentValue;
                todayProfitLoss += (close - ltp) * quantity;
            });

            setCurrentValueTotal(currentTotal);
            setTotalInvestment(investmentTotal);
            setTotalPNL(currentTotal - investmentTotal);
            setTodayPNL(todayProfitLoss);
        };

        calculateValues();
    }, [holdings]);

    return {
        currentValueTotal,
        totalInvestment,
        totalPNL,
        todayPNL,
    };
};

export default usePortfolioCalculations;
