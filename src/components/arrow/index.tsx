import { Svg, Polygon } from 'react-native-svg';

export const UpArrow = ({ size, color }: any) => (
    <Svg width={size} height={size} viewBox="0 0 10 5">
        <Polygon points="0,5 5,0 10,5" fill={color} />
    </Svg>
);

export const DownArrow = ({ size, color }: any) => (
    <Svg width={size} height={size} viewBox="0 0 10 5">
        <Polygon points="0,0 5,5 10,0" fill={color} />
    </Svg>
);