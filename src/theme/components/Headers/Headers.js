import styled, { css } from 'styled-components';
import { mq, generateProps } from 'styled-gen';

import { fonts, colors } from '../../';

const Headers = styled.span`
    color: ${colors.primary};
    font-weight: ${fonts.weights.black};
    line-height: 1.1;
`;

const H6 = styled(Headers.withComponent('h6'))`
    font-size: ${fonts.size('h6Mobile')};

    ${mq.tabletLandscape(css`
        font-size: ${fonts.size('h6')};
    `)};

    ${generateProps};
`;

const H5 = styled(Headers.withComponent('h5'))`
    font-size: ${fonts.size('h6Mobile')};

    ${mq.tabletLandscape(css`
        font-size: ${fonts.size('h5')};
    `)};

    ${generateProps};
`;

const H4 = styled(Headers.withComponent('h4'))`
    font-size: ${fonts.size('h4Mobile')};

    ${mq.tabletLandscape(css`
        font-size: ${fonts.size('h4')};
    `)};

    ${generateProps};
`;

const H3 = styled(Headers.withComponent('h3'))`
    font-size: ${fonts.size('h3Mobile')};

    ${mq.tabletLandscape(css`
        font-size: ${fonts.size('h3')};
    `)};

    ${generateProps};
`;

const H2 = styled(Headers.withComponent('h2'))`
    font-size: ${fonts.size('h2Mobile')};

    ${mq.tabletLandscape(css`
        font-size: ${fonts.size('h2')};
    `)};

    ${generateProps};
`;

const H1 = styled(Headers.withComponent('h1'))`
    font-size: ${fonts.size('h1Mobile')};

    ${mq.tabletLandscape(css`
        font-size: ${fonts.size('h1')};
    `)};

    ${generateProps};
`;

export {
    H6,
    H5,
    H4,
    H3,
    H2,
    H1,
};