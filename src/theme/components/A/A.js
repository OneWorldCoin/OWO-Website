import React from 'react';
import styled, { css } from 'styled-components';
import { generateProps, variations, transitions } from 'styled-gen';

import colors from '../../variables/colors';
import { getColor } from '../../helpers/getColor';

const colorVariations = {
    default: css`
        color: ${props => !props.color && colors.primary};

        &:hover {
            ${props => !props.withoutHoverEffect && !props.disabled && !props.active && css`
                color: ${props => getColor(props.color, { darken: 0.2 })};
            `}
        }
    `,
};

const Anchor = styled.a`
    background: none;
    background-color: transparent;
    border: 0;
    cursor: default;
    display: inline-block;
    outline: 0;
    padding: 0;
    margin: 0;

    ${props => !props.disabled && !props.active && css`
        cursor: pointer;
    `}

    ${transitions('color', 150, 'outCubic')};
    ${variations(colorVariations)}
    ${generateProps};
`;

const A = ({children, ...other}) => (
    <Anchor
        as={other.href ? 'a' : 'button'}
        {...other}
    >
        {children}
    </Anchor>
);

export default A;