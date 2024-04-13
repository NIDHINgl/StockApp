export const roundIfDecimal = (number: number, decimalPlaces: number) => {
    if (Number.isInteger(number) || decimalPlaces <= 0) {
        return number;
    } else {
        const roundedNumber = +number.toFixed(decimalPlaces);
        return roundedNumber;
    }
}