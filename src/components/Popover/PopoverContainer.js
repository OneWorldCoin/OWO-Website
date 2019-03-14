import React from 'react';
import styled, { css } from 'styled-components';
import { position, rgba, size } from 'polished';
import { transitions, mq } from 'styled-gen';
import { colors } from '../../theme';

const PopoverContainerWrapper = styled.div`
    ${props => transitions('all', props.animationDuration, 'outCirc')};
    ${position('absolute')};

    align-self: flex-end;
    border-radius: 12px;
    background-color: ${props => props.alternative ? colors.black : colors.primary};
    box-shadow: 0 0 20px ${rgba(colors.black, .16)};
    margin-top: 8px;
    opacity: 0;
    top: 100%;
    transform: translateY(50px);
    visibility: hidden;

    ${props => props.isActive && css`
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
    `}

    &::before {
        ${size(18)}

        background-color: ${props => props.alternative ? colors.black : colors.primary};
        content: '';
        position: absolute;
        right: 8px;
        top: -1px;
        transform: rotate(45deg);
        z-index: -1;
    }

    ${mq.phone(css`
        ${position('fixed', 'auto', 0, 0, 0)};

        border-radius: 0;
        box-shadow: 0 -10px 20px ${rgba(colors.black, .16)};
        margin-top: 0;
        opacity: 1;
        transform: translateY(100%);
        width: 100%;

        &::before {
            display: none;
        }

        ${props => props.isActive && css`
            transform: translateY(0);
            visibility: visible;
        `}
    `)};
`;

const PopoverContent = styled.div`
    border-radius: 12px;
    overflow: hidden;

    ${mq.phone(css`
        overflow: auto;
        max-height: 70vh;
    `)};
`;

const PopoverContainer = ({ children, ...props }) => {
    return (
        <PopoverContainerWrapper {...props}>
            <PopoverContent>
                {children}
            </PopoverContent>
        </PopoverContainerWrapper>
    );
};

export default PopoverContainer;
