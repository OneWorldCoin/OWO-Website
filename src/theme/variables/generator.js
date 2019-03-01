import { margin, padding, size } from 'polished';

const namedProps = [
    { list: 'colors', cssProp: 'color' },
    { prefix: 'bg', list: 'colors', cssProp: 'background-color' },
    { prefix: 'font', list: 'fonts.sizes', cssProp: 'font-size', units: 'px' },
    { prefix: 'font', list: 'fonts.weights', cssProp: 'font-weight' },
    { list: 'fonts.transforms', cssProp: 'text-transform' },
    { list: { relative: 'relative', absolute: 'absolute' }, cssProp: 'position' },
    { list: { center: 'center', left: 'left', right: 'right' }, cssProp: 'text-align' },
];

const spaceProps = [
    { prop: 'margin', units: 'rem' },
    { prop: 'padding', units: 'rem' },
];

const variableProps = [
    { name: 'fontSize', list: 'fonts.sizes', cssProp: 'font-size', units: 'px' },
    { name: 'fontWeight', list: 'fonts.weight', cssProp: 'font-weight' },
    { name: 'textTransform,', list: 'fonts.transforms', cssProp: 'font-weight' },
    { name: 'color', list: 'colors', cssProp: 'color' },
    { name: 'bg', list: 'colors', cssProp: 'background-color' },
    { name: 'display', cssProp: 'display' },
    { name: 'textAlign', cssProp: 'text-align'},
    { name: 'lineHeight', cssProp: 'line-height'},
    { name: 'letterSpacing', cssProp: 'letter-spacing', units: 'px' },
    { name: 'opacity', cssProp: 'opacity' },
    { name: 'maxWidth', cssProp: 'max-width', units: 'px' },

    // fn props
    { name: 'margin', helperFn: margin, units: 'rem' },
    { name: 'padding', helperFn: padding, units: 'rem' },
    { name: 'size', helperFn: size, units: 'rem' },

];

const generator = {
    namedProps,
    spaceProps,
    variableProps,
};

export default generator;
