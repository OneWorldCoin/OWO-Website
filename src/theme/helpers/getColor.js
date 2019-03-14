import colors from '../variables/colors';
import { rgba, darken as drkn, lighten as lhgtn } from 'polished';

const defaultColor = 'primary';

const findDeep = (str, obj) => {
    if (!str) {
        return;
    }

    const splitted = str.split('.');
    const other = splitted.slice(1, splitted.length).join('.');
    return obj[splitted[0]] ? obj[splitted[0]] : findDeep(other, obj);
};

export const getColor = (color, options) => {
    const { opacity, darken, lighten } = options || {};
    let colour = findDeep(color || defaultColor, colors) || colors[defaultColor];

    colour = opacity !== undefined ? rgba(colour, opacity) : colour;
    colour = darken ? drkn(darken, colour) : colour;
    colour = lighten ? lhgtn(lighten, colour) : colour;

    return colour;
};