import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { rgba, size } from 'polished';
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

        ${props => !props.lined && !props.noShadow && css`
            ${props.overBlack ? css`
                box-shadow: 0 0 20px ${rgba('black', 1)};
            `: css`
                box-shadow: 0 0 20px ${rgba(props.bgColor ? props.bgColor : colors.primary, 0.3)};
            `}
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
        padding-right: ${props => props.iconHighlight && props.icon ? 0 : '2em'};
        padding-left: ${props => props.iconHighlight && props.leftIcon ? 0 : '2em'};

        ${props => props.iconHighlight && css`
            .icon {
                ${size(48)};

                svg {
                    ${size(20)};
                }

                &.icon-before {
                    margin-left: 1em;
                }

                &.icon-after {
                    margin-left: 1em;
                }
            }
        `};
    `,

    small: css`
        border-radius: 13px;
        font-size: ${fonts.size('xs')};
        height: 26px;
        padding: 0 16px;
    `,

    large: css`
        border-radius: 24px;
        font-size: ${fonts.size('xs')};
        height: 48px;
        padding: 0 32px;
    `,
};

const ButtonEl = styled.button`
    ${transitions('all', 150, 'outCubic')};

    align-items: center;
    border: 0;
    cursor: default;
    display: inline-flex;
    font-family: ${fonts.families.sans};
    font-weight: ${fonts.weights.black};
    justify-content: ${props => props.fluid ? 'center' : 'flex-start'};
    letter-spacing: 0.6px;
    outline: 0;
    position: relative;
    width: ${props => props.fluid && '100%'};

    .icon {
        &.icon-before {
            margin-left: .5em;
        }

        &.icon-after {
            margin-left: .5em;
        }

        ${props => props.iconHighlight && css`
            align-items: center;
            border-radius: 50%;
            display: flex;
            justify-content: center;
        `};
    }

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

const Button = ({ children, label, href, icon, leftIcon, withCaret, ...other}) => {
    return (
        <ButtonEl
            as={href ? 'a' : 'button'}
            leftIcon={!!leftIcon}
            icon={!!icon}
            href={href}
            {...other}
        >
            {!!leftIcon && <IconWrapper className="icon icon-before" {...other}><Icon icon={leftIcon} /></IconWrapper>}
            <span>
                {!!label && label}
                {children}
            </span>
            {withCaret && <Icon className="caret" icon="caretDown" size={.5} ml={.5} />}
            {!!icon && <IconWrapper className="icon icon-after" {...other}><Icon icon={icon} /></IconWrapper>}
        </ButtonEl>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
    leftIcon: PropTypes.string,
    noShadow: PropTypes.string,
    withCaret: PropTypes.bool,
};

export default Button;
