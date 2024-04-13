import { Dimensions } from 'react-native';

//colors
const THEME = '#7d017d';
const WHITE = '#fff';

const TITLES = ['Current value', 'Total investment', 'Today’s Profit & Loss'];
const TITLE_DEFAULT = 'Profit & Loss';
const COLLAPSED_HEIGHT = 100;
const EXPANDED_HEIGHT = Dimensions.get('window').height * 0.25;
const ARROW_SIZE = 20;

export {
    THEME,
    WHITE,
    TITLES,
    TITLE_DEFAULT,
    COLLAPSED_HEIGHT,
    EXPANDED_HEIGHT,
    ARROW_SIZE
}
