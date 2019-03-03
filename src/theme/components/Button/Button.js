import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { variations, transitions, generateProps } from 'styled-gen';

import { colors, fonts } from '../..';
import { Icon } from '../';
import { getColor } from '../../helpers/getColor';

const IconWrapper = styled.span`
    ${props => props.iconHighlight && !props.lined && css`
        background-color: ${props => props.color ? props.color : colors.white};
        color: ${props => props.bgColor ? props.bgColor : colors.primary};
    `};
`;

const miscVariations = {
    default: css``,
    lined: css`
        border-width: 2px;
        border-style: solid;
        border-color: ${props => props.color ? props.color : 'primary'};
    `,
};

const colorVariations = {
    default: css`
        color: ${props => props.color ? props.color : colors.white};
        background-color: ${props => !props.lined ? props.bgColor ? props.bgColor : colors.primary : 'transparent'};

        ${props => !props.lined && css`
            box-shadow: 0 0 20px ${props => rgba(props.bgColor ? props.bgColor : colors.primary, 0.3)};
        `};

        &:hover {
            ${props => !props.disabled && !props.active && css`
                background-color: ${props => getColor(props.lined ? props.color || colors.primary : props.bgColor || colors.primary, { darken: 0.1 })};
                color: ${props => props.lined && colors.white};
            `}
        }
    `,
};

const sizeVariations = {
    default: css`
        border-radius: 18px;
        font-size: ${fonts.size('xs')};
        height: 36px;
        padding: 0 32px;
    `,

    small: css`
        border-radius: 13px;
        font-size: ${fonts.size('xs')};
        height: 26px;
        padding: 0 16px;
    `,
};

const ButtonEl = styled.button`
    ${transitions('all', 150, 'outCubic')};

    align-items: center;
    cursor: default;
    display: inline-flex;
    font-family: ${fonts.families.sans};
    font-weight: ${fonts.weights.black};
    justify-content: flex-start;
    letter-spacing: 0.6px;
    outline: 0;
    border: 0;

    span {
        line-height: 1;
    }

    ${props => !props.active && !props.disabled && css`
        cursor: pointer;
    `}

    ${variations(miscVariations)};
    ${variations(colorVariations)};
    ${variations(sizeVariations)};
    ${generateProps};
`;

const Button = ({ children, label, href, icon, leftIcon, iconHighlight, withCaret, ...other}) => {
    return (
        <ButtonEl
            as={href ? 'a' : 'button'}
            {...other}
        >
            {!!leftIcon && <IconWrapper className="icon icon-before" iconHighlight={iconHighlight} {...other}><Icon icon={leftIcon} /></IconWrapper>}
            <span>
                {!!label && label}
                {children}
            </span>
            {withCaret && <Icon className="caret" icon="caretDown" size={.5} ml={.5} />}
            {!!icon && <IconWrapper className="icon icon-after" iconHighlight={iconHighlight} {...other}><Icon icon={icon} /></IconWrapper>}
        </ButtonEl>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    icon: PropTypes.string,
    iconHighlight: PropTypes.string,
    label: PropTypes.string,
    leftIcon: PropTypes.string,
    withCaret: PropTypes.bool,
};

export default Button;
