const weights = {
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 800,
    ultra: 900,
};

const sizes = {
    xxs: 10,
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    xxl: 22,

    h6Mobile: 14,
    h6: 16,
    h5Mobile: 18,
    h5: 24,
    h4Mobile: 24,
    h4: 36,
    h3Mobile: 32,
    h3: 48,
    h2Mobile: 46,
    h2: 62,
    h1Mobile: 62,
    h1: 80,
};

const size = size => sizes[size] ? `${sizes[size]}px` : null;

const transforms = {
    capitalize: 'capitalize',
    uppercase: 'uppercase',
    lowercase: 'lowercase',
};

const families = { sans: 'Gotham' };

const fonts = {
    config: [
        { family: 'Gotham', path: 'fonts/gotham', prefix: 'gotham-', weights },
    ],

    families,
    formats: ['woff'],
    size,
    sizes,
    transforms,
    weights,
};

export default fonts;